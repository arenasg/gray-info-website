/*! For license information please see bundle.js.LICENSE.txt */
!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=jQuery},function(e,t,n){e.exports=n(2)},function(e,t,n){n(3),n(0),n(4),n(5),s(n(6));var i=document.body;if(i.hasAttribute("data-page-module")){var r=i.getAttribute("data-page-module");if(""!==r)try{s(!function(){var e=new Error("Cannot find module 'undefined'");throw e.code="MODULE_NOT_FOUND",e}())}catch(e){console.log('module "'+r+'" could not be loaded')}}function s(e){null!=e&&"function"==typeof e.init&&e.init()}},function(e,t,n){var i;!function(e){var t,n,i,r,s,a,o,u=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(u)&&u.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(n=document.createElement("source"),i=function(e){var t,i,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=n.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout((function(){r.removeChild(t)}))):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,i=e.sizes,e.sizes+=",100vw",setTimeout((function(){e.sizes=i})))},r=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)i(t[e])},s=function(){clearTimeout(t),t=setTimeout(r,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){s(),a&&a.addListener&&a.addListener(s)},n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),s))}(window),function(r,s,a){"use strict";var o,u,c;s.createElement("picture");var l={},f=!1,d=function(){},p=s.createElement("img"),h=p.getAttribute,m=p.setAttribute,v=p.removeAttribute,g=s.documentElement,A={},y={algorithm:""},b="data-pfsrc",x=b+"set",w=navigator.userAgent,C=/rident/.test(w)||/ecko/.test(w)&&w.match(/rv\:(\d+)/)&&RegExp.$1>35,S="currentSrc",E=/\s+\+?\d+(e\d+)?w/,I=/(\([^)]+\))?\s*(.+)/,O=r.picturefillCFG,T="font-size:100%!important;",k=!0,z={},M={},L=r.devicePixelRatio,_={px:1,in:96},j=s.createElement("a"),P=!1,R=/^[ \t\n\r\u000c]+/,B=/^[, \t\n\r\u000c]+/,D=/^[^ \t\n\r\u000c]+/,Q=/[,]+$/,U=/^\d+$/,$=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,F=function(e,t,n,i){e.addEventListener?e.addEventListener(t,n,i||!1):e.attachEvent&&e.attachEvent("on"+t,n)},H=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}};function W(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var q,G,N,X,Y,V,K,J,Z,ee,te,ne,ie,re,se,ae,oe=(q=/^([\d\.]+)(em|vw|px)$/,G=H((function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"})),function(e,t){var n;if(!(e in z))if(z[e]=!1,t&&(n=e.match(q)))z[e]=n[1]*_[n[2]];else try{z[e]=new Function("e",G(e))(_)}catch(e){}return z[e]}),ue=function(e,t){return e.w?(e.cWidth=l.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ce=function(e){if(f){var t,n,i,r=e||{};if(r.elements&&1===r.elements.nodeType&&("IMG"===r.elements.nodeName.toUpperCase()?r.elements=[r.elements]:(r.context=r.elements,r.elements=null)),i=(t=r.elements||l.qsa(r.context||s,r.reevaluate||r.reselect?l.sel:l.selShort)).length){for(l.setupRun(r),P=!0,n=0;n<i;n++)l.fillImg(t[n],r);l.teardownRun(r)}}};function le(e,t){return e.res-t.res}function fe(e,t){var n,i,r;if(e&&t)for(r=l.parseSet(t),e=l.makeUrl(e),n=0;n<r.length;n++)if(e===l.makeUrl(r[n].url)){i=r[n];break}return i}r.console&&console.warn,S in p||(S="src"),A["image/jpeg"]=!0,A["image/gif"]=!0,A["image/png"]=!0,A["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),l.ns=("pf"+(new Date).getTime()).substr(0,9),l.supSrcset="srcset"in p,l.supSizes="sizes"in p,l.supPicture=!!r.HTMLPictureElement,l.supSrcset&&l.supPicture&&!l.supSizes&&(N=s.createElement("img"),p.srcset="data:,a",N.src="data:,a",l.supSrcset=p.complete===N.complete,l.supPicture=l.supSrcset&&l.supPicture),l.supSrcset&&!l.supSizes?(X="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",Y=s.createElement("img"),V=function(){2===Y.width&&(l.supSizes=!0),u=l.supSrcset&&!l.supSizes,f=!0,setTimeout(ce)},Y.onload=V,Y.onerror=V,Y.setAttribute("sizes","9px"),Y.srcset=X+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",Y.src=X):f=!0,l.selShort="picture>img,img[srcset]",l.sel=l.selShort,l.cfg=y,l.DPR=L||1,l.u=_,l.types=A,l.setSize=d,l.makeUrl=H((function(e){return j.href=e,j.href})),l.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},l.matchesMedia=function(){return r.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?l.matchesMedia=function(e){return!e||matchMedia(e).matches}:l.matchesMedia=l.mMQ,l.matchesMedia.apply(this,arguments)},l.mMQ=function(e){return!e||oe(e)},l.calcLength=function(e){var t=oe(e,!0)||!1;return t<0&&(t=!1),t},l.supportsType=function(e){return!e||A[e]},l.parseSize=H((function(e){var t=(e||"").match(I);return{media:t&&t[1],length:t&&t[2]}})),l.parseSet=function(e){return e.cands||(e.cands=function(e,t){function n(t){var n,i=t.exec(e.substring(c));if(i)return n=i[0],c+=n.length,n}var i,r,s,a,o,u=e.length,c=0,l=[];function f(){var e,n,s,a,o,u,c,f,d,p=!1,h={};for(a=0;a<r.length;a++)u=(o=r[a])[o.length-1],c=o.substring(0,o.length-1),f=parseInt(c,10),d=parseFloat(c),U.test(c)&&"w"===u?((e||n)&&(p=!0),0===f?p=!0:e=f):$.test(c)&&"x"===u?((e||n||s)&&(p=!0),d<0?p=!0:n=d):U.test(c)&&"h"===u?((s||n)&&(p=!0),0===f?p=!0:s=f):p=!0;p||(h.url=i,e&&(h.w=e),n&&(h.d=n),s&&(h.h=s),s||n||e||(h.d=1),1===h.d&&(t.has1x=!0),h.set=t,l.push(h))}function d(){for(n(R),s="",a="in descriptor";;){if(o=e.charAt(c),"in descriptor"===a)if(W(o))s&&(r.push(s),s="",a="after descriptor");else{if(","===o)return c+=1,s&&r.push(s),void f();if("("===o)s+=o,a="in parens";else{if(""===o)return s&&r.push(s),void f();s+=o}}else if("in parens"===a)if(")"===o)s+=o,a="in descriptor";else{if(""===o)return r.push(s),void f();s+=o}else if("after descriptor"===a)if(W(o));else{if(""===o)return void f();a="in descriptor",c-=1}c+=1}}for(;;){if(n(B),c>=u)return l;i=n(D),r=[],","===i.slice(-1)?(i=i.replace(Q,""),f()):d()}}(e.srcset,e)),e.cands},l.getEmValue=function(){var e;if(!o&&(e=s.body)){var t=s.createElement("div"),n=g.style.cssText,i=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",g.style.cssText=T,e.style.cssText=T,e.appendChild(t),o=t.offsetWidth,e.removeChild(t),o=parseFloat(o,10),g.style.cssText=n,e.style.cssText=i}return o||16},l.calcListLength=function(e){if(!(e in M)||y.uT){var t=l.calcLength(function(e){var t,n,i,r,s,a,o,u=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,c=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(i=(n=function(e){var t,n="",i=[],r=[],s=0,a=0,o=!1;function u(){n&&(i.push(n),n="")}function c(){i[0]&&(r.push(i),i=[])}for(;;){if(""===(t=e.charAt(a)))return u(),c(),r;if(o){if("*"===t&&"/"===e[a+1]){o=!1,a+=2,u();continue}a+=1}else{if(W(t)){if(e.charAt(a-1)&&W(e.charAt(a-1))||!n){a+=1;continue}if(0===s){u(),a+=1;continue}t=" "}else if("("===t)s+=1;else if(")"===t)s-=1;else{if(","===t){u(),c(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){o=!0,a+=2;continue}}n+=t,a+=1}}}(e)).length,t=0;t<i;t++)if(s=(r=n[t])[r.length-1],o=s,u.test(o)&&parseFloat(o)>=0||c.test(o)||"0"===o||"-0"===o||"+0"===o){if(a=s,r.pop(),0===r.length)return a;if(r=r.join(" "),l.matchesMedia(r))return a}return"100vw"}(e));M[e]=t||_.width}return M[e]},l.setRes=function(e){var t;if(e)for(var n=0,i=(t=l.parseSet(e)).length;n<i;n++)ue(t[n],e.sizes);return t},l.setRes.res=ue,l.applySetCandidate=function(e,t){if(e.length){var n,i,r,s,a,o,u,c,f,d,p,h,m,v,g,A,b=t[l.ns],x=l.DPR;if(o=b.curSrc||t[S],(u=b.curCan||function(e,t,n){var i;return!n&&t&&(n=(n=e[l.ns].sets)&&n[n.length-1]),(i=fe(t,n))&&(t=l.makeUrl(t),e[l.ns].curSrc=t,e[l.ns].curCan=i,i.res||ue(i,i.set.sizes)),i}(t,o,e[0].set))&&u.set===e[0].set&&((f=C&&!t.complete&&u.res-.1>x)||(u.cached=!0,u.res>=x&&(a=u))),!a)for(e.sort(le),a=e[(s=e.length)-1],i=0;i<s;i++)if((n=e[i]).res>=x){a=e[r=i-1]&&(f||o!==l.makeUrl(n.url))&&(d=e[r].res,p=n.res,h=x,m=e[r].cached,v=void 0,g=void 0,A=void 0,"saveData"===y.algorithm?d>2.7?A=h+1:(g=(p-h)*(v=Math.pow(d-.6,1.5)),m&&(g+=.1*v),A=d+g):A=h>1?Math.sqrt(d*p):d,A>h)?e[r]:n;break}a&&(c=l.makeUrl(a.url),b.curSrc=c,b.curCan=a,c!==o&&l.setSrc(t,a),l.setSize(t))}},l.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},l.getSet=function(e){var t,n,i,r=!1,s=e[l.ns].sets;for(t=0;t<s.length&&!r;t++)if((n=s[t]).srcset&&l.matchesMedia(n.media)&&(i=l.supportsType(n.type))){"pending"===i&&(n=i),r=n;break}return r},l.parseSets=function(e,t,n){var i,r,s,o,c=t&&"PICTURE"===t.nodeName.toUpperCase(),f=e[l.ns];(f.src===a||n.src)&&(f.src=h.call(e,"src"),f.src?m.call(e,b,f.src):v.call(e,b)),(f.srcset===a||n.srcset||!l.supSrcset||e.srcset)&&(i=h.call(e,"srcset"),f.srcset=i,o=!0),f.sets=[],c&&(f.pic=!0,function(e,t){var n,i,r,s,a=e.getElementsByTagName("source");for(n=0,i=a.length;n<i;n++)(r=a[n])[l.ns]=!0,(s=r.getAttribute("srcset"))&&t.push({srcset:s,media:r.getAttribute("media"),type:r.getAttribute("type"),sizes:r.getAttribute("sizes")})}(t,f.sets)),f.srcset?(r={srcset:f.srcset,sizes:h.call(e,"sizes")},f.sets.push(r),(s=(u||f.src)&&E.test(f.srcset||""))||!f.src||fe(f.src,r)||r.has1x||(r.srcset+=", "+f.src,r.cands.push({url:f.src,d:1,set:r}))):f.src&&f.sets.push({srcset:f.src,sizes:null}),f.curCan=null,f.curSrc=a,f.supported=!(c||r&&!l.supSrcset||s&&!l.supSizes),o&&l.supSrcset&&!f.supported&&(i?(m.call(e,x,i),e.srcset=""):v.call(e,x)),f.supported&&!f.srcset&&(!f.src&&e.src||e.src!==l.makeUrl(f.src))&&(null===f.src?e.removeAttribute("src"):e.src=f.src),f.parsed=!0},l.fillImg=function(e,t){var n,i=t.reselect||t.reevaluate;e[l.ns]||(e[l.ns]={}),n=e[l.ns],(i||n.evaled!==c)&&(n.parsed&&!t.reevaluate||l.parseSets(e,e.parentNode,t),n.supported?n.evaled=c:function(e){var t,n=l.getSet(e),i=!1;"pending"!==n&&(i=c,n&&(t=l.setRes(n),l.applySetCandidate(t,e))),e[l.ns].evaled=i}(e))},l.setupRun=function(){P&&!k&&L===r.devicePixelRatio||(k=!1,L=r.devicePixelRatio,z={},M={},l.DPR=L||1,_.width=Math.max(r.innerWidth||0,g.clientWidth),_.height=Math.max(r.innerHeight||0,g.clientHeight),_.vw=_.width/100,_.vh=_.height/100,c=[_.height,_.width,L].join("-"),_.em=l.getEmValue(),_.rem=_.em)},l.supPicture?(ce=d,l.fillImg=d):(ie=r.attachEvent?/d$|^c/:/d$|^c|^i/,re=function(){var e=s.readyState||"";se=setTimeout(re,"loading"===e?200:999),s.body&&(l.fillImgs(),(K=K||ie.test(e))&&clearTimeout(se))},se=setTimeout(re,s.body?9:99),ae=g.clientHeight,F(r,"resize",(J=function(){k=Math.max(r.innerWidth||0,g.clientWidth)!==_.width||g.clientHeight!==ae,ae=g.clientHeight,k&&l.fillImgs()},Z=99,ne=function(){var e=new Date-te;e<Z?ee=setTimeout(ne,Z-e):(ee=null,J())},function(){te=new Date,ee||(ee=setTimeout(ne,Z))})),F(s,"readystatechange",re)),l.picturefill=ce,l.fillImgs=ce,l.teardownRun=d,ce._=l,r.picturefillCFG={pf:l,push:function(e){var t=e.shift();"function"==typeof l[t]?l[t].apply(l,e):(y[t]=e[0],P&&l.fillImgs({reselect:!0}))}};for(;O&&O.length;)r.picturefillCFG.push(O.shift());r.picturefill=ce,"object"==typeof e.exports?e.exports=ce:(i=function(){return ce}.call(t,n,t,e))===a||(e.exports=i),l.supPicture||(A["image/webp"]=function(e,t){var n=new r.Image;return n.onerror=function(){A[e]=!1,ce()},n.onload=function(){A[e]=1===n.width,ce()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},function(e,t,n){var i,r,s;!function(a){"use strict";r=[n(0)],void 0===(s="function"==typeof(i=function(e){var t,n,i={interval:100,sensitivity:6,timeout:0},r=0,s=function(e){t=e.pageX,n=e.pageY},a=function(e,i,r,o){if(Math.sqrt((r.pX-t)*(r.pX-t)+(r.pY-n)*(r.pY-n))<o.sensitivity)return i.off(r.event,s),delete r.timeoutId,r.isActive=!0,e.pageX=t,e.pageY=n,delete r.pX,delete r.pY,o.over.apply(i[0],[e]);r.pX=t,r.pY=n,r.timeoutId=setTimeout((function(){a(e,i,r,o)}),o.interval)},o=function(e,t,n,i){var r=t.data("hoverIntent");return r&&delete r[n.id],i.apply(t[0],[e])};e.fn.hoverIntent=function(t,n,u){var c=r++,l=e.extend({},i);e.isPlainObject(t)?(l=e.extend(l,t),e.isFunction(l.out)||(l.out=l.over)):l=e.isFunction(n)?e.extend(l,{over:t,out:n,selector:u}):e.extend(l,{over:t,out:t,selector:n});var f=function(t){var n=e.extend({},t),i=e(this),r=i.data("hoverIntent");r||i.data("hoverIntent",r={});var u=r[c];u||(r[c]=u={id:c}),u.timeoutId&&(u.timeoutId=clearTimeout(u.timeoutId));var f=u.event="mousemove.hoverIntent.hoverIntent"+c;if("mouseenter"===t.type){if(u.isActive)return;u.pX=n.pageX,u.pY=n.pageY,i.off(f,s).on(f,s),u.timeoutId=setTimeout((function(){a(n,i,u,l)}),l.interval)}else{if(!u.isActive)return;i.off(f,s),u.timeoutId=setTimeout((function(){o(n,i,u,l.out)}),l.timeout)}};return this.on({"mouseenter.hoverIntent":f,"mouseleave.hoverIntent":f},l.selector)}})?i.apply(t,r):i)||(e.exports=s)}()},function(e,t,n){var i,r;i=[n(0)],void 0===(r=function(e){return function(e){e.easing.jswing=e.easing.swing;var t=Math.pow,n=Math.sqrt,i=Math.sin,r=Math.cos,s=Math.PI,a=1.70158,o=1.525*a,u=a+1,c=2*s/3,l=2*s/4.5;function f(e){var t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375}e.extend(e.easing,{def:"easeOutQuad",swing:function(t){return e.easing[e.easing.def](t)},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return 1-(1-e)*(1-e)},easeInOutQuad:function(e){return e<.5?2*e*e:1-t(-2*e+2,2)/2},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return 1-t(1-e,3)},easeInOutCubic:function(e){return e<.5?4*e*e*e:1-t(-2*e+2,3)/2},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1-t(1-e,4)},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-t(-2*e+2,4)/2},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1-t(1-e,5)},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1-t(-2*e+2,5)/2},easeInSine:function(e){return 1-r(e*s/2)},easeOutSine:function(e){return i(e*s/2)},easeInOutSine:function(e){return-(r(s*e)-1)/2},easeInExpo:function(e){return 0===e?0:t(2,10*e-10)},easeOutExpo:function(e){return 1===e?1:1-t(2,-10*e)},easeInOutExpo:function(e){return 0===e?0:1===e?1:e<.5?t(2,20*e-10)/2:(2-t(2,-20*e+10))/2},easeInCirc:function(e){return 1-n(1-t(e,2))},easeOutCirc:function(e){return n(1-t(e-1,2))},easeInOutCirc:function(e){return e<.5?(1-n(1-t(2*e,2)))/2:(n(1-t(-2*e+2,2))+1)/2},easeInElastic:function(e){return 0===e?0:1===e?1:-t(2,10*e-10)*i((10*e-10.75)*c)},easeOutElastic:function(e){return 0===e?0:1===e?1:t(2,-10*e)*i((10*e-.75)*c)+1},easeInOutElastic:function(e){return 0===e?0:1===e?1:e<.5?-t(2,20*e-10)*i((20*e-11.125)*l)/2:t(2,-20*e+10)*i((20*e-11.125)*l)/2+1},easeInBack:function(e){return u*e*e*e-a*e*e},easeOutBack:function(e){return 1+u*t(e-1,3)+a*t(e-1,2)},easeInOutBack:function(e){return e<.5?t(2*e,2)*(2*(o+1)*e-o)/2:(t(2*e-2,2)*((o+1)*(2*e-2)+o)+2)/2},easeInBounce:function(e){return 1-f(1-e)},easeOutBounce:f,easeInOutBounce:function(e){return e<.5?(1-f(1-2*e))/2:(1+f(2*e-1))/2}})}(e)}.apply(t,i))||(e.exports=r)},function(e,t,n){var i=n(0),r=n(7),s=n(8);t.init=function(){var e;(e=i(".site-header")).length&&r.init(e),document.querySelectorAll("details").forEach((function(e){new s(e)})),i(".carousel").slick()}},function(e,t,n){var i=n(0),r=null;function s(){var e,t,n,s,a,o;e=i(window),t=!1,e.scroll((function(n){var i=e.scrollTop();i>0&!t?(r.addClass("js-is-scrolled"),t=!0):0==i&&t&&(r.removeClass("js-is-scrolled"),t=!1)})),n=i("#site-navigation .nav-bar__item.has-subnav"),i.each(n,(function(e,t){var n=i(t),r=n.find(".nav-bar__panel-outer"),s=n.find(".nav-bar__panel"),a=null;n.hoverIntent({over:function(){r.css("z-index",12),null!==a&&clearTimeout(a),r.addClass("is-active"),s.addClass("is-active")},out:function(){r.css("z-index",11),s.removeClass("is-active"),a=setTimeout((function(){r.removeClass("is-active"),clearTimeout(a)}),500)},timeout:100})})),s=r.find(".site-header__menu-icon-link"),a=i(".nav-bar-mobile"),o=a.find(".site-header__menu-icon-close-link"),s.click((function(e){e.preventDefault(),i(e.target).toggleClass("js-close"),i("html").toggleClass("no-scroll"),r.toggleClass("js-force-dropshadow"),a.toggleClass("js-is-open")})),o.click((function(e){e.preventDefault(),i(e.target).toggleClass("js-close"),i("html").toggleClass("no-scroll"),r.toggleClass("js-force-dropshadow"),a.toggleClass("js-is-open")})),function(){var e=i("body").data("page-module"),t=i(".nav-bar__item");i.each(t,(function(t,n){var r=i(n),s=r.find(".nav-bar__link"),a=s.data("id"),o=r.find("a");e.indexOf(a)>=0&&(r.addClass("nav_item is-selected"),s.addClass("nav_link is-selected")),i.each(o,(function(t,n){var r=i(n),a=r.data("id"),o=e+"-landing";(e.indexOf(a)>=0||o.indexOf(a)>=0)&&(s.addClass("nav_link is-selected"),r.addClass("subnav_link is-selected"))}))}))}()}t.init=function(e){r=e,s()}},function(e,t){function n(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s=function(){function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.summary=t.querySelector("summary"),this.expandLabel=this.summary.innerText,this.collapseLabel=this.summary.dataset.collapseLabel?this.summary.dataset.collapseLabel:"Collapse",this.content=document.createElement("div"),this.content.classList.add("content"),n(this.el.children).forEach((function(e){e!==i.summary&&i.content.appendChild(e)})),t.appendChild(this.content),this.animation=null,this.isClosing=!1,this.isExpanding=!1,this.summary.addEventListener("click",(function(e){return i.onClick(e)}))}var t,i,s;return t=e,(i=[{key:"onClick",value:function(e){e.preventDefault(),this.el.style.overflow="hidden",this.isClosing||!this.el.open?this.open():(this.isExpanding||this.el.open)&&this.shrink()}},{key:"shrink",value:function(){var e=this;this.isClosing=!0;var t="".concat(this.el.offsetHeight,"px"),n="".concat(this.summary.offsetHeight,"px");this.animation&&this.animation.cancel(),this.animation=this.el.animate({height:[t,n]},{duration:400,easing:"ease-out"}),this.animation.onfinish=function(){return e.onAnimationFinish(!1)},this.animation.oncancel=function(){return e.isClosing=!1}}},{key:"open",value:function(){var e=this;this.el.style.height="".concat(this.el.offsetHeight,"px"),this.el.open=!0,window.requestAnimationFrame((function(){return e.expand()}))}},{key:"expand",value:function(){var e=this;this.isExpanding=!0;var t="".concat(this.el.offsetHeight,"px"),n="".concat(this.content.offsetHeight,"px");this.animation&&this.animation.cancel(),this.animation=this.el.animate({height:[t,n]},{duration:400,easing:"ease-out"}),this.animation.onfinish=function(){return e.onAnimationFinish(!0)},this.animation.oncancel=function(){return e.isExpanding=!1}}},{key:"onAnimationFinish",value:function(e){this.el.open=e,this.animation=null,this.isClosing=!1,this.isExpanding=!1,this.el.style.height=this.el.style.overflow="",this.summary.innerText=e?this.collapseLabel:this.expandLabel}}])&&r(t.prototype,i),s&&r(t,s),e}();e.exports=s}]);
//# sourceMappingURL=bundle.js.map