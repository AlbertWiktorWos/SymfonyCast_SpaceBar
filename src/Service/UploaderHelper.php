<?php

namespace App\Service;

use Gedmo\Sluggable\Util\Urlizer;
use Symfony\Component\Asset\Context\RequestStackContext;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploaderHelper
{
    const ARTICLE_IMAGE = 'article_image';

    private $uploadsPath;
    private $requestStackContext;

    /**
     * Dependency Injection -we need an direction to our uploads path
     * UploaderHelper constructor.
     * @param string $uploadsPath
     */
    public function __construct(string $uploadsPath, RequestStackContext $requestStackContext)
    {
        $this->uploadsPath = $uploadsPath;
        $this->requestStackContext = $requestStackContext;
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
     * @return string the name of the file
     */
    public function uploadArticleImage(File $file): string
    {
        $destination = $this->uploadsPath.'/'.self::ARTICLE_IMAGE;

        //if we upload we have an UploadedFile, but in fixtures we use File
        if ($file instanceof UploadedFile) {
            $originalFilename = $file->getClientOriginalName();
        } else {
            $originalFilename = $file->getFilename();
        }

        $newFilename = Urlizer::urlize(pathinfo($originalFilename, PATHINFO_FILENAME)).'-'.uniqid().'.'.$file->guessExtension();

        $file->move(
            $destination,
            $newFilename
        );

        return $newFilename;
    }
}
