<?php

namespace App\Command;

use App\Repository\ArticleRepository;
use App\Repository\UserRepository;
use App\Service\Mailer;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class AuthorWeeklyReportSendCommand extends Command
{
    protected static $defaultName = 'app:author-weekly-report:send';

    private $userRepository;
    private $articleRepository;
    private $mailer;

    /**
     * AuthorWeeklyReportSendCommand constructor.
     * @param UserRepository $userRepository
     * @param ArticleRepository $articleRepository
     * @param Mailer $mailer
     */
    public function __construct(
        UserRepository $userRepository,
        ArticleRepository $articleRepository,
        Mailer $mailer
    )
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

            //we use our mailer service to send emails
            $this->mailer->sendAuthorWeeklyReportMessage($author, $articles);

        }
        // we finished our bar
        $io->progressFinish();

        // success info
        $io->success('Weekly reports were sent to authors!');

        return 0;
    }
}
