!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.modules=t,e.cache=n,e.p="",e(0)}([function(t,e,n){"use strict";n(3),n(4),$("#scratch-layer").wScratchPad({size:35,bg:"#fff",fg:"./fg.png",realtime:!0,scratchDown:function(t,e){console.log("e:",t)},scratchUp:function(t,e){e>20&&(this.clear(),this.enable("enabled",!1),$("#scratch-layer").hide(300),$(".pop-content").show(),$(".pop-layer").css({"-webkit-animation":"smogbgin 1.6s"})),console.log(e)},scratchMove:function(t,e){console.log(e)},cursor:"crosshair"})},,,function(t,e,n){var i=function(){function t(t){return null==t?String(t):Y[J.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){return"number"==typeof t.length}function a(t){return k.call(t,function(t){return null!=t})}function c(t){return t.length>0?N.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in j?j[t]:j[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||Z[u(t)]?e:e+"px"}function h(t){var e,n;return L[t]||(e=M.createElement(t),M.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),L[t]=n),L[t]}function p(t){return"children"in t?A.call(t.children):N.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e){var n,i=t?t.length:0;for(n=0;i>n;n++)this[n]=t[n];this.length=i,this.selector=e||""}function g(t,e,n){for(C in e)n&&(o(e[C])||Q(e[C]))?(o(e[C])&&!o(t[C])&&(t[C]={}),Q(e[C])&&!Q(t[C])&&(t[C]=[]),g(t[C],e[C],n)):e[C]!==E&&(t[C]=e[C])}function m(t,e){return null==e?N(t):N(t).filter(e)}function v(t,n,i,r){return e(n)?n.call(t,i,r):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function b(t,e){var n=t.className||"",i=n&&n.baseVal!==E;return e===E?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function w(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?N.parseJSON(t):t):t}catch(e){return t}}function x(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)x(t.childNodes[n],e)}var E,C,N,T,O,S,P=[],$=P.concat,k=P.filter,A=P.slice,M=window.document,L={},j={},Z={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},_=/^\s*<(\w+|!)[^>]*>/,z=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,B=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,D=/^(?:body|html)$/i,F=/([A-Z])/g,R=["val","css","html","text","data","width","height","offset"],q=["after","prepend","before","append"],V=M.createElement("table"),I=M.createElement("tr"),H={tr:M.createElement("tbody"),tbody:V,thead:V,tfoot:V,td:I,th:I,"*":M.createElement("div")},X=/complete|loaded|interactive/,U=/^[\w-]*$/,Y={},J=Y.toString,W={},G=M.createElement("div"),K={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Q=Array.isArray||function(t){return t instanceof Array};return W.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=G).appendChild(t),i=~W.qsa(r,e).indexOf(t),o&&G.removeChild(t),i},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},S=function(t){return k.call(t,function(e,n){return t.indexOf(e)==n})},W.fragment=function(t,e,n){var i,r,s;return z.test(t)&&(i=N(M.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(B,"<$1></$2>")),e===E&&(e=_.test(t)&&RegExp.$1),e in H||(e="*"),s=H[e],s.innerHTML=""+t,i=N.each(A.call(s.childNodes),function(){s.removeChild(this)})),o(n)&&(r=N(i),N.each(n,function(t,e){R.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},W.Z=function(t,e){return new d(t,e)},W.isZ=function(t){return t instanceof W.Z},W.init=function(t,n){var i;if(!t)return W.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&_.test(t))i=W.fragment(t,RegExp.$1,n),t=null;else{if(n!==E)return N(n).find(t);i=W.qsa(M,t)}else{if(e(t))return N(M).ready(t);if(W.isZ(t))return t;if(Q(t))i=a(t);else if(r(t))i=[t],t=null;else if(_.test(t))i=W.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==E)return N(n).find(t);i=W.qsa(M,t)}}return W.Z(i,t)},N=function(t,e){return W.init(t,e)},N.extend=function(t){var e,n=A.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){g(t,n,e)}),t},W.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,s=U.test(o);return t.getElementById&&s&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:A.call(s&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},N.contains=M.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},N.type=t,N.isFunction=e,N.isWindow=n,N.isArray=Q,N.isPlainObject=o,N.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},N.inArray=function(t,e,n){return P.indexOf.call(e,t,n)},N.camelCase=O,N.trim=function(t){return null==t?"":String.prototype.trim.call(t)},N.uuid=0,N.support={},N.expr={},N.noop=function(){},N.map=function(t,e){var n,i,r,o=[];if(s(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return c(o)},N.each=function(t,e){var n,i;if(s(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},N.grep=function(t,e){return k.call(t,e)},window.JSON&&(N.parseJSON=JSON.parse),N.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){Y["[object "+e+"]"]=e.toLowerCase()}),N.fn={constructor:W.Z,length:0,forEach:P.forEach,reduce:P.reduce,push:P.push,sort:P.sort,splice:P.splice,indexOf:P.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=W.isZ(e)?e.toArray():e;return $.apply(W.isZ(this)?this.toArray():this,n)},map:function(t){return N(N.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return N(A.apply(this,arguments))},ready:function(t){return X.test(M.readyState)&&M.body?t(N):M.addEventListener("DOMContentLoaded",function(){t(N)},!1),this},get:function(t){return t===E?A.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return P.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):N(k.call(this,function(e){return W.matches(e,t)}))},add:function(t,e){return N(S(this.concat(N(t,e))))},is:function(t){return this.length>0&&W.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==E)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):s(t)&&e(t.item)?A.call(t):N(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return N(n)},has:function(t){return this.filter(function(){return r(t)?N.contains(this,t):N(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:N(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:N(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?N(t).filter(function(){var t=this;return P.some.call(n,function(e){return N.contains(e,t)})}):1==this.length?N(W.qsa(this[0],t)):this.map(function(){return W.qsa(this,t)}):N()},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=N(t));n&&!(r?r.indexOf(n)>=0:W.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return N(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=N.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(S(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||A.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return k.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return N.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=N(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){N(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){N(this[0]).before(t=N(t));for(var e;(e=t.children()).length;)t=e.first();N(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=N(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){N(this).replaceWith(N(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=N(this);(t===E?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return N(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return N(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;N(this).empty().append(v(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=v(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(r(t))for(C in t)y(this,C,t[C]);else y(this,t,v(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:E},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){y(this,t)},this)})},prop:function(t,e){return t=K[t]||t,1 in arguments?this.each(function(n){this[t]=v(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(F,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?w(i):E},val:function(t){return 0 in arguments?this.each(function(e){this.value=v(this,t,e,this.value)}):this[0]&&(this[0].multiple?N(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=N(this),i=v(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;if(!N.contains(M.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i,r=this[0];if(!r)return;if(i=getComputedStyle(r,""),"string"==typeof e)return r.style[O(e)]||i.getPropertyValue(e);if(Q(e)){var o={};return N.each(e,function(t,e){o[e]=r.style[O(e)]||i.getPropertyValue(e)}),o}}var s="";if("string"==t(e))n||0===n?s=u(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(u(e))});else for(C in e)e[C]||0===e[C]?s+=u(C)+":"+f(C,e[C])+";":this.each(function(){this.style.removeProperty(u(C))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(N(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?P.some.call(this,function(t){return this.test(b(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){T=[];var n=b(this),i=v(this,t,e,n);i.split(/\s+/g).forEach(function(t){N(this).hasClass(t)||T.push(t)},this),T.length&&b(this,n+(n?" ":"")+T.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===E)return b(this,"");T=b(this),v(this,t,e,T).split(/\s+/g).forEach(function(t){T=T.replace(l(t)," ")}),b(this,T.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=N(this),r=v(this,t,n,b(this));r.split(/\s+/g).forEach(function(t){(e===E?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===E?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===E?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=D.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(N(t).css("margin-top"))||0,n.left-=parseFloat(N(t).css("margin-left"))||0,i.top+=parseFloat(N(e[0]).css("border-top-width"))||0,i.left+=parseFloat(N(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||M.body;t&&!D.test(t.nodeName)&&"static"==N(t).css("position");)t=t.offsetParent;return t})}},N.fn.detach=N.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});N.fn[t]=function(r){var o,s=this[0];return r===E?n(s)?s["inner"+e]:i(s)?s.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){s=N(this),s.css(t,v(this,r,e,s[t]()))})}}),q.forEach(function(e,n){var i=n%2;N.fn[e]=function(){var e,r,o=N.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:W.fragment(n)}),s=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var a=N.contains(M.documentElement,r);o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!r)return N(t).remove();r.insertBefore(t,e),a&&x(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},N.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return N(t)[e](this),this}}),W.Z.prototype=d.prototype=N.fn,W.uniq=S,W.deserializeValue=w,N.zepto=W,N}();window.Zepto=i,void 0===window.$&&(window.$=i)},function(t,e,n){"use strict";n(6),function(t){function e(e,n){this.$el=t(e),this.options=n,this.init=!1,this.enabled=!0,this._generate()}var n=window.navigator.userAgent.toLowerCase(),i=n.indexOf("android 4.2")>0;t.data=function(t,e,n){var e="data-"+e;return"undefined"==typeof n?t[e]:void(t[e]=n)},t.removeData=function(t,e){for(var e in t)t[e]=null},t.fn.innerWidth=t.fn.width,t.fn.innerHeight=t.fn.height,e.prototype={_generate:function(){return t.support.canvas?(this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),"static"===this.$el.css("position")&&this.$el.css("position","relative"),this.$img=t('<img src=""/>').attr("crossOrigin","anonymous").css({position:"absolute",width:"100%",height:"100%"}),this.$scratchpad=t(this.canvas).css({position:"absolute",width:"100%",height:"100%"}),this.$scratchpad.bindMobileEvents(),this.$scratchpad.mousedown(t.proxy(function(e){return this.enabled?(this.canvasOffset=t(this.canvas).offset(),this.scratch=!0,void this._scratchFunc(e,"Down")):!0},this)).mousemove(t.proxy(function(t){this.scratch&&this._scratchFunc(t,"Move")},this)).mouseup(t.proxy(function(t){this.scratch&&(this.scratch=!1,this._scratchFunc(t,"Up"))},this)),this._setOptions(),this.$el.append(this.$img).append(this.$scratchpad),this.init=!0,void this.reset()):(this.$el.append("Canvas is not supported in this browser."),!0)},reset:function(){var e=this,n=Math.ceil(this.$el.innerWidth()),i=Math.ceil(this.$el.innerHeight()),r=window.devicePixelRatio||1;if(this.pixels=n*i,this.$scratchpad.attr("width",n).attr("height",i),this.canvas.setAttribute("width",n*r),this.canvas.setAttribute("height",i*r),this.ctx.scale(r,r),this.pixels=n*r*i*r,this.$img.hide(),this.options.bg&&("#"===this.options.bg.charAt(0)?this.$el.css("backgroundColor",this.options.bg):(this.$el.css("backgroundColor",""),this.$img.attr("src",this.options.bg))),this.options.fg)if("#"===this.options.fg.charAt(0))this.ctx.fillStyle=this.options.fg,this.ctx.beginPath(),this.ctx.rect(0,0,n,i),this.ctx.fill(),this.$img.show();else{var o=t(new Image).attr("src",this.options.fg);o[0].onload=function(){e.ctx.drawImage(o[0],0,0,n,i),e.$img.show()}}},clear:function(){this.ctx.clearRect(0,0,Math.ceil(this.$el.innerWidth()),Math.ceil(this.$el.innerHeight()))},enable:function(t){this.enabled=t===!0?!0:!1},destroy:function(){this.$el.children().remove(),t.removeData(this.$el,"wScratchPad")},_setOptions:function(){var t,e;for(t in this.options)this.options[t]=this.$el.attr("data-"+t)||this.options[t],e="set"+t.charAt(0).toUpperCase()+t.substring(1),this[e]&&this[e](this.options[t])},setBg:function(){this.init&&this.reset()},setFg:function(){this.setBg()},setCursor:function(t){this.$el.css("cursor",t)},_scratchFunc:function(e,n){var i=t.extend({},e);i.pageX=Math.floor(e.pageX-this.canvasOffset.left),i.pageY=Math.floor(e.pageY-this.canvasOffset.top),this["_scratch"+n](i),(this.options.realtime||"Up"===n)&&this.options["scratch"+n]&&this.options["scratch"+n].apply(this,[i,this._scratchPercent()])},_scratchPercent:function(){for(var t=0,e=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),n=0,i=e.data.length;i>n;n+=4)0===e.data[n]&&0===e.data[n+1]&&0===e.data[n+2]&&0===e.data[n+3]&&t++;return t/this.pixels*100},_scratchDown:function(e){i&&t(this.canvas).css("margin-right","0px"==t(this.canvas).css("margin-right")?"1px":"0px"),this.ctx.globalCompositeOperation="destination-out",this.ctx.lineJoin="round",this.ctx.lineCap="round",this.ctx.strokeStyle=this.options.color,this.ctx.lineWidth=this.options.size,this.ctx.beginPath(),this.ctx.arc(e.pageX,e.pageY,this.options.size/2,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(e.pageX,e.pageY)},_scratchMove:function(e){i&&t(this.canvas).css("margin-right","0px"==t(this.canvas).css("margin-right")?"1px":"0px"),this.ctx.lineTo(e.pageX,e.pageY),this.ctx.stroke()},_scratchUp:function(){i&&t(this.canvas).css("margin-right","0px"==t(this.canvas).css("margin-right")?"1px":"0px"),this.ctx.closePath()}},t.support.canvas=document.createElement("canvas").getContext,t.fn.wScratchPad=function(n,i){function r(){var i=t.data(this,"wScratchPad");return i||(i=new e(this,t.extend(!0,{},n)),t.data(this,"wScratchPad",i)),i}if("string"==typeof n){var o,s=[],a=(void 0!==i?"set":"get")+n.charAt(0).toUpperCase()+n.substring(1),c=function(){o.options[n]&&(o.options[n]=i),o[a]&&o[a].apply(o,[i])},u=function(){return o[a]?o[a].apply(o,[i]):o.options[n]?o.options[n]:void 0},l=function(){o=t.data(this,"wScratchPad"),o&&(o[n]?o[n].apply(o,[i]):void 0!==i?c():s.push(u()))};return this.each(l),s.length?1===s.length?s[0]:s:this}return n=t.extend({},t.fn.wScratchPad.defaults,n),this.each(r)},t.fn.wScratchPad.defaults={size:5,bg:"#cacaca",fg:"#6699ff",realtime:!0,scratchDown:null,scratchUp:null,scratchMove:null,cursor:"crosshair"},t.fn.bindMobileEvents=function(){t(this).on("touchstart touchmove touchend touchcancel",function(t){var e=t.changedTouches||t.originalEvent.targetTouches,n=e[0],i="";switch(t.type){case"touchstart":i="mousedown";break;case"touchmove":i="mousemove",t.preventDefault();break;case"touchend":i="mouseup";break;default:return}var r=document.createEvent("MouseEvent");r.initMouseEvent(i,!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),n.target.dispatchEvent(r)})}}(Zepto)},,function(t,e,n){!function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,s){if(n=i(n),n.ns)var a=r(n.ns);return(m[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||a.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!s||t.sel==s)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in b||!!e}function s(t){return w[t]||y&&b[t]||t}function a(n,r,a,c,l,h,p){var d=e(n),g=m[d]||(m[d]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(a);var r=i(e);r.fn=a,r.sel=l,r.e in w&&(a=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=h;var d=h||a;r.proxy=function(t){if(t=u(t),!t.isImmediatePropagationStopped()){t.data=c;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=g.length,g.push(r),"addEventListener"in n&&n.addEventListener(s(r.e),r.proxy,o(r,p))})}function c(t,i,r,a,c){var u=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,a).forEach(function(e){delete m[u][e.i],"removeEventListener"in t&&t.removeEventListener(s(e.e),e.proxy,o(e,c))})})}function u(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(N,function(t,i){var r=n[t];e[t]=function(){return this[i]=x,r&&r.apply(n,arguments)},e[i]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function l(t){var e,n={originalEvent:t};for(e in t)C.test(e)||t[e]===f||(n[e]=t[e]);return u(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,g=function(t){return"string"==typeof t},m={},v={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:a,remove:c},t.proxy=function(n,i){var r=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(i,r?r.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(g(i))return r?(r.unshift(n[i],n),t.proxy.apply(null,r)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},E=function(){return!1},C=/^([A-Z]|returnValue$|layer[XY]$)/,N={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var s,u,h=this;return e&&!g(e)?(t.each(e,function(t,e){h.on(t,n,i,e,o)}),h):(g(n)||d(r)||r===!1||(r=i,i=n,n=f),(r===f||i===!1)&&(r=i,i=f),r===!1&&(r=E),h.each(function(f,h){o&&(s=function(t){return c(h,t.type,r),r.apply(this,arguments)}),n&&(u=function(e){var i,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(i=t.extend(l(e),{currentTarget:o,liveFired:h}),(s||r).apply(o,[i].concat(p.call(arguments,1)))):void 0}),a(h,e,r,i,n,u||s)}))},t.fn.off=function(e,n,i){var r=this;return e&&!g(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(g(n)||d(i)||i===!1||(i=n,n=f),i===!1&&(i=E),r.each(function(){c(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=g(e)||t.isPlainObject(e)?t.Event(e):u(e),e._args=n,this.each(function(){e.type in b&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(s,a){r=l(g(e)?t.Event(e):e),r._args=i,r.target=a,t.each(n(a,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){g(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),u(n)}}(Zepto)}]);