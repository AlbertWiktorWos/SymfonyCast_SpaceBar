<?php

namespace App\Service;

use App\Entity\User;
use Knp\Snappy\Pdf;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\NamedAddress;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookupInterface;
use Twig\Environment;

class Mailer
{
    private $mailer;
    private $twig;
    private $pdf;
    private $entrypointLookup;

    /**
     * Mailer constructor.
     * @param MailerInterface $mailer //we use it to send this email
     * @param Environment $twig it is a twig envoironment see "use"
     * @param Pdf $pdf it comes from snappy bundle
     * @param EntrypointLookupInterface $entrypointLookup now we can put css to more than one email (because we can ask encore once per request/command)
     */
    public function __construct(
        MailerInterface $mailer,
        Environment $twig,
        Pdf $pdf,
        EntrypointLookupInterface $entrypointLookup
    )
    {
        $this->mailer = $mailer;
        $this->twig = $twig;
        $this->pdf = $pdf;
        $this->entrypointLookup = $entrypointLookup;

    }

    public function sendWelcomeMessage(User $user): TemplatedEmail{

        /**
         * Prepare email to send
         */
        $email = (new TemplatedEmail()) //or just Email() if we dont use template
        //or we can use Address (4.4 and higer), and more addreses in array if we want to
        // ->from('alienmailcarrier@example.com') // from which email we send the mail  //todo in future versions use Address!
        //->from(new NamedAddress('mescruu@gmail.com', 'The Space Bar'))// from which email we send the mail (now we added this in SetFromListener
        //->to($user->getEmail()) //user email - or we can use Address (4.4 and higer), and more addreses in array if we want to
        ->to(new NamedAddress($user->getEmail(), $user->getFirstName())) //user email //todo in future versions use Address!
        ->subject('Welcome to the Space Bar!') // subject of our email
        ->htmlTemplate('email/welcome.html.twig')
            ->context([
                'user' => $user,
            ]);
        /*
        ->html("Nice to meet you {$user->getFirstName()}! ❤️") //usefull if we use Email()
        ->text("Nice to meet you {$user->getFirstName()}! ❤️");
        */

        $this->mailer->send($email);

        return $email;
    }

    public function sendAuthorWeeklyReportMessage(User $author, array $articles): TemplatedEmail{

        // render html from twig
        $html = $this->twig->render('email/author-weekly-report-pdf.html.twig', [
            'articles' => $articles,
        ]);
        $pdf = $this->pdf->getOutputFromHtml($html, ["enable-local-file-access" => true]); //create pdf from html (the enable-local-file-acces prevent from  Exit with code 1 due to network error: ProtocolUnknownError
        $this->entrypointLookup->reset(); //we force encore to forget that he render something and try to render once again

        /**
         * Duplicated
         */
        $email = (new TemplatedEmail())
            //->from(new NamedAddress('mescruu@gmail.com', 'The Space Bar'))// from which email we send the mail (now we added this in SetFromListener
            ->to(new NamedAddress($author->getEmail(), $author->getFirstName()))
            ->subject('Your weekly report on the Space Bar!')
            ->htmlTemplate('email/author-weekly-report.html.twig')
            ->context([ //additional vars that we will use in template
                'author' => $author,
                'articles' => $articles,
            ])
            ->attach($pdf, sprintf('weekly-report-%s.pdf', date('Y-m-d'))); //attach the pdfs file with name
        $this->mailer->send($email);

        return $email;
    }
}
