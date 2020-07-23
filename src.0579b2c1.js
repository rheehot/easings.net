!function(t,e){function n(t,e){Array.prototype.slice.call(t).forEach(e)}function a(e){var n=t.getComputedStyle(e),a=/([\d.]+m*s)/i.exec(n.transitionDuration);return parseFloat(a[1])*(a[1].indexOf("ms")>-1?1:1e3)}function i(t,n){return void 0===n&&(n=e),n.querySelector(t)}function s(t,n){return void 0===n&&(n=e),n.querySelectorAll(t)}!function(t,e){e()}(0,(function(){function n(n){var a=!0,i=!1,s=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function r(t){return!!(t&&t!==e&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}function u(t){t.classList.contains("j")||(t.classList.add("j"),t.setAttribute("data-focus-visible-added",""))}function c(t){a=!1}function l(){e.addEventListener("mousemove",d),e.addEventListener("mousedown",d),e.addEventListener("mouseup",d),e.addEventListener("pointermove",d),e.addEventListener("pointerdown",d),e.addEventListener("pointerup",d),e.addEventListener("touchmove",d),e.addEventListener("touchstart",d),e.addEventListener("touchend",d)}function d(t){t.target.nodeName&&"html"===t.target.nodeName.toLowerCase()||(a=!1,e.removeEventListener("mousemove",d),e.removeEventListener("mousedown",d),e.removeEventListener("mouseup",d),e.removeEventListener("pointermove",d),e.removeEventListener("pointerdown",d),e.removeEventListener("pointerup",d),e.removeEventListener("touchmove",d),e.removeEventListener("touchstart",d),e.removeEventListener("touchend",d))}e.addEventListener("keydown",(function(t){t.metaKey||t.altKey||t.ctrlKey||(r(n.activeElement)&&u(n.activeElement),a=!0)}),!0),e.addEventListener("mousedown",c,!0),e.addEventListener("pointerdown",c,!0),e.addEventListener("touchstart",c,!0),e.addEventListener("visibilitychange",(function(t){"hidden"==e.visibilityState&&(i&&(a=!0),l())}),!0),l(),n.addEventListener("focus",(function(t){var e,n,i;r(t.target)&&(a||(n=(e=t.target).type,"INPUT"==(i=e.tagName)&&o[n]&&!e.readOnly||"TEXTAREA"==i&&!e.readOnly||e.isContentEditable))&&u(t.target)}),!0),n.addEventListener("blur",(function(e){var n;r(e.target)&&(e.target.classList.contains("j")||e.target.hasAttribute("data-focus-visible-added"))&&(i=!0,t.clearTimeout(s),s=t.setTimeout((function(){i=!1,t.clearTimeout(s)}),100),(n=e.target).hasAttribute("data-focus-visible-added")&&(n.classList.remove("j"),n.removeAttribute("data-focus-visible-added")))}),!0),n.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&n.host?n.host.setAttribute("data-js-focus-visible",""):n.nodeType===Node.DOCUMENT_NODE&&e.documentElement.classList.add("js-focus-visible")}if(void 0!==t&&void 0!==e){var a;t.applyFocusVisiblePolyfill=n;try{a=new CustomEvent("focus-visible-polyfill-ready")}catch(t){(a=e.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}t.dispatchEvent(a)}void 0!==e&&n(e)}));var o,r,u,c=i(".b4[data-target=false]"),l=i(".b4[data-target=true]"),d=s(".by"),f={opacity:"b6",scale:"b7",translate:"b8"},v="b5",m=!1;function h(){c.classList.add(v),l.classList.add(v),l.removeAttribute("style"),c.classList.remove(f.opacity,f.scale,f.z),l.classList.remove(f.opacity,f.scale,f.z),requestAnimationFrame((function(){c.classList.remove(v),l.classList.remove(v)}))}function p(t,e){t.classList.add(v),e!==u?(t.classList.remove(f[u]),t.offsetWidth,t.classList.remove(v),t.classList.add(f[e])):(t.offsetWidth,t.classList.remove(v),t.classList.toggle(f[e]))}function L(e){var n=e.getBoundingClientRect();return{height:n.height,width:n.width,x:n.left+t.pageXOffset,y:n.top+t.pageYOffset}}n(d,(function(e){e.addEventListener("click",(function(){var n=e.getAttribute("data-type");p(c,n),o?function(e){var n=a(l),i=e+"-"+o,s=t.getComputedStyle(l);m=s.animationName===i&&!m,l.style.animation="none",l.offsetWidth,l.style.animation="\n\t\t"+i+" "+n+"ms both "+(m?"reverse":"")+" linear\n\t"}(n):(l.style.transitionTimingFunction=r,p(l,n)),u=n}))}));var y,g;function E(t,e){if(t in b){var n=b[t].map((function(n){var a=F[t](n/100);return"\t<span class='k'>"+n+"%</span> {\n\t\t"+function(t,e){var n=M(1-e);switch(t){case g.opacity:return"opacity: "+n+";";case g.scale:return"transform: scale("+n+");";case g.z:return"transform: translateX("+M(-100*e)+"%);";default:return""}}(e,a)+"\n\t}\n\n"})).join("");return"<span class='k'>@keyframes</span> <span class='l'>"+e+"-"+t+"</span> {\n"+n+"}"}return""}var b={easeInElastic:[0,4,8,14,18,26,28,40,42,56,58,72,86,100],easeOutElastic:[0,16,28,44,59,73,88,100],easeInOutElastic:[0,4,8,18,20,28,30,38,40,60,62,70,72,80,82,90,92,100],easeInBounce:[0,4,8,18,26,46,64,76,88,100],easeOutBounce:[0,12,24,36,54,74,82,92,96,100],easeInOutBounce:[0,2,4,10,14,22,32,42,50,58,68,78,86,90,96,98,100]},A=Math.pow,w=Math.sqrt,I=Math.sin,O=Math.cos,T=Math.PI,C=1.70158,x=1.525*C,k=2*T/3,S=2*T/4.5;function N(t){var e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?e*(t-=1.5/n)*t+.75:t<2.5/n?e*(t-=2.25/n)*t+.9375:e*(t-=2.625/n)*t+.984375}var F={easeInQuad:function(t){return t*t},easeOutQuad:function(t){return 1-(1-t)*(1-t)},easeInOutQuad:function(t){return t<.5?2*t*t:1-A(-2*t+2,2)/2},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1-A(1-t,3)},easeInOutCubic:function(t){return t<.5?4*t*t*t:1-A(-2*t+2,3)/2},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1-A(1-t,4)},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-A(-2*t+2,4)/2},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1-A(1-t,5)},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1-A(-2*t+2,5)/2},easeInSine:function(t){return 1-O(t*T/2)},easeOutSine:function(t){return I(t*T/2)},easeInOutSine:function(t){return-(O(T*t)-1)/2},easeInExpo:function(t){return 0===t?0:A(2,10*t-10)},easeOutExpo:function(t){return 1===t?1:1-A(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:t<.5?A(2,20*t-10)/2:(2-A(2,-20*t+10))/2},easeInCirc:function(t){return 1-w(1-A(t,2))},easeOutCirc:function(t){return w(1-A(t-1,2))},easeInOutCirc:function(t){return t<.5?(1-w(1-A(2*t,2)))/2:(w(1-A(-2*t+2,2))+1)/2},easeInBack:function(t){return 2.70158*t*t*t-C*t*t},easeOutBack:function(t){return 1+2.70158*A(t-1,3)+C*A(t-1,2)},easeInOutBack:function(t){return t<.5?A(2*t,2)*(2*(x+1)*t-x)/2:(A(2*t-2,2)*((x+1)*(2*t-2)+x)+2)/2},easeInElastic:function(t){return 0===t?0:1===t?1:-A(2,10*t-10)*I((10*t-10.75)*k)},easeOutElastic:function(t){return 0===t?0:1===t?1:A(2,-10*t)*I((10*t-.75)*k)+1},easeInOutElastic:function(t){return 0===t?0:1===t?1:t<.5?-A(2,20*t-10)*I((20*t-11.125)*S)/2:A(2,-20*t+10)*I((20*t-11.125)*S)/2+1},easeInBounce:function(t){return 1-N(1-t)},easeOutBounce:N,easeInOutBounce:function(t){return t<.5?(1-N(1-2*t))/2:(1+N(2*t-1))/2}};function M(t){return Math.round(100*t)/100}!function(t){t.opacity="opacity",t.scale="scale",t.translate="z"}(g||(y=g={},y));var B=i(".am"),j=s(".c"),D=s(".e"),Q=s(".a",B),q=s(".b",B),R=s(".f",B),z={opacity:i(".ca[data-type=opacity]"),scale:i(".ca[data-type=scale]"),translate:i(".ca[data-type=translate]")};function H(t){n(Q,(function(e){e.innerText=t}))}function P(t){n(q,(function(e){e.innerText=t}))}function W(t){n(R,(function(e){e.innerText=t}))}function K(){n(j,(function(t){return t.hidden=!1})),n(D,(function(t){return t.hidden=!0}))}function U(t){n(j,(function(t){return t.hidden=!0})),n(D,(function(t){return t.hidden=!1})),z.opacity.innerHTML=E(t,g.opacity),z.scale.innerHTML=E(t,g.scale),z.translate.innerHTML=E(t,g.z)}var X=i(".cb");function _(t){X.style.transitionDuration=t+"ms"}function Y(){X.removeAttribute("style"),X.hidden=!0}function G(){X.hidden=!1}function V(t){X.style.height=t.height+"px",X.style.width=t.width+"px",X.style.top=t.top+"px",X.style.left=t.left+"px"}function J(t,e,n){if(7!==t.length||7!==e.length)return"";var a=[],i=[],s=[];return t.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i).forEach((function(t){if(2===t.length){var e=parseInt(t,16);a.push(e)}})),e.match(/#*([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i).forEach((function(t){if(2===t.length){var e=parseInt(t,16);i.push(e)}})),a.forEach((function(t,e){var a=function(t,e,n){return Math.round(n*(e-t)+t)}(t,i[e],n);s.push(a)})),"#"+s.map((function(t){var e=t.toString(16);return 0===e.length?e="00":1===e.length&&(e="0"+e),e})).join("")}var Z=i(".bp");var $=i(".a0"),tt=i(".a1"),et=null;function nt(t,e){"no"===t?et=e:(et=null,tt.style.transitionTimingFunction=t)}function at(){et&&(tt.style.animation="\n\t\t\t\t1s cursor-"+et+" both 0.2s linear\n\t\t\t"),tt.classList.add("a2")}function it(){tt.style.transitionDuration="0s",tt.offsetWidth,et&&(tt.style.animation=null),tt.classList.remove("a2"),tt.style.transitionDuration=null}$.addEventListener("pointerenter",at),$.addEventListener("pointerleave",it),$.addEventListener("mouseenter",at),$.addEventListener("mouseleave",it),$.addEventListener("focus",at),$.addEventListener("blur",it);var st,ot=300,rt=i(".g"),ut=rt.href,ct=i(".w"),lt=i(".am"),dt=i(".au"),ft=i(".ai");t.addEventListener("resize",ht,!1),lt.addEventListener("click",(function(){requestAnimationFrame(ht)}));var vt=t.location.hash.slice(1);function mt(n){var s=e.getElementById("func-"+n);if(s&&st!==n){h(),st=n;var u=s.getAttribute("data-name"),c=s.getAttribute("data-func"),l=s.getAttribute("data-maths"),d=s.getAttribute("data-offset"),f="no"===c?"ease":c;if(u&&c){var v=i(".ax",lt),m=i(".bh",s),p=a(ft);if("top"===d?dt.classList.add("av"):dt.classList.remove("av"),H(u),P(c),W(l),function(t,e){"no"===t?o=e:(o=null,r=t)}(c,u),nt(c,u),"no"!==c){var y=function(t){var e=t.match(/(-*[.\d]+)/g);return e&&4===e.length?[parseFloat(e[0]),parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])]:[]}(c);rt.href=ut+"#"+y.join(","),K(),function(t,e){if(4===e.length&&t in F){for(var n=[],a=0;a<=25;a++){var i=J("#1473e6","#247b5e",F[t](a/25));n.push(i+" "+4*a+"%")}Z.style.display="block",Z.style.backgroundImage="linear-gradient(\n\t\tto bottom,\n\t\t"+n.join(", ")+"\n\t)"}}(u,y)}else U(u),Z.removeAttribute("style");i("path",v).setAttribute("d",m.getAttribute("d")),lt.style.transitionTimingFunction=f,lt.style.display="block",requestAnimationFrame((function(){var e=L(s);_(ot),G(),V({height:e.height,left:e.x,top:e.y,width:e.width}),ft.classList.add("aj"),requestAnimationFrame((function(){var e=L(lt);V({height:e.height+30,left:e.x-15,top:e.y-15,width:e.width+30});var n=L(ct),a=n.height+n.y-15;requestAnimationFrame((function(){t.scrollTo({behavior:"smooth",top:a})}))}))})),setTimeout((function(){lt.classList.add("an")}),ot),setTimeout((function(){ft.style.display="none"}),ot+p)}}}function ht(){if(st){var t=L(lt);_(0),V({height:t.height+30,left:t.x-15,top:t.y-15,width:t.width+30})}}vt&&mt(vt),t.addEventListener("hashchange",(function(){t.getSelection&&t.getSelection().removeAllRanges(),n(s(".b9"),(function(t){t.hasAttribute("open")&&t.removeAttribute("open")}));var i=t.location.hash.slice(1);i?mt(i):function(){t.scrollTo({behavior:"smooth",top:0});var n=e.getElementById("func-"+st),i=a(lt);st=null,ft.removeAttribute("style"),ft.classList.remove("aj"),lt.classList.remove("an"),lt.style.position="absolute",lt.style.top="0px",lt.style.left="0px",lt.style.right="0px",_(ot),setTimeout((function(){lt.removeAttribute("style");var t=L(n);V({height:t.height,left:t.x,top:t.y,width:t.width})}),i),setTimeout(Y,ot+i)}()}),!1),t.addEventListener("keydown",(function(e){"escape"!==e.key.toLowerCase()&&"escape"!==e.code.toLowerCase()||(t.location.hash="")}));var pt=s(".a3"),Lt="a5",yt="a4",gt="be",Et=".a6",bt=".bi";pt&&n(pt,(function(t,e){var a=i(Et,t),s=i(bt,t),o=t.getAttribute("data-name"),r=t.getAttribute("data-func");t.addEventListener("mouseenter",(function(){n(pt,(function(t,n){n!==e&&(t.classList.remove(yt),i(Et,t).classList.remove(gt),i(bt,t).style.animation="")})),t.classList.add(Lt),a.classList.add(gt),"no"===r&&(s.style.animation="1500ms cursor-"+o+" both 0.2s linear")})),t.addEventListener("mouseleave",(function(){t.classList.remove(Lt),a.classList.remove(gt),s.style.animation=""})),a.addEventListener("focus",(function(){n(pt,(function(t,n){n!==e&&(t.classList.remove(yt),i(Et,t).classList.remove(gt),i(bt,t).style.animation="")})),a.classList.add(gt),"no"===r&&(s.style.animation="1500ms cursor-"+o+" both 0.2s linear")})),a.addEventListener("blur",(function(){t.classList.remove(yt,Lt),a.classList.remove(gt),s.style.animation=""})),t.addEventListener("keyup",(function(e){"tab"!==e.key.toLowerCase()&&"tab"!==e.code.toLowerCase()||t.classList.add(yt)})),t.addEventListener("keydown",(function(e){"tab"!==e.key.toLowerCase()&&"tab"!==e.code.toLowerCase()||t.classList.remove(yt)}))}));var At="bu";n(s(".br"),(function(n){n.addEventListener("click",(function(){!function(n){var a=e.createRange();a.selectNode(n),t.getSelection().removeAllRanges(),t.getSelection().addRange(a),e.execCommand("copy"),t.getSelection().removeAllRanges()}(i(".bv",n.parentElement));var a=i(".h",n),s=i(".bt",n);a.classList.add(At),s.classList.remove(At),setTimeout((function(){a.classList.remove(At),s.classList.add(At)}),1500)}))}));var wt=".af",It=i(".af ul"),Ot=s(".af li a, .af li span"),Tt=e.createElement("select");Tt.onchange=function(e){/^\/easings.net/.test(t.location.pathname)?t.location.pathname="/easings.net"+e.target.value:t.location.pathname=e.target.value};var Ct=It.getAttribute("aria-label");Tt.setAttribute("aria-label",Ct),Ot.forEach((function(n){var a=e.createElement("option"),i=n.getAttribute("href");a.value=i||t.location.pathname,a.innerText=n.innerText,"SPAN"===n.tagName&&a.setAttribute("selected","selected"),Tt.appendChild(a)}));var xt=i(wt);xt.appendChild(Tt),xt.removeChild(i(wt+" ul"));var kt=i(".i"),St="is-light",Nt="is-dark",Ft="theme";if("string"==typeof localStorage.getItem(Ft)){var Mt=localStorage.getItem(Ft);kt.value=Mt,Bt(Mt)}function Bt(t){switch(t){case"light":e.documentElement.classList.remove(Nt),e.documentElement.classList.add(St);break;case"dark":e.documentElement.classList.remove(St),e.documentElement.classList.add(Nt);break;default:e.documentElement.classList.remove(St,Nt)}}kt.addEventListener("change",(function(){localStorage.setItem(Ft,kt.value),Bt(kt.value)}))}(window,document);