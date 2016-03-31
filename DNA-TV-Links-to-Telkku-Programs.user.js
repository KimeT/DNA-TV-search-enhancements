// ==UserScript==
// @name         DNA TV Links to Telkku Programs
// @namespace    telkku.com
// @description  Adds custom DNA TV search links to Telkku program pages
// @downloadURL  https://github.com/KimeT/DNA-TV-search-enhancements/raw/master/DNA-TV-Links-to-Telkku-Programs.user.js
// @icon         http://www.telkku.com/favicon.ico
// @match        http://classic.telkku.com/program/show/*
// @match        http://www.telkku.com/ohjelmat/*
// @version      0.6.1
// @author       KimeT
// @homepage     https://github.com/KimeT/DNA-TV-search-enhancements
// @grant        none
// ==/UserScript==

/* Custom styles to be added on page */
var styles =  '\n'
						+ '.user-script-linkdiv a.ical {\n'
						+ '	top: 2.73rem;\n'
						+ '}\n'
						+ 'a.ical:hover {\n'
						+ '	opacity: 0.67;\n'
						+ '}\n'
						+ '.card .card__social_share .card__social_imdb {\n'
						+ '	background-color: #dfb91e;\n'
						+ '	color: #000;\n'
						+ '	font-size: 15px;\n'
						+ '	font-weight: bold;\n'
						+ '	letter-spacing:-0.09rem;\n'
						+ '	padding:0 0.325rem;\n'
						+ '	border-radius: 0.2rem;\n'
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
			var programName = $('h1.page__title span:first').text().trim().replace(/ /g, '+').replace(/&/g, '%26');
			var searchUrl = 'https://tv.dna.fi/webui/epg' + (programName.length ? '?customsearch=' + programName : '');
			/*var imdbUrl = 'http://www.imdb.com/' + (programName.length ? 'find?q=' + programName + '&s=tt&site=aka' : '');*/
			var $elem = '<div class="user-script-linkdiv">'
								+ '	<a class="ical" href="' + searchUrl + '" target="_blank" title="Ohjelmaan liittyvä haku DNA TV:ssä">DNA TV -tallennus</a>'
								+ '</div>';
			$('.site__main .card__time_items:first').append($elem);
			/*var $elem = '<li>'
								+ '	<a href="' + imdbUrl + '" class="card__social__share__item card__social_imdb" title="IMDb" target="_blank">IMDb</a>'
								+ '</li>';
			$('.site__main .card__social_share:first ul').append($elem);*/
		}
		window.pageLoadTest = function () {
			if ($('h1.page__title span:first').length) {
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