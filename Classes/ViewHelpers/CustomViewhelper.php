<?php
namespace Dadadesign\Sitepackage\ViewHelpers;
/**
 * Example
 * {namespace m=Dadadesign\Sitepackage\ViewHelpers}
 * <m:customName param="nicecontent"></m:customName>
 * Nice description ;-)
 *
 * @package Dadadesign
 * @subpackage Sitepackage
 * @version 1.0.0
 */
class CustomViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {
/**
 * Nice description ;-)
 *
 * @param string $param
 */
 public function render($param) {

    return $this->renderChildren();
 }
}

?>