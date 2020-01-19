<?php

    namespace Dadadesign\Sitepackage\ViewHelpers;

    use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

    class ThreecolsViewHelper extends AbstractViewHelper
    {
        public function initializeArguments()
        {
            parent::initializeArguments();
            $this->registerArgument('data', 'array', 'Data');
        }

        public function render()
        {
            $data = $this->arguments['data'];
            $behavior = $data['flexform_behaviour'];
            $all = count($data['tx_gridelements_view_children']);

            switch ($behavior) {
                case 1:
                    $class = "col-lg-4";
                    break;
            default:
                    $class = "col-md-6 col-lg-4";
            }

            $return = '<div class="row">';
            for( $i = 0; $i < $all; $i++ ){
                $cols = ((( $i % 3 ) + 1) * 100);
                $rows = (( $i / 3 ) % 3);
                $uid = $data['tx_gridelements_view_raw_columns'][$cols][$rows]['uid'];

                $return .= '<div class="' . $class . '" >';
                $return .= $data['tx_gridelements_view_child_' . $uid];
                $return .= '</div>';
            }
            $return .= '</div>';

            return  $return;
        }

    }
