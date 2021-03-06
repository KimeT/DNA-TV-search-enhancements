﻿// ==UserScript==
// @name         DNA TV EPG Custom Search
// @namespace    tv.dna.fi
// @description  Adds custom DNA TV EPG search based on querystring
// @downloadURL  https://github.com/KimeT/DNA-TV-search-enhancements/raw/master/DNA-TV-EPG-Custom-Search.user.js
// @icon         https://tv.dna.fi/images/matkatv/favicon.ico
// @match        https://tv.dna.fi/webui/epg*
// @version      0.5.3
// @author       KimeT
// @homepage     https://github.com/KimeT/DNA-TV-search-enhancements
// @grant        none
// ==/UserScript==

/* Custom (jQuery) script to be added on page, needs the page to have jQuery already */
var main = function () {
	// Custom search action after DOM is ready
	$(function() {
		var searchTerm = decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI('customsearch').replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")).replace(/%26/g, '&').replace(/\+/g,' ')
		if (searchTerm != null && searchTerm.length) {
			$('#keyword').val(searchTerm);
			$('#search-btn').click();
		}
	});
};

/* Inject main script */
var script = document.createElement('script');
script.type = "text/javascript";
script.textContent = '(' + main.toString() + ')();';
document.body.appendChild(script);