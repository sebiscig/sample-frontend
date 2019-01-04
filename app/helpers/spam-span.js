/*

This ember helper is derived from the spanspam.js anti-spam script at http://www.spamspan.com/

Here follows the original GNU license disclaimer

	--------------------------------------------------------------------------
	$Id: spamspan.js 5 2007-09-29 15:56:26Z moltar $
	--------------------------------------------------------------------------
	Version: 1.03
	Release date: 13/05/2006
	Last update: 07/01/2007

	(c) 2006 SpamSpan (www.spamspan.com)

	This program is distributed under the terms of the GNU General Public
	Licence version 2, available at http://www.gnu.org/licenses/gpl.txt
	--------------------------------------------------------------------------
*/

import { helper as buildHelper } from '@ember/component/helper';

import { htmlSafe } from '@ember/template';

function makeSpans (email) {
	var userName = email.split('@')[0];
	var domain = email.split('@')[1];
	var uSpan = '<uspan>' + userName.replace(/\./g, ' [dot] ') + '</uspan>';
	var dSpan = '<dspan>' + domain.replace(/\./g, ' [dot] ') + '</dspan>';
	return uSpan + ' [at] ' + dSpan;

	"<uspan>daphne [dot] tan</uspan> [at] <dspan>utoronto [dot] ca</dspan>"
}

function cleanSpan(string) {
	// string = string.replace(//g, '');
	// replace variations of [dot] with .
	//string = makeSpans(string);
	string = string.replace(/[\[\(\{]?[dD][oO0][tT][\}\)\]]?/g, '.');
	// replace spaces with nothing
	string = string.replace(/\s+/g, '');
	return string;
}
export function spamSpan(params/*, hash*/) {
var input = params.toString();

  input = makeSpans(input);

var user = input.split('<uspan>')[1].split('</uspan>')[0];

var domain = input.split('<dspan>')[1].split('</dspan>')[0];
var anchorText ='';
if (input.indexOf('<tspan>') > -1) {
  anchorText = input.split('<tspan>')[1].split('</tspan>')[0];
}
var paramValues = [];

if (input.indexOf('<subjectspan>') > -1) {
  alert ('here');
  paramValues.push('subject=' + encodeURIComponent(input.split('<subjectspan>')[1].split('</subjectspan>')[0]));
  paramValues.push('body=' + encodeURIComponent(input.split('<bodyspan> ')[1].split('</bodyspan>')[0]));
}
      var at = String.fromCharCode(32*2);
      var email = cleanSpan(user) + at + cleanSpan(domain);
      var anchorTagText = anchorText ? anchorText : email;
      var mto = String.fromCharCode(109,97,105,108,116,111,58);
      var hrefAttr = mto + email;
          hrefAttr += paramValues.length ? '?' + paramValues.join('&') : '';
      var anchorTag = '<a class="spamspan" href="' + hrefAttr + '">' + anchorTagText + '</a>';

          //anchorTag.className = spamSpanMainClass;
          //anchorTag.setAttribute('href', hrefAttr);
          //anchorTag.appendChild(anchorTagText);*/
    return htmlSafe(`${anchorTag}`);



}

export default buildHelper(spamSpan);
