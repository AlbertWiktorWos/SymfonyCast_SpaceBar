<?php

namespace App\Service;

use Gedmo\Sluggable\Util\Urlizer;
use League\Flysystem\FilesystemInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\Asset\Context\RequestStackContext;
use Symfony\Component\Filesystem\Exception\FileNotFoundException;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploaderHelper
{
    const ARTICLE_IMAGE = 'article_image';

    //private $uploadsPath;
    private $requestStackContext;
    private $publicFileSystem;
    private $logger;

    /**
     * Dependency Injection -we need an direction to our uploads path
     * UploaderHelper constructor.
     * //@param string $uploadsPath
     * If you're using version 4 of oneup/flysystem-bundle (so, flysystem v2), autowire Filesystem instead of FilesystemInterface from League\Flysystem.
     * @param FilesystemInterface $publicUploadsFilesystem
     */
    public function __construct(FilesystemInterface $publicUploadsFilesystem /*string $uploadsPath before fileSystem*/, RequestStackContext $requestStackContext, LoggerInterface $logger)
    {
        // $this->uploadsPath = $uploadsPath;
        $this->publicUploadsFilesystem = $publicUploadsFilesystem;
        $this->requestStackContext = $requestStackContext;
        $this->logger = $logger;
    }

    public function getPublicPath(string $path): string
    {
        // needed if you deploy under a subdirectory
        return $this->requestStackContext
                ->getBasePath().'/uploads/'.$path;
    }

    /**
     * Method to handle uploadingArticleImage
     * @param File $file //it was an UploadedFile (it extend File) $uploadedFile but we had to change it with File because we use it in fixture
     * @param null|string $existingFilename name of the file that we want to use after editing
     * @return string the name of the file
     */
    public function uploadArticleImage(File $file, ?string $existingFilename): string
    {
        /* Before filesystem
            $destination = $this->uploadsPath.'/'.self::ARTICLE_IMAGE;
         */

        //if we upload we have an UploadedFile, but in fixtures we use File
        if ($file instanceof UploadedFile) {
            $originalFilename = $file->getClientOriginalName();
        } else {
            $originalFilename = $file->getFilename();
        }

        $newFilename = Urlizer::urlize(pathinfo($originalFilename, PATHINFO_FILENAME)).'-'.uniqid().'.'.$file->guessExtension();

        /* Before filesystem
        $file->move(
            $destination,
            $newFilename
        );
        */

        //create new file with content
        /*
        $this->publicUploadsFilesystem->write( //this (file_get_contents) reads the entire contents of the file into PHP's memory.
            self::ARTICLE_IMAGE.'/'.$newFilename,
            file_get_contents($file->getPathname())
        );
        */

        //create new file with content in less memory using way
        $stream = fopen($file->getPathname(), 'r');
        $this->publicUploadsFilesystem->writeStream(
            self::ARTICLE_IMAGE.'/'.$newFilename,
            $stream
        );

        // we want to close stream after writing
        if (is_resource($stream)) {
            fclose($stream);
        }

        // remove the old file
        if ($existingFilename) {
            try {
                $result = $this->publicUploadsFilesystem->delete(self::ARTICLE_IMAGE.'/'.$existingFilename);
                if ($result === false) {
                    throw new \Exception(sprintf('Could not delete old uploaded file "%s"', $existingFilename));
                }
            } catch (FileNotFoundException $e) {
                $this->logger->alert(sprintf('Old uploaded file "%s" was missing when trying to delete', $existingFilename));
            }
        }

        return $newFilename;
    }
}
