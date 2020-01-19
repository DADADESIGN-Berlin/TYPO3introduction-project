<?php

    namespace Dadadesign\Sitepackage\ViewHelpers;

    use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

    class TwocolsViewHelper extends AbstractViewHelper
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
                    $col1 = "col-lg-6";
                    $col2 = "col-lg-6";
                    break;
            default:
                    $col1 = "col-lg-8";
                    $col2 = "col-lg-4";
            }

            $return = '<div class="row">';

            for( $i = 0; $i < $all; $i++ ){
                $cols = ((( $i % 2 ) + 1) * 100);
                $rows = (( $i / 2 ) % 2);
                $class = ( $i % 2 ) ? $col2 : $col1;
                $uid = $data['tx_gridelements_view_raw_columns'][$cols][$rows]['uid'];

                $return .= '<div class="' . $class . '" >';
                $return .= $uid . '____ ' . $data['tx_gridelements_view_child_' . $uid];
                $return .= '</div>';
            }

            $return .= '</div>';

            return  $return;
        }

    }
