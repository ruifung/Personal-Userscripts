// ==UserScript==
// @name         KissAnime Anti-Anti-Adblock
// @namespace    http://yrf.me/
// @version      0.1
// @description  NO ANTI ADBLOCK!
// @author       You
// @match        http://kissanime.to/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("a[onclick*=ads]").click();
    if (typeof(DoDetect2) === "function")
        DoDetect2 = function(){};
    if (typeof(Check) === "function")
        Check = function(){};
    if (typeof(CheckAdImage) === "function")
        CheckAdImage = function(){};
})();
