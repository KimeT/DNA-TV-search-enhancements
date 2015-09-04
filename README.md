# DNA-TV-search-enhancements

Greasemonkey user scripts to add custom search enhancements to DNA TV website + integration to Telkku.com.

## TOC
<!-- MarkdownTOC -->

- User script to DNA TV EPG
- User script to Telkku.com
- Installation

<!-- /MarkdownTOC -->


## User script to DNA TV EPG

*Permalink to newest version: <https://github.com/KimeT/DNA-TV-search-enhancements/blob/master/DNA-TV-EPG-Custom-Search.user.js>*

This greasemonkey script adds custom [DNA TV EPG](https://tv.dna.fi/webui/epg "DNA TV - Ohjelmaopas") search functionality based on querystring. The EPG is searched after page load with search term set in customsearch parameter:
![Telkku screenshot](images/DNA-TV_customsearch.png)

Although not necessary, this script is designed to be used together with corresponding greasemonkey script **DNA-TV-Links-to-Telkku-Programs.user.js** for [Telkku](http://classic.telkku.com/ "Telkku.com").


## User script to Telkku.com

*Permalink to newest version: <https://github.com/KimeT/DNA-TV-search-enhancements/blob/master/DNA-TV-Links-to-Telkku-Programs.user.js>*

This greasemonkey script adds link to DNA TV EPG search into [Telkku](http://classic.telkku.com/ "Telkku.com") classic program views:
![DNA TV EPG screenshot](images/DNA-TV_customsearch.png)

To be able to utilize this script, you need corresponding greasemonkey script **DNA-TV-EPG-Custom-Search.user.js** for [DNA TV EPG](https://tv.dna.fi/webui/epg "DNA TV - Ohjelmaopas") installed also.


## Installation

- For Firefox: install first [Greasemonkey extension](https://addons.mozilla.org/fi/firefox/addon/greasemonkey/)
- For Chrome: install first [Tampermonkey extension](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

Install user scripts by clicking these links with Firefox / Chrome:

- DNA TV EPG user script: [DNA-TV-EPG-Custom-Search.user.js](DNA-TV-EPG-Custom-Search.user.js)
- Telkku.com user script: [DNA-TV-Links-to-Telkku-Programs.user.js](DNA-TV-Links-to-Telkku-Programs.user.js)