// ==UserScript==
// @name         AnimePace Anti-Anti AdBlock
// @namespace    http://yrf.me/
// @version      0.1
// @description  Anti-Anti Adblock!
// @author       ruifung
// @match        https://pacestream.com/*
// @match        http://pacestream.com/*
// @grant        unsafeWindow
// ==/UserScript==

(function(){
	var oriTimeout = unsafeWindow.setTimeout;
    unsafeWindow.open = function(){return null;};
	unsafeWindow.setTimeout = function() {
        var args = Array.prototype.slice.call(arguments);
		if (typeof(args[0]) === "function" && args[0].toString().indexOf("pacestream.com/ad") != -1) {
            console.log("PaceStream.com AntiAdblock function neutered.");
			args[0] = function(){};
			return oriTimeout.apply(null,  args);
		}
		else
			return oriTimeout.apply(null, args);
	};
})();
