!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.modules=e,t.cache=n,t.p="",t(0)}([function(e,t,n){"use strict";!function(){function e(){var e=n.getBoundingClientRect().width;e>640&&(e/=2);var t=e/(o/r);n.style.fontSize=t+"px"}var t=null,n=document.documentElement,o=375,r=16;e(),window.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(e,300)},!1)}()}]);