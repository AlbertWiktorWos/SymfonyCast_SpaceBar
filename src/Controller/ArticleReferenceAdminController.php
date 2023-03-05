<?php

namespace App\Controller;

use App\Entity\Article;
use App\Entity\ArticleReference;
use App\Service\UploaderHelper;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\HeaderUtils;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\ConstraintViolation;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * Controller to add additional files to article
 * Class ArticleReferenceAdminController
 * @package App\Controller
 */
class ArticleReferenceAdminController extends BaseController
{
    /**
     * @Route("/admin/article/{id}/references", name="admin_article_add_reference", methods={"POST"})
     * @IsGranted("MANAGE", subject="article")
     * @param Article $article (it is get from article/{id} automatically)
     * @param ValidatorInterface $validator validator that help us to valid file
     */
    public function uploadArticleReference(Article $article, Request $request, UploaderHelper $uploaderHelper, EntityManagerInterface $entityManager, ValidatorInterface $validator)
    {
        /** @var UploadedFile $uploadedFile */
        $uploadedFile = $request->files->get('reference');
        // Validation
        $violations = $validator->validate(
            $uploadedFile, //this uploadedFile doesnt contain a validation annotation so we put new below
            [
                new NotBlank([
                    'message' => 'Please select a file to upload'
                ]),
                new File([ // @see Symfony\Component\Validator\Constraints\File
                    'maxSize' => '1M',
                    'mimeTypes' => [
                        'image/*',
                        'application/pdf',
                        'application/msword',
                        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                        'text/plain'
                    ]
                ])
            ]
        );
        if ($violations->count() > 0) {
            /** @var ConstraintViolation $violation */
            //violations is an object but implements ArrayAccess
            $violation = $violations[0];
            //fast way to push one-time error message
            $this->addFlash('error', $violation->getMessage());
            return $this->redirectToRoute('admin_article_edit', [
                'id' => $article->getId(),
            ]);
        }
        // End of Validation

        $filename = $uploaderHelper->uploadArticleReference($uploadedFile);
        $articleReference = new ArticleReference($article);
        $articleReference->setFilename($filename);
        $articleReference->setOrginalFilename($uploadedFile->getClientOriginalName() ?? $filename);
        //application/octet-stream is sort of a common way to say "I have no idea what this file is". ("arbitrary binary data" in RFC 2046)
        $articleReference->setMimeType($uploadedFile->getMimeType() ?? 'application/octet-stream');
        $entityManager->persist($articleReference);
        $entityManager->flush();
        return $this->redirectToRoute('admin_article_edit', [
            'id' => $article->getId(),
        ]);
    }

    /**
     * Handle download of additional attachment to the article
     * @Route("/admin/article/references/{id}/download", name="admin_article_download_reference", methods={"GET"})
     */
    public function downloadArticleReference(ArticleReference $reference, UploaderHelper $uploaderHelper)
    {
        $article = $reference->getArticle();
        // check we have got an access
        $this->denyAccessUnlessGranted('MANAGE', $article);

        /**
         * We're used to returning a Response object or a JsonResponse object where we already have the response as a string or array.
         * But if we want to stream something to the user without reading it all into memory, we need a special class called StreamedResponse.
         *
         * When response is ready object use the callback function that we passed into this constructor:
         * We added an use statement with $reference and $uploaderHelper into the callback's scope so we can use them inside
         */
        $response = new StreamedResponse(function() use ($reference, $uploaderHelper) {
           //To send a file stream to the user, it looks a little strange. Start with $outputStream set to fopen('php://output') and wb.
            $outputStream = fopen('php://output', 'wb');
            $fileStream = $uploaderHelper->readStream($reference->getFilePath(), false);
            stream_copy_to_stream($fileStream, $outputStream);
        });

        /**
         * additionally we set Content-Type to handle the content (we dont want to show user something like "AASVAEAWDAWDA??DASAXASS_1231D:ADAWDAWD!211dawa")
         * To avoid it we use HeaderUtils::makeDisposition(). For the first argument, we'll tell it whether we want the user to
         * download the file or open it in the browser by passing HeaderUtils::DISPOSITION_ATTACHMENT or DISPOSITION_INLINE.
         */
        $response->headers->set('Content-Type', $reference->getMimeType());
        $disposition = HeaderUtils::makeDisposition(
            HeaderUtils::DISPOSITION_ATTACHMENT,
            $reference->getOrginalFilename()
            // If original filename is not in ASCII characters, add a 3rd argument to HeaderUtils::makeDisposition to provide a "fallback" filename.
        );
        $response->headers->set('Content-Disposition', $disposition);

        return $response;
    }
}