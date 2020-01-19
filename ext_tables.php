<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function()
    {



        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('dada_typo3introduction_project', 'Configuration/TypoScript', 'TYPO3introduction-project');


    }
);
