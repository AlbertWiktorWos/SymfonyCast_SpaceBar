<?php

namespace App\Command;

use App\Repository\ArticleRepository;
use App\Repository\UserRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\NamedAddress;

class AuthorWeeklyReportSendCommand extends Command
{
    protected static $defaultName = 'app:author-weekly-report:send';

    private $userRepository;
    private $articleRepository;
    private $mailer;

    public function __construct(UserRepository $userRepository, ArticleRepository $articleRepository, MailerInterface $mailer)
    {
        parent::__construct(null);
        $this->userRepository = $userRepository;
        $this->articleRepository = $articleRepository;
        $this->mailer = $mailer;
    }

    /**
     * Config of our command
     */
    protected function configure()
    {
        $this
            ->setDescription('Send weekly reports to authors')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        //we find all of substribed newsletter ish user
        $authors = $this->userRepository
            ->findAllSubscribedToNewsletter();

        // we create progress bar to show how many users we send emails
        $io->progressStart(count($authors));
        foreach ($authors as $author) {
            //we fill our bar
            $io->progressAdvance();

            // we find articles that we want to send
            $articles = $this->articleRepository
                ->findAllPublishedLastWeekByAuthor($author);

            // Skip authors who do not have published articles for the last week
            if (count($articles) === 0) {
                continue;
            }
            /**
             * Duplicated
             */
            $email = (new TemplatedEmail())
                ->from(new NamedAddress('alienmailcarrier@example.com', 'The Space Bar'))
                ->to(new NamedAddress($author->getEmail(), $author->getFirstName()))
                ->subject('Your weekly report on the Space Bar!')
                ->htmlTemplate('email/author-weekly-report.html.twig')
                ->context([ //additional vars that we will use in template
                    'author' => $author,
                    'articles' => $articles,
                ]);
            $this->mailer->send($email);
        }
        // we finished our bar
        $io->progressFinish();

        // success info
        $io->success('Weekly reports were sent to authors!');

        return 0;
    }
}
