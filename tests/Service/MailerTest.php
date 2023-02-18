<?php

namespace App\Tests\Service;

use App\Entity\Article;
use App\Entity\User;
use App\Service\Mailer;
use Knp\Snappy\Pdf;
//use PHPUnit\Framework\TestCase; //we use kernel so we can extend TestCase no logner
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\NamedAddress;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookupInterface;
use Twig\Environment;

class MailerTest extends KernelTestCase //we use kernel so we can extend TestCase no logner
{
    public function testSendWelcomeMessage()
    {
        //we mock mailer interface to check hwo it works without executing sending emails
        $symfonyMailer = $this->createMock(MailerInterface::class);
        $symfonyMailer->expects($this->once())
            ->method('send');

        //we create mock of our classes that we wanted to use in our mailer
        $pdf = $this->createMock(Pdf::class);
        $twig = $this->createMock(Environment::class);
        $entrypointLookup = $this->createMock(EntrypointLookupInterface::class);

        //create new user (without adding it to database) and set some variables
        $user = new User();
        $user->setFirstName('Victor');
        $user->setEmail('victor@symfonycasts.com');

        // we create new Mailer (our service) with mocks pass into the constructor
        $mailer = new Mailer($symfonyMailer, $twig, $pdf, $entrypointLookup);
        $email = $mailer->sendWelcomeMessage($user);

        //lets check if we generate an email what we expected
        $this->assertSame('Welcome to the Space Bar!', $email->getSubject());
        $this->assertCount(1, $email->getTo());
        /** @var NamedAddress[] $namedAddresses */
        $namedAddresses = $email->getTo();
        $this->assertInstanceOf(NamedAddress::class, $namedAddresses[0]);
        $this->assertSame('Victor', $namedAddresses[0]->getName());
        $this->assertSame('victor@symfonycasts.com', $namedAddresses[0]->getAddress());
    }

    /**
     * We used here real services and wkhtmltopdf!
     */
    public function testIntegrationSendAuthorWeeklyReportMessage()
    {
        //it alows us to use real services!
        self::bootKernel();

        //we mock mailer interface to check hwo it works without executing sending emails
        $symfonyMailer = $this->createMock(MailerInterface::class);
        $symfonyMailer->expects($this->once())
            ->method('send');

        //we use real services that we wanted to use in our mailer
        //todo Attention! in symfony 5.3 instead of self::$container we have to use static:getcontainer() (calling bootKernel() is no longer needed!)
        $pdf = self::$container->get(Pdf::class);
        $twig = self::$container->get(Environment::class);
        $entrypointLookup = $this->createMock(EntrypointLookupInterface::class);

        //create new user (without adding it to database) and set some variables
        $user = new User();
        $user->setFirstName('Victor');
        $user->setEmail('victor@symfonycasts.com');

        //create new Article (without adding it to database) and set some variables
        $article = new Article();
        $article->setTitle('Black Holes: Ultimate Party Pooper');


        //lets check if we generate an email what we expected
        $mailer = new Mailer($symfonyMailer, $twig, $pdf, $entrypointLookup);
        $email = $mailer->sendAuthorWeeklyReportMessage($user, [$article]);
        $this->assertCount(1, $email->getAttachments());
    }
}
