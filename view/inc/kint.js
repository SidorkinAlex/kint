(function(){if("undefined"===typeof kintInitialized){kintInitialized=1;var e=[],f=-1,g=function(b){var a=window.getSelection(),c=document.createRange();c.selectNodeContents(b);a.removeAllRanges();a.addRange(c)},h=function(b,a){"undefined"===typeof a&&(a="kint-show");return RegExp("(\\s|^)"+a+"(\\s|$)").test(b.className)},l=function(b,a){"undefined"===typeof a&&(a="kint-show");k(b,a).className+=" "+a},k=function(b,a){"undefined"===typeof a&&(a="kint-show");b.className=b.className.replace(RegExp("(\\s|^)"+a+"(\\s|$)"),
" ");return b},m=function(b){do b=b.nextElementSibling;while("dd"!==b.nodeName.toLowerCase());return b},n=function(b,a){var c=m(b);"undefined"===typeof a&&(a=h(b));a?k(b):l(b);1===c.childNodes.length&&(c=c.childNodes[0].childNodes[0],h(c,"kint-parent")&&n(c,a))},p=function(b,a){var c=m(b).getElementsByClassName("kint-parent"),d=c.length;for("undefined"===typeof a&&(a=h(b));d--;)n(c[d],a);n(b,a)},q=function(b){var a=b,c=0;b.parentNode.getElementsByClassName("kint-active-tab")[0].className="";for(b.className=
"kint-active-tab";a=a.previousSibling;)1===a.nodeType&&c++;b=b.parentNode.nextSibling.childNodes;for(var d=0;d<b.length;d++)d===c?(b[d].style.display="block",1===b[d].childNodes.length&&(a=b[d].childNodes[0].childNodes[0],h(a,"kint-parent")&&n(a,!1))):b[d].style.display="none"},r=function(b){for(;b=b.parentNode,b&&!h(b,"kint"););return!!b},s=function(){e=[];Array.prototype.slice.call(document.querySelectorAll(".kint nav, .kint-tabs>li:not(.kint-active-tab)"),0).forEach(function(b){0===b.offsetWidth&&
0===b.offsetHeight||e.push(b)})},t=function(b){var a;if(a=window.open())a.document.open(),a.document.write("<html><head><title>Kint ("+(new Date).toISOString()+')</title><meta charset="utf-8">'+document.getElementsByClassName("-kint-js")[0].outerHTML+document.getElementsByClassName("-kint-css")[0].outerHTML+'</head><body><input style="width: 100%" placeholder="Take some notes!"><div class="kint">'+b.parentNode.outerHTML+"</div></body>"),a.document.close()},u=function(b){var a=document.querySelector(".kint-focused");
a&&k(a,"kint-focused");if(-1!==b){a=e[b];l(a,"kint-focused");var c=function(a){return a.offsetTop+(a.offsetParent?c(a.offsetParent):0)};window.scrollTo(0,c(a)-window.innerHeight/2)}f=b},v=function(b,a){b?0>--a&&(a=e.length-1):++a>=e.length&&(a=0);u(a);return!1};window.addEventListener("click",function(b){var a=b.target,c=a.nodeName.toLowerCase();if(r(a)){"dfn"===c?(g(a),a=a.parentNode):"var"===c&&(a=a.parentNode,c=a.nodeName.toLowerCase());if("li"===c&&"kint-tabs"===a.parentNode.className)return"kint-active-tab"!==
a.className&&(q(a),-1!==f&&s()),!1;if("nav"===c)return"footer"===a.parentNode.nodeName.toLowerCase()?(a=a.parentNode,h(a)?k(a):l(a)):setTimeout(function(){0<parseInt(a.a,10)?a.a--:(p(a.parentNode),-1!==f&&s())},300),b.stopPropagation(),!1;if(h(a,"kint-parent"))return n(a),-1!==f&&s(),!1;if(h(a,"kint-ide-link"))return b.preventDefault(),b=new XMLHttpRequest,b.open("GET",a.href),b.send(null),!1;if(h(a,"kint-popup-trigger")){for(b=a.parentNode;b&&h(b,"kint-parent");)b=b.parentNode;t(b)}}},!1);window.addEventListener("dblclick",
function(b){var a=b.target;if(r(a)&&"nav"===a.nodeName.toLowerCase()){a.a=2;for(var c=document.getElementsByClassName("kint-parent"),d=c.length,a=h(a.parentNode);d--;)n(c[d],a);-1!==f&&s();b.stopPropagation()}},!1);window.onkeydown=function(b){if(b.target===document.body&&!b.altKey){var a=b.keyCode,c=b.shiftKey;b=f;if(68===a){if(-1===b)return s(),v(!1,b);u(-1);return!1}if(-1!==b){if(9===a)return v(c,b);if(38===a)return v(!0,b);if(40===a)return v(!1,b);if(-1!==b){c=e[b];if("li"===c.nodeName.toLowerCase()){if(32===
a||13===a)return q(c),s(),v(!0,b);if(39===a)return v(!1,b);if(37===a)return v(!0,b)}c=c.parentNode;if(32===a||13===a)return n(c),s(),!1;if(39===a||37===a){var d=h(c),a=37===a;if(d)p(c,a);else{if(a){do c=c.parentNode;while(c&&"dd"!==c.nodeName.toLowerCase());if(c){c=c.previousElementSibling;b=-1;for(d=c.querySelector("nav");d!==e[++b];);u(b)}else c=e[b].parentNode}n(c,a)}s();return!1}}}}}};})()