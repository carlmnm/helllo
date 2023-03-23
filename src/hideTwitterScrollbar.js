// ==UserScript==
// @name         Hide Twitter Scrollbar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide the scrollbar on Twitter's website
// @author       Charles Michael
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let style = document.createElement('style');
    style.innerHTML = `.css-1dbjc4n.r-1pi2tsx.r-1wtj0ep.r-1rnoaur.r-1pn2ns4.r-o96wvk::-webkit-scrollbar {display: none;}`;
    document.head.appendChild(style);
})();