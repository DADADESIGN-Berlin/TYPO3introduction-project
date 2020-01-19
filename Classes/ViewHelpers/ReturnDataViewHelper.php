<?php
    namespace Dadadesign\Sitepackage\ViewHelpers;

    use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

    class ReturnDataViewHelper extends AbstractViewHelper {

        /**
         * Nice description ;-)
         *
         * @param string $param
         */


        public function initializeArguments()
        {
            parent::initializeArguments();
            $this->registerArgument('data', 'array', 'Data');
        }


        public function render() {

            $array =$this->arguments['data'];
            $index = 0;
            $output = '<table>';

            foreach( $array as $data ){
                $index++;
                $output .= '<tr>';
                $output .= '<td>';
                $output .=  array_keys( $array )[$index];
                $output .= '</td>';
                $output .= '<td>';
                $output .=  $data;
                $output .= '</td>';
                $output .= '</tr>';
            }

            $output .= '</table>';

            return $output;
        }

    }

