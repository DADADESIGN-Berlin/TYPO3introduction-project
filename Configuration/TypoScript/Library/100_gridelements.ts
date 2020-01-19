
# GRIDELEMNTS ------------------------------------------------------------------#

tt_content.gridelements_pi1.20.10.setup {


	header < lib.gridelements.defaultGridSetup
	header {
        cObject = FLUIDTEMPLATE
        cObject {
            file =  EXT:sitepackage/Resources/Gridelements/Resources/Private/Templates/Header.html
            dataProcessing {
                10 = TYPO3\CMS\Frontend\DataProcessing\DatabaseQueryProcessor
                10 {
                    table = tt_content
                    where.data = field:uid
                    where.wrap = tx_gridelements_columns = 100 AND tx_gridelements_container=|
                    orderBy = sorting
                    as = headerbg

                    dataProcessing {
                        10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
                        10 {
                            references.fieldName = image
                            references.table = tt_content
                            as = image
                        }
                    }
                }
            }
        }
        outerWrap = |
    }


	sourceset < lib.gridelements.defaultGridSetup
	sourceset {
        cObject = FLUIDTEMPLATE
        cObject {
            file =  EXT:sitepackage/Resources/Gridelements/Resources/Private/Templates/Sourceset.html
        }
    }


	addresse < lib.gridelements.defaultGridSetup
	addresse {
       cObject = FLUIDTEMPLATE
        cObject {
            file =  EXT:sitepackage/Resources/Gridelements/Resources/Private/Templates/Addresse.html
        }
    }

	section < lib.gridelements.defaultGridSetup
	section {
        cObject = FLUIDTEMPLATE
        cObject {
            file =  EXT:sitepackage/Resources/Gridelements/Resources/Private/Templates/Section.html
        }
    }


	videoheader < lib.gridelements.defaultGridSetup
	videoheader {
        cObject = FLUIDTEMPLATE
        cObject {
            file =  EXT:sitepackage/Resources/Gridelements/Resources/Private/Templates/Videoheader.html
        }
    }

	twocols < lib.gridelements.defaultGridSetup
	twocols {
        cObject = FLUIDTEMPLATE
        cObject {
            file =  EXT:sitepackage/Resources/Gridelements/Resources/Private/Templates/Twocols.html
        }
    }


	threecols < lib.gridelements.defaultGridSetup
	threecols {
        cObject = FLUIDTEMPLATE
        cObject {
            file =  EXT:sitepackage/Resources/Gridelements/Resources/Private/Templates/Threecols.html
        }
    }

	imagetabs < lib.gridelements.defaultGridSetup
	imagetabs {
        cObject = FLUIDTEMPLATE
        cObject {
            file =  EXT:sitepackage/Resources/Gridelements/Resources/Private/Templates/Imagetabs.html
        }
    }
	accordionplus < lib.gridelements.defaultGridSetup
	accordionplus {
        cObject = FLUIDTEMPLATE
        cObject {
            file =  EXT:sitepackage/Resources/Gridelements/Resources/Private/Templates/Accordionplus.html
            dataProcessing {
                10 = TYPO3\CMS\Frontend\DataProcessing\DatabaseQueryProcessor
                10 {
                    table = tt_content
                    where.data = field:uid
                    where.wrap = tx_gridelements_columns = 100 AND tx_gridelements_container=|
                    orderBy = sorting
                    as = normal

                    dataProcessing {
                        10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
                        10 {
                            references.fieldName = assets
                            references.table = tt_content
                            as = image
                        }
                    }
                }
            }
        }
    }
	tabsplus < lib.gridelements.defaultGridSetup
	tabsplus {
        cObject = FLUIDTEMPLATE
        cObject {
            file =  EXT:sitepackage/Resources/Gridelements/Resources/Private/Templates/Tabsplus.html
        }
    }
	disclaimerform < lib.gridelements.defaultGridSetup
	disclaimerform {
        cObject = FLUIDTEMPLATE
        cObject {
            file =  EXT:sitepackage/Resources/Gridelements/Resources/Private/Templates/Disclaimerform.html
        }
    }
	vbrdisclaimerform < lib.gridelements.defaultGridSetup
	vbrdisclaimerform {
        cObject = FLUIDTEMPLATE
        cObject {
            file =  EXT:sitepackage/Resources/Gridelements/Resources/Private/Templates/Vbrdisclaimerform.html
        }
    }


	srcset < lib.gridelements.defaultGridSetup
    srcset {
        cObject = FLUIDTEMPLATE
        cObject {
            file = EXT:sitepackage/Resources/Gridelements/Resources/Private/Templates/Srcset.html
            dataProcessing {
                10 = TYPO3\CMS\Frontend\DataProcessing\DatabaseQueryProcessor
                10 {
                    table = tt_content
                    where.data = field:uid
                    where.wrap = tx_gridelements_columns = 100 AND tx_gridelements_container=|
                    orderBy = sorting
                    as = xs

                    dataProcessing {
                        10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
                        10 {
                            references.fieldName = image
                            references.table = tt_content
                            as = image
                        }
                    }
                }
				20 = TYPO3\CMS\Frontend\DataProcessing\DatabaseQueryProcessor
                20 {
                    table = tt_content
                    where.data = field:uid
                    where.wrap = tx_gridelements_columns = 200 AND tx_gridelements_container=|
                    orderBy = sorting
                    as = sm

                    dataProcessing {
                        10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
                        10 {
                            references.fieldName = image
                            references.table = tt_content
                            as = image
                        }
                    }
                }
            }
        }
        outerWrap = |
    }

}



