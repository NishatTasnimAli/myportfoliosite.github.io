!function(){var e,t;function n(e){var t=document.body.className;t=t.replace(e,""),document.body.className=t}function l(e){e.style.display="block",setTimeout(function(){e.style.opacity=1},1)}function s(e){e.style.opacity="",setTimeout(function(){e.style.display=""},200)}function i(e){if(document.body.classList.contains("ast-header-break-point")){var t=document.querySelector(".main-navigation"),a=document.querySelector(".main-header-bar");if(null!==a&&null!==t){var o=t.offsetHeight,n=a.offsetHeight;if(o&&!document.body.classList.contains("ast-no-toggle-menu-enable"))var s=parseFloat(o)-parseFloat(n);else s=parseFloat(n);e.style.maxHeight=Math.abs(s)+"px"}}}function d(e){if(document.body.classList.contains("ast-header-break-point")){var t=document.querySelector(".main-navigation"),a=document.querySelector(".main-header-bar"),o=document.querySelector(".ast-mobile-header-wrap");if(null!==a&&null!==t){var n=t.offsetHeight,s=a.offsetHeight,r=o.offsetHeight;if(n&&!document.body.classList.contains("ast-no-toggle-menu-enable"))var c=parseFloat(n)-parseFloat(s);else c=parseFloat(s);if(e.parentNode.classList.contains("ast-mobile-header-wrap"))c=parseFloat(r);e.style.maxHeight=Math.abs(c)+"px"}}}e="iPhone"==navigator.userAgent.match(/iPhone/i)?"iphone":"",t="iPod"==navigator.userAgent.match(/iPod/i)?"ipod":"",document.body.className+=" "+e,document.body.className+=" "+t;for(var a=document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),o=0;a.length>o;o++)a[o].onclick=function(e){if(e.preventDefault(),e=e||window.event,this.classList.contains("header-cover"))for(var t=document.querySelectorAll(".ast-search-box.header-cover"),a=astraAddon.is_header_builder_active||!1,o=0;o<t.length;o++)for(var n=t[o].parentNode.querySelectorAll("a.astra-search-icon"),s=0;s<n.length;s++)n[s]==this&&(l(t[o]),t[o].querySelector("input.search-field").focus(),a?d(t[o]):i(t[o]));else if(this.classList.contains("full-screen")){var r=document.getElementById("ast-seach-full-screen-form");r.classList.contains("full-screen")&&(l(r),c="full-screen",document.body.className+=" "+c,r.querySelector("input.search-field").focus())}var c};for(var r=document.getElementsByClassName("close"),c=(o=0,r.length);o<c;++o)r[o].onclick=function(e){e=e||window.event;for(var t=this;;){if(t.parentNode.classList.contains("ast-search-box")){s(t.parentNode),n("full-screen");break}if(t.parentNode.classList.contains("site-header"))break;t=t.parentNode}};document.onkeydown=function(e){if(27==e.keyCode){var t=document.getElementById("ast-seach-full-screen-form");null!=t&&(s(t),n("full-screen"));for(var a=document.querySelectorAll(".ast-search-box.header-cover"),o=0;o<a.length;o++)s(a[o])}},window.addEventListener("resize",function(){if("BODY"===document.activeElement.tagName&&"INPUT"!=document.activeElement.tagName){var e=document.querySelectorAll(".ast-search-box.header-cover");if(!document.body.classList.contains("ast-header-break-point"))for(var t=0;t<e.length;t++)e[t].style.maxHeight="",e[t].style.opacity="",e[t].style.display=""}})}();