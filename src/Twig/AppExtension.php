<?php

namespace App\Twig;

use App\Service\MarkdownHelper;
use App\Service\UploaderHelper;
use Psr\Container\ContainerInterface;
use Symfony\Contracts\Service\ServiceSubscriberInterface;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookupInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension implements ServiceSubscriberInterface
{
    private $container;

    private $publicDir;

    public function __construct(ContainerInterface $container, string $publicDir)
    {
        $this->container = $container;
        $this->publicDir = $publicDir;
    }

    /**
     * We added a new function to get path to our uploaded images
     * @return TwigFunction[]
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('uploaded_asset', [$this, 'getUploadedAssetPath']),
            new TwigFunction('encore_entry_css_source', [$this, 'getEncoreEntryCssSource'])
        ];
    }

    public function getFilters(): array
    {
        return [
            new TwigFilter('cached_markdown', [$this, 'processMarkdown'], ['is_safe' => ['html']]),
        ];
    }

    public function processMarkdown($value)
    {
        return $this->container
            ->get(MarkdownHelper::class)
            ->parse($value);
    }

    /**
     * We use our service to get path to the uploaded files
     * @param string $path
     * @return string
     */
    public function getUploadedAssetPath(string $path): string
    {
        return $this->container
            ->get(UploaderHelper::class)
            ->getPublicPath($path);
    }

    /**
     * Get the source of our files with cssa
     * @param string $entryName
     * @return string
     */
    public function getEncoreEntryCssSource(string $entryName): string
    {

        // @see \public\build\entrypoints.json (we get our classes from this entrypoints.json and get CssFiles
        $entryPointLookupInterface = $this->container->get(EntrypointLookupInterface::class);

        // To avoid missing CSS if you send your emails via Messenger (or if you send multiple emails during the same request),
        // "reset" Encore's internal cache before calling getCssFiles():
        $entryPointLookupInterface->reset();
        $files = $entryPointLookupInterface->getCssFiles($entryName);

        $source = '';
        foreach ($files as $file) {
            $source .= file_get_contents($this->publicDir.'/'.$file);
        }
        return $source;
    }

    public static function getSubscribedServices()
    {
        return [
            MarkdownHelper::class,
            UploaderHelper::class,
            EntrypointLookupInterface::class, // we added our service to get Entrypoints
        ];
    }
}
