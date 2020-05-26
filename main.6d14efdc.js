parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uZ4H":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.between=n,exports.clamp=r,exports.cutDec=i,exports.getElementOffset=x,exports.goFetch=y,exports.isArr=p,exports.isDef=a,exports.isFunc=f,exports.isNum=u,exports.isObj=l,exports.isStr=h,exports.lerp=o,exports.mapRange=e,exports.objectDeepClone=m,exports.objectDeepMerge=d,exports.objectValueByPath=g,exports.parseUrl=j,exports.roundDec=s,exports.serializeUrl=M,exports.throttle=c,exports.Uid=exports.Resolver=exports.Range=exports.Browser=void 0;class t{static get uA(){return navigator.userAgent.toLowerCase()}static get pf(){return navigator.platform.toLowerCase()}static get safari(){return/^((?!chrome|android).)*safari/.test(this.uA)}static get safariVersion(){return+(this.uA.match(/version\/[\d\.]+.*safari/)||["-1"])[0].replace(/^version\//,"").replace(/ safari$/,"")}static get firefox(){return this.uA.indexOf("firefox")>-1}static get chrome(){return/chrome/.test(this.uA)}static get ie(){return/msie|trident/.test(this.uA)}static get ieMobile(){return/iemobile/.test(this.uA)}static get webkit(){return/webkit/.test(this.uA)}static get operaMini(){return/opera mini/.test(this.uA)}static get edge(){return/edge\/\d./.test(this.uA)}static get ios(){return/ip(hone|[ao]d)/.test(this.uA)}static get mac(){return this.pf.indexOf("mac")>-1}static get windows(){return this.pf.indexOf("win")>-1}static get android(){return/android/.test(this.uA)}static get androidMobile(){return/android.*mobile/.test(this.uA)}static get blackberry(){return/blackberry/.test(this.uA)}static get mobile(){return this.ieMobile||this.blackberry||this.androidMobile||this.ios||this.operaMini}static get mouseWheelEvent(){return"onmousewheel"in document}static get wheelEvent(){return"onwheel"in document}static get keydownEvent(){return"onkeydown"in document}static get touchDevice(){return"ontouchstart"in window}static get mutationObserver(){return"MutationObserver"in window}static get client(){return"undefined"!=typeof window&&void 0!==window.document}}function e(t,e,r,o,n){return o+(n-o)/(r-e)*(t-e)}function r(t,e,r){return Math.min(Math.max(t,e),r)}function o(t,e,r){return t*(1-r)+e*r}function n(t,e,r){return t>Math.min(e,r)&&t<Math.max(e,r)}function s(t,e){return Number(Math.round(t+"e"+e)+"e-"+e)}function i(t,e){const r=t.toString();return parseFloat(r.substring(0,r.indexOf(".")+1+e))}function c(t,e=0,r){let o,n=0;return(...s)=>{const i=(performance||Date).now();n&&i<n+e?(clearTimeout(o),o=setTimeout(function(){n=i,t.apply(r,s)},e)):(n=i,t.apply(r,s))}}function a(t){return void 0!==typeof t&&void 0!==t}function u(t){return"number"==typeof t}function h(t){return"string"==typeof t}function p(t){return Array.isArray(t)}function l(t){const e=typeof t;return!p(t)&&("object"===e&&null!=t||"function"===e)}function f(t){return"function"==typeof t}function d(t,...e){if(!e.length)return t;const r=e.shift();if(l(t)&&l(r))for(const o in r)l(r[o])?(t[o]||Object.assign(t,{[o]:{}}),d(t[o],r[o])):Object.assign(t,{[o]:r[o]});return d(t,...e)}function m(t){if(l(t)){const e={};for(const r in t)t.hasOwnProperty(r)&&(e[r]=m(t[r]));return e}return t}function g(t,e,r="."){const o=e.split(r);let n=t;for(;o.length>0;){const t=o.shift();if("object"!=typeof n||!t){n=void 0;break}n=n[t]}return n}function x(t){let e=0,r=0;do{e+=t.offsetLeft||0,r+=t.offsetTop||0,t=t.offsetParent}while(t);return{x:e,y:r}}exports.Browser=t;class b{constructor(t,e){this.start=t>e?e:t,this.end=e>t?e:t}mapTo(t,r=0,o=1){return e(t,this.start,this.end,r,o)}}exports.Range=b;class w{constructor(){this._completed=!1,this.promise=new Promise((t,e)=>{this._resolve=t,this._reject=e})}resolve(t){if(this._completed)throw new Error("Can't resolve promise. Already completed");return this._completed=!0,this._resolve(t),this.promise}reject(t){if(this._completed)throw new Error("Can't reject promise. Already completed");return this._completed=!0,this._reject(t),this.promise}get completed(){return this._completed}}exports.Resolver=w;class v{static reset(){this.next=0}static get(t=""){return t+(this.next++).toString(36)}}function y(t,e){const r=new AbortController,o=fetch(t,Object.assign({signal:r.signal},e));return o.controller=r,o}let A;function j(e){if(!t.client)throw new Error("URL needs to be parse on the client side");return A||(A=document.createElement("a")),A.href=e,{protocol:A.protocol,host:A.host,hostname:A.hostname,port:A.port,pathname:A.pathname,search:A.search,hash:A.hash}}function M(t){return`${t.protocol}//${t.host}${t.pathname}${t.search}${t.hash}`}exports.Uid=v,v.next=0;
},{}],"UC2z":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.listenCompose=s,exports.listenEl=e,exports.EventEmitter=void 0;class t{constructor(){this.listeners={},this.emitters=[],this.mutedEvents=[]}emit(t,e,s=(()=>{})){const i="function"==typeof e?e:s;if("string"==typeof t){const n=t;if(!this.isEventMuted(n)){for(let i=0,n=this.emitters.length;i<n;i++)this.emitters[i].emit(t,e,s);if(this.listeners.hasOwnProperty(n))for(let t=0,s=this.listeners[n].length;t<s;t++)i.call(this,this.listeners[n][t].call(this,e!==i?e:void 0))}}else{const e=t,n=Object.keys(e);for(let t=0,r=n.length;t<r;t++){const r=n[t],h=e[r];if(!this.isEventMuted(r)){for(let t=0,e=this.emitters.length;t<e;t++)this.emitters[t].emit(r,h,s);if(this.listeners.hasOwnProperty(r))for(let t=0,e=this.listeners[r].length;t<e;t++)i.call(this,this.listeners[r][t].call(this,h))}}}return this}on(t,e){return this.listeners.hasOwnProperty(t)?this.listeners[t].push(e):this.listeners[t]=[e],()=>this.off(t,e)}off(t,e){const s=this.listeners;if(s.hasOwnProperty(t)){const i=s[t].indexOf(e);i>-1&&s[t].splice(i,1)}}hasEventListeners(t){return this.listeners[t]&&this.listeners[t].length>0}isEventMuted(t){return this.mutedEvents.includes(t)}muteEvents(...t){return t.forEach(t=>{"string"!=typeof t||this.mutedEvents.includes(t)||this.mutedEvents.push(t)}),()=>this.unmuteEvents(...t)}unmuteEvents(...t){t.forEach(t=>{if("string"==typeof t){const e=this.mutedEvents.indexOf(t);e>-1&&this.mutedEvents.splice(e,1)}})}reflectEvents(...t){this.emitters=t}unreflectEvents(){this.emitters=[]}}function e(t,e,s,i){return"string"==typeof e&&(e=[e]),e.forEach(e=>t.addEventListener(e,s,i)),()=>e.forEach(e=>{t.removeEventListener(e,s,i)})}function s(...t){return()=>t.forEach(t=>"function"==typeof t&&t.call(void 0))}exports.EventEmitter=t;
},{}],"fIo0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TickerThread=exports.Ticker=void 0;class t{constructor(t){this.calllback=t,this.dead=!1}update(t,i){this.calllback(t,i,this.kill.bind(this))}kill(){this.dead=!0}}exports.TickerThread=t;class i{constructor(t){this.intervalMs=.06,this.ticking=!1,this.override=!1,this.threads=[],this.lastTime=-1,this.minDeltaMs=0,this.maxDeltaMs=100,t instanceof Array&&2===t.length&&(this.setMinFPS(t[0]),this.setMaxFPS(t[1])),"number"==typeof t&&this.setMaxFPS(t)}static requestAnimationFrame(t){return window.requestAnimationFrame?window.requestAnimationFrame(t):window.setTimeout(t,1e3/60)}static now(){return(window.performance||Date).now()}setMinFPS(t){const i=Math.max(Math.min(t,this.maxFPS),0);return this.maxDeltaMs=1/Math.min(i/1e3,this.intervalMs)}get minFPS(){return 1e3/this.maxDeltaMs}setMaxFPS(t){if(0===t)return this.minDeltaMs=0;const i=Math.max(t,this.minFPS);return this.minDeltaMs=1/(i/1e3)}get maxFPS(){return this.minDeltaMs>0?1e3/this.minDeltaMs:1e3*this.intervalMs}tick(t,e=i.now()){const s=[];for(let i=0,a=this.threads.length;i<a;i++){const a=this.threads[i];a.dead?s.push(a):a.update(t,e)}for(let i=0,a=s.length;i<a;i++)this.buryThread(s[i])}update(t=i.now()){if(t>this.lastTime){let i=t-this.lastTime;if(i>this.maxDeltaMs&&(i=this.maxDeltaMs),this.minDeltaMs&&i+1<this.minDeltaMs)return;this.tick(i*this.intervalMs,t)}this.lastTime=t}animate(){i.requestAnimationFrame(t=>{this.update(t),this.ticking&&!this.override&&this.threads.length>0?this.animate():this.ticking=!1})}kill(){this.threads.forEach(t=>t.kill())}buryThread(t){this.threads.splice(this.threads.indexOf(t),1)}add(e){const s=new t(e);return this.threads.push(s),this.ticking||this.override||(this.lastTime=i.now(),this.ticking=!0,this.animate()),s}}exports.Ticker=i;
},{}],"yC3B":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.elementObserverDefaultConfig=exports.ViewportObserver=exports.ElementState=exports.ElementObserver=void 0;var t=require("@smoovy/utils");class e{constructor(t){this.size={width:0,height:0},this.offset={x:0,y:0},this._destroyed=!1,this.changeListeners=[],this.destroyListeners=[],this.lastSum=0,this.element=t instanceof e?t.element:t}update(t=!1,e=!1){t?setTimeout(()=>this.updateDimensions(e)):this.updateDimensions(e)}onDestroy(t){this.destroyListeners.push(t)}updateDimensions(t){this.updateSize(),this.updateOffset(),(this.hasChanged()||t)&&this.emitChanges()}emitChanges(){for(let t=0,e=this.changeListeners.length;t<e;t++)this.changeListeners[t].call(this,this.size,this.offset)}removeListener(t){this.changeListeners=this.changeListeners.filter(e=>e!==t)}destroy(){this._destroyed=!0;for(let t=0,e=this.destroyListeners.length;t<e;t++)this.destroyListeners[t].call(this);this.changeListeners=[],this.destroyListeners=[]}get destroyed(){return this._destroyed}changed(e,s=0){return s>0&&(e=(0,t.throttle)(e,s)),this.changeListeners.push(e),{remove:()=>this.removeListener(e)}}updateSize(){if(t.Browser.client){const t=this.element.getBoundingClientRect();this.size.width=t.width,this.size.height=t.height}else this.size.width=0,this.size.height=0}updateOffset(){if(t.Browser.client){const e=(0,t.getElementOffset)(this.element);this.offset.x=e.x,this.offset.y=e.y}else this.offset.x=0,this.offset.y=0}hasChanged(){const t=this.offset.x+this.offset.y+this.size.width+this.size.height,e=t!==this.lastSum;return this.lastSum=t,e}inViewport(t,e,s={x:0,y:0}){const i=Object.assign({},this.offset),h={above:i.y+s.y+this.size.height<t.y,below:i.y-s.y>t.y+e.height,left:i.x+s.x+this.size.width<t.x,right:i.x-s.x>t.x+e.width};return Object.assign(Object.assign({},h),{inside:!(h.above||h.below||h.right||h.left)})}}exports.ElementState=e;class s{static changed(e,s=0){return s>0&&(e=(0,t.throttle)(e,s)),this.listeners.push(e),this.checkListeners(),{remove:()=>this.removeListener(e)}}static removeListener(t){const e=this.listeners.indexOf(t);e>-1&&(this.listeners.splice(e,1),this.checkListeners())}static checkListeners(){this.listening=this.listeners.length>0}static set listening(t){t&&!this._listening?this.attach():!t&&this._listening&&this.detach(),this._listening=t}static get attached(){return this._listening}static get state(){return this.stateResolver.promise}static update(e=!1,s=!1){t.Browser.client&&(this._state.width=window.innerWidth,this._state.height=window.innerHeight),this.stateResolver.completed||this.stateResolver.resolve(this._state),s||this.handleResize(e)}static getStateSum(){return this._state.width+this._state.height}static handleResize(t=!1){cancelAnimationFrame(this.lastRafId);const e=this.getStateSum();this.lastRafId=requestAnimationFrame(()=>{if(this.update(),e!==this.getStateSum()||!0===t)for(let t=0,e=this.listeners.length;t<e;t++)this.listeners[t].call(this,this._state)})}static attach(){this.resizeListener||(this.handleResize(),this.resizeListener=(()=>this.handleResize()),t.Browser.client&&window.addEventListener("resize",this.resizeListener,!0))}static detach(){this.resizeListener&&(t.Browser.client&&window.removeEventListener("resize",this.resizeListener,!0),this.resizeListener=void 0)}}exports.ViewportObserver=s,s._listening=!1,s._state={width:0,height:0},s.lastRafId=-1,s.listeners=[],s.stateResolver=new t.Resolver;const i={mutationThrottle:100,viewportThrottle:100,mutators:[{target:t.Browser.client?document.documentElement:void 0,options:{characterData:!0,childList:!0,subtree:!0}}]};exports.elementObserverDefaultConfig=i;class h{constructor(t={}){this.config=t,this.attached=!1,this.states=[]}static observe(t){return this.default.observe(t)}static reset(){return this.default.reset()}observe(t){for(let e=0,s=this.states.length;e<s;e++)if(this.states[e]===t||this.states[e].element===t)return this.states[e];return this.register(t instanceof e?t:new e(t))}register(t){return this.states.push(t),this.checkStates(),t.update(!0),t.onDestroy(()=>this.deregister(t)),t}deregister(t){const e=this.states.indexOf(t);e>-1&&(this.states.splice(e,1),this.checkStates())}reset(){this.states.forEach(t=>this.deregister(t))}updateRaf(){t.Browser.client?(cancelAnimationFrame(this.lastRaf),this.lastRaf=requestAnimationFrame(()=>this.update())):this.update()}update(t=!1){for(let e=0,s=this.states.length;e<s;e++)this.states[e].update(t)}attach(){if(this.attached=!0,this.viewportObserver=s.changed("number"==typeof this.config.viewportThrottle?(0,t.throttle)(()=>this.update(),this.config.viewportThrottle):()=>this.update()),t.Browser.client&&t.Browser.mutationObserver&&this.config.mutators){const e=this.config.mutationThrottle;this.mutationObserver=new MutationObserver("number"==typeof e?(0,t.throttle)(()=>this.updateRaf(),e):()=>this.updateRaf()),this.config.mutators.forEach(t=>{t.target&&this.mutationObserver&&this.mutationObserver.observe(t.target,Object.assign({},t.options))})}let e;t.Browser.client&&document.addEventListener("DOMContentLoaded",e=(()=>{this.updateRaf(),document.removeEventListener("DOMContentLoaded",e)}),!1),this.updateRaf()}detach(){this.attached=!1,this.viewportObserver&&(this.viewportObserver.remove(),this.viewportObserver=void 0),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}checkStates(){this.states.length>0&&!this.attached&&this.attach(),0===this.states.length&&this.attached&&this.detach()}}exports.ElementObserver=h,h.default=new h(i);
},{"@smoovy/utils":"uZ4H"}],"Cmy5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.easingsMap=exports.easingsFlatMap=exports.easings=exports.Tween=void 0;var t=require("@smoovy/ticker");const s={in:(t,s,e,i)=>-e*Math.cos(t/i*(Math.PI/2))+e+s,out:(t,s,e,i)=>e*Math.sin(t/i*(Math.PI/2))+s},e={in:(t,s,e,i)=>0===t?s:e*Math.pow(2,10*(t/i-1))+s,out:(t,s,e,i)=>t===i?s+e:e*(1-Math.pow(2,-10*t/i))+s},i={in:(t,s,e,i)=>-e*(Math.sqrt(1-(t/=i)*t)-1)+s,out:(t,s,e,i)=>e*Math.sqrt(1-(t=t/i-1)*t)+s},a={in:(t,s,e,i)=>e-a.out(i-t,0,e,i)+s,out:(t,s,e,i)=>(t/=i)<1/2.75?e*(7.5625*t*t)+s:t<2/2.75?e*(7.5625*(t-=1.5/2.75)*t+.75)+s:t<2.5/2.75?e*(7.5625*(t-=2.25/2.75)*t+.9375)+s:e*(7.5625*(t-=2.625/2.75)*t+.984375)+s};var r=Object.freeze({__proto__:null,Linear:{none:(t,s,e,i)=>e*t/i+s},Quad:{in:(t,s,e,i)=>e*(t/=i)*t+s,out:(t,s,e,i)=>-e*(t/=i)*(t-2)+s},Cubic:{in:(t,s,e,i)=>e*(t/=i)*t*t+s,out:(t,s,e,i)=>e*((t=t/i-1)*t*t+1)+s},Quart:{in:(t,s,e,i)=>e*(t/=i)*t*t*t+s,out:(t,s,e,i)=>-e*((t=t/i-1)*t*t*t-1)+s},Quint:{in:(t,s,e,i)=>e*(t/=i)*t*t*t*t+s,out:(t,s,e,i)=>e*((t=t/i-1)*t*t*t*t+1)+s},Sine:s,Expo:e,Circ:i,Back:{in:(t,s,e,i,a=1.70158)=>e*(t/=i)*t*((a+1)*t-a)+s,out:(t,s,e,i,a=1.70158)=>e*((t=t/i-1)*t*((a+1)*t+a)+1)+s},Bounce:a});exports.easings=r;class h{constructor(t,s,e){this.target=t,this.values=s,this.options=e,this.registry=h.registry,this.ticker=h.ticker,this.changes={},this.firstTick=!1,this._paused=!1,this._complete=!1,this._passed=0,this.stableTarget=Object.assign({},t),this.createThread()}static fromTo(t,s,e={}){return new h(t,s,e)}get easing(){return this.options.easing||i.out}get duration(){return"number"==typeof this.options.duration?this.options.duration:100}get paused(){return this._paused}get complete(){return this._complete}get passed(){return this._passed}set passed(t){this._passed=Math.min(t,this.duration),this.handleTick(this.currentTarget)}get progress(){return this.passed/this.duration}set progress(t){this.passed=this.duration*t}runCallback(t,...s){this.options.on&&"function"==typeof this.options.on[t]&&this.options.on[t].apply(this,s)}createDelay(s){const e=t.Ticker.now();return this.delay=this.ticker.add((t,i,a)=>{if(this._paused)return;const r=i-e;r>=s?(this.runCallback("delay",s),delete this.delay,a()):this.runCallback("delay",r)})}overwriteTarget(t){const s=this.registry.get(t);s instanceof h&&(s.stop(),this.registry.delete(t),this.runCallback("overwrite"))}createThread(){this.thread&&!this.thread.dead&&this.thread.kill(),this.changes=function(t,s){const e={};for(const i in t)if(t.hasOwnProperty(i)&&s.hasOwnProperty(i)){const a=s[i]-t[i];0!==a&&(e[i]=a)}return e}(this.target,this.values),this.currentTarget=!1===this.options.mutate?Object.assign({},this.target):this.target;const t=0!==Object.keys(this.changes).length;return!1!==this.options.overwrite&&this.overwriteTarget(this.target),this.registry.set(this.target,this),this.firstTick=!0,this._complete=!1,this._passed=0,!0===this.options.paused&&this.pause(),this.delay&&(this.delay.kill(),delete this.delay),"number"==typeof this.options.delay&&(this.runCallback("update",this.currentTarget,this.progress),this.createDelay(this.options.delay)),this.thread=this.ticker.add((s,e,i)=>{this._paused||this.delay||(t?this.passed+=s/h.ticker.intervalMs:i())})}handleTick(t){this.firstTick&&(this.runCallback("start"),this.firstTick=!1),this.passed>=0&&this.processChanges(t,t=>this.easing.call(this,this._passed,this.stableTarget[t],this.changes[t],this.duration)),this._passed>=0&&this._passed>=this.duration&&(this.thread&&!this.thread.dead&&this.thread.kill(),this.processChanges(t,t=>this.values[t]),this.runCallback("complete"),this._complete=!0)}processChanges(t,s){for(const e in this.changes)this.changes.hasOwnProperty(e)&&(t[e]=s(e));this.runCallback("update",t,this.progress)}stop(){return this.thread&&!this.thread.dead&&(this.thread.kill(),this.runCallback("stop")),this}start(){return this._paused&&(this._paused=!1,this.thread&&!this.thread.dead&&this.runCallback("start")),this}pause(){return this._paused||(this._paused=!0,this.thread&&!this.thread.dead&&this.runCallback("pause")),this}reset(){if(!1!==this.options.mutate)for(const t in this.stableTarget)this.stableTarget.hasOwnProperty(t)&&(this.target[t]=this.stableTarget[t]);return this.runCallback("reset"),this.createThread(),this}}exports.Tween=h,h.ticker=new t.Ticker,h.registry=new WeakMap;const n=Object.assign({},r),o={};exports.easingsFlatMap=o,exports.easingsMap=n;for(const p in n)if(n.hasOwnProperty(p))for(const t in n[p])n[p].hasOwnProperty(t)&&(o[`${p}.${t}`]=n[p][t]);
},{"@smoovy/ticker":"fIo0"}],"yzXd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tweenTo=exports.translate=exports.touchInertia=exports.styleContainer=exports.smoothScroll=exports.scrollTo=exports.nativeSmoothScroll=exports.nativeScrollbar=exports.mouseWheel=exports.lerpContent=exports.keyboard=exports.clampContent=exports.bypassNative=exports.bypassFocus=exports.ScrollerEvent=exports.ScrollerDomEvent=exports.ScrollerDom=exports.Scroller=void 0;var e,t,o=require("@smoovy/utils"),i=require("@smoovy/event"),s=require("@smoovy/ticker"),r=require("@smoovy/observer"),n=require("@smoovy/tween");exports.ScrollerEvent=t,exports.ScrollerDomEvent=e,(e||(exports.ScrollerDomEvent=e={})).RECALC="recalc";class a extends i.EventEmitter{constructor(t){super(),this.config=t,this.dynamic=!1,this.dynamic=t.element instanceof HTMLElement,!1!==t.observer&&(this.observer=new r.ElementObserver(t.observer)),this.container=new r.ElementState(this.dynamic?document.createElement("div"):t.element.container),this.wrapper=new r.ElementState(this.dynamic?document.createElement("div"):t.element.wrapper),this.observer&&(this.container=this.observer.observe(this.container),this.wrapper=this.observer.observe(this.wrapper),this.wrapper.changed(()=>this.emit(e.RECALC)),this.container.changed(()=>this.emit(e.RECALC))),this.dynamic&&(this.container.element.className+="smoovy-container",this.wrapper.element.className+="smoovy-wrapper",this.container.element.appendChild(this.wrapper.element))}recalc(e=!1){this.wrapper.update(e),this.container.update(e)}attach(){if(this.dynamic){const e=this.config.element,t=Array.from(e.childNodes);e.appendChild(this.container.element),this.wrapper.element.append(...t)}}detach(){if(this.dynamic){const e=this.config.element,t=Array.from(this.wrapper.element.childNodes);e.append(...t),e.removeChild(this.container.element)}}}exports.ScrollerDom=a,function(e){e.DELTA="delta",e.OUTPUT="output",e.VIRTUAL="virtual",e.RECALC="recalc",e.TWEEN_TO="tween_to",e.SCROLL_TO="scroll_to",e.TRANSFORM_DELTA="~delta",e.TRANSFORM_VIRTUAL="~virtual",e.TRANSFORM_OUTPUT="~output"}(t||(exports.ScrollerEvent=t={}));class l extends i.EventEmitter{constructor(e,t){super(),this.attached=!1,this.locks=[],this.availableBehaviors=new Map,this.attachedBehaviors=new Map,this.position={output:{x:0,y:0},virtual:{x:0,y:0}},this.dom=e instanceof a?e:new a(e instanceof HTMLElement?{element:e}:e);for(const o in t)t.hasOwnProperty(o)&&this.setBehavior(o,t[o]);this.attach()}attach(){this.attached||(this.attached=!0,this.unlisten=(0,i.listenCompose)(this.dom.on(e.RECALC,()=>{this.updateDelta({x:0,y:0}),s.Ticker.requestAnimationFrame(()=>this.emit(t.RECALC))}),this.on(t.DELTA,e=>{this.isLocked()||this.updateDelta(e)})),this.dom.attach(),this.availableBehaviors.forEach((e,t)=>{this.attachBehavior(t)}))}destroy(){this.attached&&(this.attached=!1,"function"==typeof this.unlisten&&(this.unlisten(),delete this.unlisten),this.dom.detach(),this.attachedBehaviors.forEach(e=>{"function"==typeof e&&e.call(this)}))}recalc(e=!1){this.dom.recalc(e),e?s.Ticker.requestAnimationFrame(()=>this.emit(t.RECALC)):this.emit(t.RECALC)}get behaviors(){return this.availableBehaviors}setBehavior(e,t){this.availableBehaviors.set(e,t)}deleteBehavior(e){return this.attachedBehaviors.has(e)&&this.detachBehavior(e),this.availableBehaviors.delete(e)}attachBehavior(e){const t=this.availableBehaviors.get(e);return!(!t||this.attachedBehaviors.get(e)||(this.attachedBehaviors.set(e,t(this)),0))}detachBehavior(e){const t=this.attachedBehaviors.get(e);return!!t&&(t.call(this),this.attachedBehaviors.delete(e),!0)}updateDelta(e){const i=this.position.virtual;this.emit(t.TRANSFORM_DELTA,e,t=>{e.x=t.x,e.y=t.y}),this.updatePosition({x:(0,o.isNum)(e.x)?i.x-e.x:void 0,y:(0,o.isNum)(e.y)?i.y-e.y:void 0})}updatePosition(e){e&&(0,o.isNum)(e.x)&&(this.position.virtual.x=e.x),e&&(0,o.isNum)(e.y)&&(this.position.virtual.y=e.y),this.emit(t.VIRTUAL,this.position.virtual),this.emit(t.TRANSFORM_VIRTUAL,this.position.virtual,e=>{this.position.virtual.x=e.x,this.position.virtual.y=e.y}),this.isEventMuted(t.TRANSFORM_OUTPUT)||!this.hasEventListeners(t.TRANSFORM_OUTPUT)?this.updateOutput(this.position.virtual):this.emit(t.TRANSFORM_OUTPUT,{pos:this.position.output,step:e=>this.updateOutput(e)})}updateOutput(e){this.position.output.x=e.x,this.position.output.y=e.y,this.emit(t.OUTPUT,e)}lock(e="default",t=!0){!this.locks.includes(e)&&t?this.locks.push(e):t||this.unlock(e)}unlock(e="default"){const t=this.locks.indexOf(e);t>-1&&this.locks.splice(t,1)}isLocked(e){return e?this.locks.includes(e):this.locks.length>0}scrollTo(e,o=!1){this.emit(t.SCROLL_TO,{pos:e,skipOutputTransform:o})}tweenTo(e,o={}){this.emit(t.TWEEN_TO,{pos:e,options:o})}onVirtual(e){return this.on(t.VIRTUAL,e)}onScroll(e){return this.on(t.OUTPUT,e)}onDelta(e){return this.on(t.DELTA,e)}}exports.Scroller=l;const c=(e={})=>r=>{const n=e.focusTarget||o.Browser.client?window:void 0,a=r.dom.container.element,l=e.ignoreInside||[];return(0,i.listenCompose)((0,i.listenEl)(a,"scroll",e=>{e.preventDefault(),a.scrollLeft=a.scrollTop=0}),n?(0,i.listenEl)(n,"focus",o=>{s.Ticker.requestAnimationFrame(()=>{const i=o.target;if(i instanceof HTMLElement&&(!l.map(e=>e.contains(i)).includes(!0)&&i&&a.contains(i)||a===i)){const o=i.getBoundingClientRect(),s=r.dom.container.size;if(o.top<=0||o.top>=s.height||o.left<=0||o.right>=s.width)if(e.nativeTarget){const t=r.position.virtual;e.nativeTarget.scrollTo(t.x+o.left-s.width/2,t.y+o.top-s.height/2)}else r.emit(t.DELTA,{y:-o.top+s.height/2,x:-o.left+s.width/2})}})},!0):void 0)};function p(e,t=100,o=250,i=200,s=1/0){const r={x:0,y:0};switch(e.key){case" ":r.y=-i;break;case"ArrowLeft":r.x=t;break;case"ArrowRight":r.x=-t;break;case"ArrowDown":r.y=-t;break;case"ArrowUp":r.y=t;break;case"PageDown":r.y=-o;break;case"PageUp":r.y=o;break;case"Home":r.y=s;break;case"End":r.y=-s}return r}exports.bypassFocus=c;const h={condition:()=>!1},u=(e={})=>{const r=Object.assign(h,e);let a;return a=(e=>{const l=r.target||window,c=[];let h;const u=()=>({x:l===window?l.scrollX:l.scrollLeft,y:l===window?l.scrollY:l.scrollTop}),m=()=>{r.condition()?(e.behaviors.forEach((t,o)=>{t!==a&&(e.detachBehavior(o),c.push(o))}),h=(0,i.listenCompose)((0,i.listenEl)(l,"scroll",()=>{const o=u();e.emit(t.DELTA,{x:e.position.virtual.x-o.x,y:e.position.virtual.y-o.y})}),e.on(t.SCROLL_TO,({pos:e})=>{if((0,o.isNum)(e.x)||(0,o.isNum)(e.y)){const t=u();l.scrollTo((0,o.isNum)(e.x)?e.x:t.x,(0,o.isNum)(e.y)?e.y:t.y)}})),e.on(t.TWEEN_TO,({pos:t,options:o})=>{const s=!!o.force;let r;const a=()=>{r&&!s&&(r.stop(),r=void 0)},l=(0,i.listenCompose)((0,i.listenEl)(window,"touchstart",a),(0,i.listenEl)(window,"wheel",a),(0,i.listenEl)(window,"keydown",e=>{const t=p(e);"Tab"!==e.key&&0===t.x&&0===t.y||a()}));r=n.Tween.fromTo(e.position.virtual,t,{mutate:!1,duration:o.duration,easing:o.easing,on:{update:e=>window.scrollTo(e.x,e.y),complete:l,stop:l}})})):c.length>0&&(h&&(h(),h=void 0),c.forEach(t=>e.attachBehavior(t)),s.Ticker.requestAnimationFrame(()=>e.dom.recalc()))};setTimeout(()=>m()),e.on(t.RECALC,()=>m())})},m=()=>e=>e.on(t.TRANSFORM_VIRTUAL,t=>{const i=e.dom.wrapper.size,s=e.dom.container.size,r=Math.max(i.width-s.width,0),n=Math.max(i.height-s.height,0);return{x:(0,o.clamp)(t.x,0,r),y:(0,o.clamp)(t.y,0,n)}}),d={passive:!1,target:o.Browser.client?document.documentElement:void 0,eventName:"keydown",arrowDelta:100,pageDelta:250,spaceDelta:200,homeEndDelta:1/0},v=(e={})=>{const s=Object.assign(d,e);return r=>{const n=s.target;return o.Browser.wheelEvent?(0,i.listenEl)(n,s.eventName,e=>{const o=p(e,s.arrowDelta,s.pageDelta,s.spaceDelta,s.homeEndDelta);(o.x||o.y)&&r.emit(t.DELTA,o)},{passive:e.passive}):void 0}},y={damping:.1,precision:.009,mobileDamping:.18},x=(e={})=>{const i=Object.assign(y,e);return e=>{let r;const n=i.ticker||new s.Ticker,a=o.Browser.mobile?i.mobileDamping:i.damping,l=e.on(t.TRANSFORM_OUTPUT,({pos:t,step:s})=>{r&&r.kill(),r=n.add((r,n,l)=>{const c=e.position.virtual,p=(0,o.lerp)(t.x,c.x,a),h=(0,o.lerp)(t.y,c.y,a),u=Math.abs(c.x-p),m=Math.abs(c.y-h);u<i.precision&&m<i.precision&&l(),s({x:p,y:h})})});return()=>{l(),n.kill()}}},T={passive:!1,multiplier:1,multiplierFirefox:25},w=(e={})=>{const s=Object.assign(T,e);return r=>{const n=s.target||document.documentElement;return o.Browser.wheelEvent?(0,i.listenEl)(n,"wheel",i=>{const n={x:0,y:0};e.passive||i.preventDefault(),n.x=i.wheelDeltaX||-1*i.deltaX,n.y=i.wheelDeltaY||-1*i.deltaY,n.x*=s.multiplier,n.y*=s.multiplier,o.Browser.firefox&&1===i.deltaMode&&(n.x*=s.multiplierFirefox,n.y*=s.multiplierFirefox),r.emit(t.DELTA,n)},{passive:s.passive}):void 0}},g=(e={})=>o=>o.on(t.SCROLL_TO,i=>{let r;i.skipOutputTransform&&(r=o.muteEvents(t.TRANSFORM_OUTPUT));const n=o.position.virtual;if(e.nativeTarget){const t={};"number"==typeof i.pos.x&&(t.left=i.pos.x),"number"==typeof i.pos.y&&(t.top=i.pos.y),e.nativeTarget.scrollTo(Object.assign({behavior:e.nativeBehavior||"smooth"},t))}else{const e={};"number"==typeof i.pos.x&&(e.x=-(i.pos.x-n.x)),"number"==typeof i.pos.y&&(e.y=-(i.pos.y-n.y)),o.updateDelta(e)}s.Ticker.requestAnimationFrame(()=>{r&&r()})}),f={defaults:{width:"100%",height:"100%",overflow:"hidden"}},E=(e={})=>{const t=(0,o.objectDeepMerge)(f,e);return e=>{const o=e.dom.container.element;for(const i in t.defaults)t.defaults.hasOwnProperty(i)&&(o.style[i]=t.defaults[i]);return()=>{for(const e in t.defaults)t.defaults.hasOwnProperty(e)&&(o.style[e]="")}}},b={passive:!1,deltaMultiplier:1,velocityDamping:.08,velocityMultiplier:20,minimumThreshold:2},O=(e={})=>{const r=Object.assign(b,e);return e=>{const n=document.documentElement,a=r.target||n,l=new s.Ticker,c={x:0,y:0},p={x:0,y:0},h=r.minimumThreshold;let u=0,m=!1;const d=e=>e.targetTouches?e.targetTouches[0]:e;return(0,i.listenCompose)((0,i.listenEl)(a,"touchstart",e=>{l.kill();const t=d(e);c.x=t.pageX,c.y=t.pageY,m=!0},{passive:r.passive}),(0,i.listenEl)(n,"touchend",()=>{m&&(0===p.x&&0===p.y||l.add((i,s,n)=>{p.x=(0,o.lerp)(p.x,0,r.velocityDamping),p.y=(0,o.lerp)(p.y,0,r.velocityDamping),e.emit(t.DELTA,p),(0,o.between)(p.x,h,-h)&&(0,o.between)(p.y,h,-h)&&(p.x=0,p.y=0,n())})),m=!1},{passive:r.passive}),(0,i.listenEl)(n,"touchmove",o=>{if(m){o.preventDefault();const i={x:0,y:0},n=d(o);i.x=(n.pageX-c.x)*r.deltaMultiplier,i.y=(n.pageY-c.y)*r.deltaMultiplier;const a=s.Ticker.now()-u;p.x=(c.x-n.pageX)/a,p.y=(c.y-n.pageY)/a,p.x*=-1*r.velocityMultiplier,p.y*=-1*r.velocityMultiplier,c.x=n.pageX,c.y=n.pageY,u=s.Ticker.now(),e.emit(t.DELTA,i)}},{passive:r.passive}))}},A={firefoxFix:!0,initialStyles:!0,precision:2},C=(e,t=0,o=0,i=!1)=>{let s=`translate3d(${-t}px, ${-o}px, 0)`;i&&(s+=" rotate3d(0.01, 0.01, 0.01, 0.01deg)"),e.style.transform=s},D=(e={})=>{const i=Object.assign(A,e),s=i.firefoxFix&&o.Browser.firefox;return e=>{const r=e.dom.wrapper.element,n=e.on(t.OUTPUT,e=>{const t=(0,o.cutDec)(e.x,i.precision),n=(0,o.cutDec)(e.y,i.precision);C(r,t,n,s)});return i.initialStyles&&C(r,0,0,s),()=>{r.style.transform="",n()}}},L=(e={})=>o=>{let s;return o.on(t.TWEEN_TO,({pos:r,options:a})=>{const l=!!a.force,c=(0,i.listenCompose)(void 0===e.nativeTarget?(0,i.listenCompose)(o.on(t.DELTA,()=>{s&&!l&&s.stop()}),o.muteEvents(t.TRANSFORM_OUTPUT,l&&t.DELTA)):(0,i.listenEl)(e.nativeTarget,e.nativeKillEvents||["wheel","touchmove"],()=>{s&&!l&&s.stop()}));s&&s.stop(),s=n.Tween.fromTo(o.position.virtual,r,{mutate:!1,duration:a.duration,easing:a.easing,on:{update:t=>{e.nativeTarget?e.nativeTarget.scrollTo(t.x,t.y):o.updateDelta({x:o.position.virtual.x-t.x,y:o.position.virtual.y-t.y})},stop:()=>{c(),s=void 0},complete:()=>{c(),s=void 0}}})})},R={target:o.Browser.client?window:void 0},k=(e={})=>{const o=Object.assign(R,e);return e=>{const s=document.createElement("div"),r=e.dom.container.element.parentElement,n=()=>{s.style.height=`${e.dom.wrapper.size.height}px`};return n(),r&&r.append(s),(0,i.listenCompose)(()=>s.remove(),o.target?(0,i.listenEl)(o.target,"scroll",()=>e.emit(t.DELTA,{x:e.position.virtual.x-window.scrollX,y:e.position.virtual.y-window.scrollY})):void 0,e.on(t.RECALC,n))}},S=(e,t={})=>new l(e,Object.assign({clampContent:m(),tweenTo:L(),scrollTo:g(),bypassFocus:c(t.focus),styleContainer:E({defaults:t.styles}),touchInertia:O(t.touch),lerpContent:x(t.lerp),mouseWheel:w(t.mouse),translate:D(t.translate),keyboard:v(t.keyboard)},t.behaviors||{})),B=(e,t={})=>new l(e,Object.assign({clampContent:m(),nativeScrollbar:k(t.scrollbar),lerpContent:x(t.lerp),bypassNative:u(Object.assign({condition:()=>o.Browser.mobile},t.native)),translate:D(t.translate),tweenTo:L(Object.assign({nativeTarget:o.Browser.client?window:void 0},t.tweenTo)),scrollTo:g(Object.assign({nativeTarget:o.Browser.client?window:void 0},t.scrollTo)),bypassFocus:c(Object.assign({nativeTarget:o.Browser.client?window:void 0},t.focus)),styleContainer:E({defaults:Object.assign({position:"fixed",left:"0px",top:"0px",width:"100%",height:"100%"},t.styles)})},t.behaviors||{}));exports.nativeSmoothScroll=B,exports.smoothScroll=S,exports.nativeScrollbar=k,exports.tweenTo=L,exports.translate=D,exports.touchInertia=O,exports.styleContainer=E,exports.scrollTo=g,exports.mouseWheel=w,exports.lerpContent=x,exports.keyboard=v,exports.clampContent=m,exports.bypassNative=u;
},{"@smoovy/utils":"uZ4H","@smoovy/event":"UC2z","@smoovy/ticker":"fIo0","@smoovy/observer":"yC3B","@smoovy/tween":"Cmy5"}],"epB2":[function(require,module,exports) {
"use strict";var o=require("@smoovy/scroller");window.onload=function(){console.log("Spirit ~ Siddharth S.");var r=document.querySelector(".scroll-wrapper");(0,o.nativeSmoothScroll)({element:r})};
},{"@smoovy/scroller":"yzXd"}]},{},["epB2"], null)
//# sourceMappingURL=main.6d14efdc.js.map