// ==UserScript==
// @name         DNA TV Links to Telkku Programs
// @namespace    telkku.com
// @description  Adds custom DNA TV search links to Telkku program pages
// @downloadURL  https://github.com/KimeT/DNA-TV-search-enhancements/blob/master/DNA-TV-Links-to-Telkku-Programs.user.js
// @icon         http://www.telkku.com/favicon.ico
// @match        http://classic.telkku.com/program/show/*
// @version      0.5.2
// @author       KimeT
// @homepage     https://github.com/KimeT/DNA-TV-search-enhancements
// @grant        none
// ==/UserScript==

/* Custom styles to be added on page */
/*var styles =  '';*/

/* Custom (jQuery) script to be added on page, needs the page to have jQuery already */
var main = function () {
	// Create search link after DOM is ready
	$(function() {
		var programName = $('#programName').text().trim().replace(/ /g, '+').replace(/&/g, '%26');
		var searchUrl = 'https://tv.dna.fi/webui/epg' + (programName.length ? '?customsearch=' + programName : '');
		var $elem = '<li><a href="' + searchUrl + '" target="_blank" title="DNA TV" class="btn">DNA TV</a></li>';
		$('nav.oti-outbound-nav:first ul').append($elem);
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