<?php
namespace Dadadesign\Sitepackage\ViewHelpers;

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractTagBasedViewHelper;

class TagViewHelper extends AbstractTagBasedViewHelper
{

    public function initializeArguments()
    {
        parent::initializeArguments();
        $this->registerUniversalTagAttributes();
        $this->registerTagAttribute('alt', 'string', 'Alternative Text for the image');
        $this->registerArgument('domain', 'string', 'The domain');
        $this->registerArgument('path', 'string', 'Path');
        $this->registerArgument('tag', 'string', 'tagName');
    }

    public function render()
    {
        $this->tag->setTagName($this->arguments['tag']);

        if( $this->arguments['tag'] == 'iframe' ){
            $this->tag->forceClosingTag(true);
        }

        $this->tag->addAttribute(
            'src',
            $this->arguments['domain'] .
            $this->arguments['path'] . '?' . http_build_query($_GET)
        );
        return $this->tag->render();
    }
}