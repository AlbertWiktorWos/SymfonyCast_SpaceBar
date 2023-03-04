<?php

namespace App\Controller;

use App\Entity\Article;
use App\Entity\ArticleReference;
use App\Service\UploaderHelper;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

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
     */
    public function uploadArticleReference(Article $article, Request $request, UploaderHelper $uploaderHelper, EntityManagerInterface $entityManager)
    {
        /** @var UploadedFile $uploadedFile */
        $uploadedFile = $request->files->get('reference');
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
}