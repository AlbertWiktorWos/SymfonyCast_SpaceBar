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
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
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
            /* Old way to redirect and show errors, now we treat our method like an API endpoint
            //violations is an object but implements ArrayAccess
                $violation = $violations[0];
                //fast way to push one-time error message
                $this->addFlash('error', $violation->getMessage());
                return $this->redirectToRoute('admin_article_edit', [
                    'id' => $article->getId(),
                ]);
             */

            // we return object by json
            return $this->json($violations, 400);
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

        /* Old way to redirect and show errors, now we treat our method like an API endpoint
            return $this->redirectToRoute('admin_article_edit', [
                'id' => $article->getId(),
            ]);
        */

        return $this->json(
            $articleReference,
            201,
            [],
            [ // we use group because we have an article in articleReference and article contain articleReference so we need to avoid endless loop while serialization
                'groups' => ['main']
            ]
        );
}

    /**
     * Now we reordering all of refereneces after drag element in order list
     * @Route("/admin/article/{id}/references/reorder", methods="POST", name="admin_article_reorder_references")
     * @IsGranted("MANAGE", subject="article")
     */
    public function reorderArticleReferences(Article $article, Request $request, EntityManagerInterface $entityManager)
    {
        $orderedIds = json_decode($request->getContent(), true);
        if ($orderedIds === null) {
            return $this->json(['detail' => 'Invalid body'], 400);
        }

        // from (position)=>(id) to (id)=>(position)
        $orderedIds = array_flip($orderedIds);

        foreach ($article->getArticleReferences() as $reference) {
            $reference->setPosition($orderedIds[$reference->getId()]);
        }
        $entityManager->flush();

        return $this->json(
            $article->getArticleReferences(),
            200,
            [],
            [
                'groups' => ['main']
            ]
        );
    }

    /**
     * API endpoint to get current list of references
     * @Route("/admin/article/{id}/references", methods="GET", name="admin_article_list_references")
     * @IsGranted("MANAGE", subject="article")
     */
    public function getArticleReferences(Article $article)
    {
        return $this->json(
            $article->getArticleReferences(),
            200,
            [],
            [
                'groups' => ['main']
            ]
        );
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

    /**
     * Handle deleting elements from references list by API Endpoint
     * @Route("/admin/article/references/{id}", name="admin_article_delete_reference", methods={"DELETE"})
     */
    public function deleteArticleReference(ArticleReference $reference, UploaderHelper $uploaderHelper, EntityManagerInterface $entityManager)
    {
        // from the reference we get article to check if we has an access to this article
        $article = $reference->getArticle();
        $this->denyAccessUnlessGranted('MANAGE', $article);

        // we remvoe reference
        $entityManager->remove($reference);
        $entityManager->flush();

        //remove file from reference
        $uploaderHelper->deleteFile($reference->getFilePath(), false);

        return new Response(null, 204);
    }

    /**
     * Handle to edit an reference
     * @Route("/admin/article/references/{id}", name="admin_article_update_reference", methods={"PUT"})
     * @param ArticleReference $reference
     * @param EntityManagerInterface $entityManager
     * @param SerializerInterface $serializer
     * @param Request $request
     * @param ValidatorInterface $validator we want to check if user sent an valid filename by validator
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function updateArticleReference(ArticleReference $reference, EntityManagerInterface $entityManager, SerializerInterface $serializer, Request $request, ValidatorInterface $validator)
    {
        $article = $reference->getArticle();
        $this->denyAccessUnlessGranted('MANAGE', $article);
        // we want to do opposit thing that serialize so from json we create an object
        $serializer->deserialize(
            $request->getContent(),
            ArticleReference::class,
            'json',
            [
                'object_to_populate' => $reference, //we dont want to create a new object, we update old object
                'groups' => ['input'] // field $orginalFilename
            ]
        );

        // we check if something goes wrong by validator @see ArticleReference
        $violations = $validator->validate($reference);
        if ($violations->count() > 0) {
            return $this->json($violations, 400);
        }

        // now we can edit a reference that we deserialize above
        $entityManager->persist($reference);
        $entityManager->flush();
        // return edited references
        return $this->json(
            $reference,
            200,
            [],
            [
                'groups' => ['main']
            ]
        );
    }
}