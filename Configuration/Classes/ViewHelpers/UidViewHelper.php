<?php

namespace YBC\villesurlot\ViewHelpers;

/***************************************************************
 *
 *  The MIT License (MIT)
 *
 *  Copyright (c) 2015 Yann Bogdanovic, http://www.cdg46.fr
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 *
 ***************************************************************/

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper;

/**
 * @author Yann Bogdanovic <support@cdgfpt46.fr>
 */
class UidViewHelper extends AbstractViewHelper {

  /**
   * @var Tx_Extbase_Configuration_ConfigurationManagerInterface
   */
  protected $configurationManager;
  
  /**
   * @param Tx_Extbase_Configuration_ConfigurationManagerInterface An instance of the Configuration Manager
   * @return void
   */
  public function injectConfigurationManager(Tx_Extbase_Configuration_ConfigurationManagerInterface $configurationManager) {
    $this->configurationManager = $configurationManager;
  }

  /**
   * Set uid of the content element
   *
   * @return int $uid The uid of the content element
   */
  public function render() {
    // fallback
    $uid = uniqid();
    
    if ($this->templateVariableContainer->exists("contentObjectData")) {
      // this works for templates but not for partials
      $contentObjectData = $this->templateVariableContainer->get("contentObjectData");
      $uid = $contentObjectData['uid'];
    } else {
      // this should work in every circumstance
      $cObj = $this->configurationManager->getContentObject();
      $uid = $cObj->data['uid'];
    }
    
    return $uid;
  }
}
