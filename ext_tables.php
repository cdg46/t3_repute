<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}




/***************
 * Theme Ville sur Lot TypoScript Setup
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/', 'theme repute');
