<?php

namespace App\Service;

use App\Controller\ArticleReferenceAdminController;
use Aws\S3\S3Client;
use Gedmo\Sluggable\Util\Urlizer;
use League\Flysystem\AdapterInterface;
use League\Flysystem\FileNotFoundException;
use League\Flysystem\FilesystemInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\Asset\Context\RequestStackContext;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\HeaderUtils;

/**
 * Helper to handle the files by uploads and fixtures
 * Class UploaderHelper
 * @package App\Service
 */
class UploaderHelper
{
    const ARTICLE_IMAGE = 'article_image';
    const ARTICLE_REFERENCE = 'article_reference';

    //private $uploadsPath;
    private $requestStackContext;
    private $publicUploadsFilesystem;
    private $privateUploadsFilesystem;
    private $logger;

    private $publicAssetBaseUrl;
    private $privateS3Bucket;
    private $s3Client;

    /**
     * Dependency Injection -we need an direction to our uploads path
     * UploaderHelper constructor.
     * //@param string $uploadsPath
     * If you're using version 4 of oneup/flysystem-bundle (so, flysystem v2), autowire Filesystem instead of FilesystemInterface from League\Flysystem.
     * @param string $uploadedAssetsBaseUrl -@see services.yaml
     *
     * If you're using version 4 of oneup/flysystem-bundle (so, flysystem v2), autowire Filesystem instead of FilesystemInterface from League\Flysystem.
     * @param FilesystemInterface $publicUploadsFilesystem -@see services.yaml filesystem for public files
     * @param FilesystemInterface $privateUploadsFilesystem  -@see services.yaml filesystem for private files
     */
    public function __construct(
        FilesystemInterface $publicUploadsFilesystem /*string $uploadsPath before fileSystem*/,
        FilesystemInterface $privateUploadsFilesystem,
        RequestStackContext $requestStackContext,
        LoggerInterface $logger,
        string $uploadedAssetsBaseUrl,
        string $privateS3Bucket,
        S3Client $s3Client
    )
    {
        // $this->uploadsPath = $uploadsPath;
        $this->publicUploadsFilesystem = $publicUploadsFilesystem;
        $this->privateUploadsFilesystem = $privateUploadsFilesystem;
        $this->requestStackContext = $requestStackContext;
        $this->logger = $logger;
        $this->publicAssetBaseUrl = $uploadedAssetsBaseUrl;
        $this->privateS3Bucket = $privateS3Bucket;
        $this->s3Client = $s3Client;
    }

    /**
     * Method to handle uploadingArticleImage
     * @param File $file //it was an UploadedFile (it extend File) $uploadedFile but we had to change it with File because we use it in fixture
     * @param null|string $existingFilename name of the file that we want to use after editing
     * @return string the name of the file
     */
    public function uploadArticleImage(File $file, ?string $existingFilename): string
    {

        // now we use public filesystem
        $newFilename = $this->uploadFile($file, self::ARTICLE_IMAGE, true);

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

    /**
     * After uploadArticleReference we want put file to the privateDirectory @see ArticleReferenceAdminController
     * @param File $file
     * @return string
     * @throws \League\Flysystem\FileExistsException
     */
    public function uploadArticleReference(File $file): string
    {
        return $this->uploadFile($file, self::ARTICLE_REFERENCE, false);
    }

    public function getPublicPath(string $path): string
    {
        $fullPath = $this->publicAssetBaseUrl.'/'.$path;
        // if it's already absolute, just return
        if (strpos($fullPath, '://') !== false) {
            return $fullPath;
        }

        // needed if you deploy under a subdirectory
        return $this->requestStackContext
            ->getBasePath().$fullPath;
    }


    /**
     * Get Resource of file from path depending on the isPublic variable
     * @see ArticleReferenceAdminController::downloadArticleReference()
     * @return resource
     */
    public function readStream(string $path, bool $isPublic)
    {
        $filesystem = $isPublic ? $this->publicUploadsFilesystem : $this->privateUploadsFilesystem;
        $resource = $filesystem->readStream($path);
        if ($resource === false) {
            throw new \Exception(sprintf('Error opening stream for "%s"', $path));
        }
        return $resource;
    }

    /**
     * Handle deleting the file
     * @param string $path
     * @param bool $isPublic
     * @throws \Exception
     */
    public function deleteFile(string $path, bool $isPublic)
    {
        $filesystem = $isPublic ? $this->publicUploadsFilesystem : $this->privateUploadsFilesystem;
        $result = $filesystem->delete($path);
        if ($result === false) {
            throw new \Exception(sprintf('Error deleting "%s"', $path));
        }
    }

    /**
     * Handle the file by private filesystem and public filesystem
     * @param File $file
     * @param string $directory where to save: @see uploadArticleReference (private) and @see uploadArticleImage (public)
     * @param bool $isPublic which filesystem we want to use
     * @return string
     * @throws \League\Flysystem\FileExistsException
     */
    private function uploadFile(File $file, string $directory, bool $isPublic)
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

        // we want to use specific filesystem in dependence if it is public or not
        $filesystem = $isPublic ? $this->publicUploadsFilesystem : $this->privateUploadsFilesystem;

        //create new file with content in less memory using way
        $stream = fopen($file->getPathname(), 'r');
        $result = $filesystem->writeStream(
        // before we use self::ARTICLE_IMAGE.'/'.$newFilename, but now we handle public and private types
            $directory.'/'.$newFilename,
            $stream,
            [
                'visibility' => $isPublic ? AdapterInterface::VISIBILITY_PUBLIC : AdapterInterface::VISIBILITY_PRIVATE
            ]
        );

        if ($result === false) {
            throw new \Exception(sprintf('Could not write uploaded file "%s"', $newFilename));
        }

        // we want to close stream after writing
        if (is_resource($stream)) {
            fclose($stream);
        }
        return $newFilename;
    }

    /**
     * Method to get the S3 presigned URL for private files
     */
    public function getS3PrivateFile(string $fileKey, string $mimetype, string $orginalFilename)
    {
        if(!$this->s3Client){
            throw new \Exception('S3 Client is not configured.');
        }

        /*
         * additionally we set Content-Type to handle the content (we dont want to show user something like "AASVAEAWDAWDA??DASAXASS_1231D:ADAWDAWD!211dawa")
         * To avoid it we use HeaderUtils::makeDisposition(). For the first argument, we'll tell it whether we want the user to
         * download the file or open it in the browser by passing HeaderUtils::DISPOSITION_ATTACHMENT or DISPOSITION_INLINE.
         */
        $dispotion = HeaderUtils::makeDisposition(
            HeaderUtils::DISPOSITION_ATTACHMENT,
            $orginalFilename
        );

        $cmd = $this->s3Client->getCommand('GetObject', [
            'Bucket' => $this->privateS3Bucket,
            'Key'    => $fileKey,
            'ResponseContentType' => $mimetype,
            'ResponseContentDisposition' => $dispotion
        ]);

        // we set how long the URL will be valid and run this cmd
        $request = $this->s3Client->createPresignedRequest($cmd, '+30 minutes');

        return (string) $request->getUri();
    }
}
