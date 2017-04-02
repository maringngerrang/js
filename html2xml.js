// <![CDATA[
function $(id){ return document.getElementById(id) } var char2entity = { "'" : '&#39;', '"' : '&quot;',  '<' : '&lt;', '>' : '&gt;',  '&#038;' : '&amp;'}; function encode_entities(str) {   var rv = '';  for (var i = 0; i < str.length; i++) {    var ch = str.charAt(i);    rv += char2entity[ch] || ch;  }   return rv;} function do_encode(e){  $('dst').value = encode_entities(e.value)}
// ]]&gt;
