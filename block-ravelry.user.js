// ==UserScript==
// @name        Block Ravelry
// @namespace   https://github.com/ramenkage
// @description Pops up a dialog on the first visit to Ravelry in any tab, asking if you really want to load the site. This may be helpful for some users with accessibility concerns who wish to avoid accidentally following links to Ravelry.
// @icon        block-ravelry-icon-32.png
// @license     MIT
// @match       *://*.ravelry.com/*
// @grant       none
// @version     1
// @run-at      document-start
// ==/UserScript==

'use strict';
if(!sessionStorage.getItem('gmUnblockRavelry')) {
  if(window.confirm("Do you really want to visit Ravelry? Click OK to unblock Ravelry in this tab. Click Cancel to return to the previous page.")) {
    sessionStorage.setItem('gmUnblockRavelry', 'true');
  }
  else {
    window.stop();
    history.back();
  }
}
