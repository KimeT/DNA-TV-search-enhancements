// ==UserScript==
// @name         DNA TV EPG Custom Search
// @namespace    tv.dna.fi
// @description  Adds custom DNA TV EPG search based on querystring
// @downloadURL  https://gist.github.com/KimeT/839a31086d57c8726d91/raw/DNA-TV-EPG-Custom-Search.user.js
// @icon         https://tv.dna.fi/images/matkatv/favicon.ico
// @match        https://tv.dna.fi/webui/epg*
// @version      0.4
// @author       Kimmo Tahvanainen
// @homepage     https://gist.github.com/KimeT
// @grant        none
// ==/UserScript==

/* Custom styles to be added on page */
var styles =  '';

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

/* Inject custom styles */
/*var style = document.createElement('style');
style.type = "text/css";
style.textContent = styles.toString();
document.head.appendChild(style);*/

/* Inject main script */
var script = document.createElement('script');
script.type = "text/javascript";
script.textContent = '(' + main.toString() + ')();';
document.body.appendChild(script);