// ==UserScript==
// @name         DNA TV Links to Telkku Programs
// @namespace    telkku.com
// @description  Adds custom DNA TV search links to Telkku program pages
// @downloadURL  https://github.com/KimeT/DNA-TV-search-enhancements/raw/master/DNA-TV-Links-to-Telkku-Programs.user.js
// @icon         http://www.telkku.com/favicon.ico
// @match        http://classic.telkku.com/program/show/*
// @match        http://www.telkku.com/ohjelmat/*
// @version      0.5.7
// @author       KimeT
// @homepage     https://github.com/KimeT/DNA-TV-search-enhancements
// @grant        none
// ==/UserScript==

/* Custom styles to be added on page */
var styles =  '\n'
						+ '.card .card__external_links_list .card__external_links_item img[alt="DNA TV"] {\n'
						+ '	max-height: 2.4rem;\n'
						+ '	max-width: 10rem;\n'
						+ '	background-color: black;\n'
						+ '	border-radius: 0.2rem;\n'
						+ '}\n'
						+ 'a.userscript-link:hover {\n'
						+ '	opacity: 0.67;\n'
						+ '}\n'
						+ 'a.userscript-link img {\n'
						+ '	max-height: 2rem;\n'
						+ '	max-width: 2rem;\n'
						+ '}\n';

/* Custom (jQuery) script to be added on page, needs the page to have jQuery already */
var main = function () {
	// Create search link after DOM is ready
	if (location.hostname == 'classic.telkku.com') {
		$(function() {
			var programName = $('#programName').text().trim().replace(/ /g, '+').replace(/&/g, '%26');
			var searchUrl = 'https://tv.dna.fi/webui/epg' + (programName.length ? '?customsearch=' + programName : '');
			var $elem = '<li><a href="' + searchUrl + '" target="_blank" title="DNA TV" class="btn">DNA TV</a></li>';
			$('nav.oti-outbound-nav:first ul').append($elem);
		});
	} else {
		window.addDnaTVLinks = function () {
			var programName = $('h1.page__title span.ng-binding').text().trim().replace(/ /g, '+').replace(/&/g, '%26');
			var searchUrl = 'https://tv.dna.fi/webui/epg' + (programName.length ? '?customsearch=' + programName : '');
			var $elem = '<li class="card__external_links_item ng-scope" ng-repeat="link in ::card.externalLinks">'
								+ '	<a href="' + searchUrl + '" target="_blank" title="Ohjelmaan liittyvä haku DNA TV:ssä">'
								+ '		<img src="https://tv.dna.fi/images/matkatv/logo_dnatv.png" alt="DNA TV">'
								+ '	</a>'
								+ '</li>';
			$('ul.card__external_links_list:first').append($elem);
			$elem = '<a class="userscript-link" href="' + searchUrl + '" target="_blank" title="Ohjelmahaku DNA TV:ssä">'
						+ '	<img src="https://www.dna.fi/documents/15182/25889922/TataOnDNATV_90x90.png" alt="- DNA TV">'
						+ '</a>'
		$('h1.page__title').append($elem);
		}
		window.pageLoadTest = function () {
			if ($('h1.page__title span.ng-binding').length) {
				clearInterval(window.pageLoadTestIntervalID);
				window.pageLoadTestIntervalID = undefined;
				addDnaTVLinks();
			}
		}
		window.startPageLoadTest = function () {
			window.pageLoadTestIntervalID = setInterval(pageLoadTest, 200);
		}
	}
};

/* Inject custom styles */
var style = document.createElement('style');
style.type = "text/css";
style.textContent = styles.toString();
document.head.appendChild(style);

/* Inject main script */
var script = document.createElement('script');
script.type = "text/javascript";
script.textContent = '(' + main.toString() + ')();';
document.body.appendChild(script);

/* If needed, load jQuery with ajax & call end function */
if (!window.$) {
	(function () {

		function loadScript(url, callback) {

			var script = document.createElement("script")
			script.type = "text/javascript";

			if (script.readyState) { //IE
				script.onreadystatechange = function () {
					if (script.readyState == "loaded" || script.readyState == "complete") {
						script.onreadystatechange = null;
						callback();
					}
				};
			} else { //Others
				script.onload = function () {
					callback();
				};
			}

			script.src = url;
			document.getElementsByTagName("head")[0].appendChild(script);
		}

		loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js", function () {

			//jQuery loaded
			if (window.startPageLoadTest) { startPageLoadTest(); }

		});


	})();
}