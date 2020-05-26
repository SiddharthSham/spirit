// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@smoovy/utils/dist/bundles/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.between = i;
exports.clamp = r;
exports.cutDec = s;
exports.getElementOffset = w;
exports.goFetch = v;
exports.isArr = f;
exports.isDef = a;
exports.isFunc = d;
exports.isNum = u;
exports.isObj = l;
exports.isStr = h;
exports.lerp = n;
exports.mapRange = e;
exports.objectDeepClone = p;
exports.objectDeepMerge = m;
exports.objectValueByPath = g;
exports.parseUrl = M;
exports.roundDec = o;
exports.serializeUrl = O;
exports.throttle = c;
exports.Uid = exports.Resolver = exports.Range = exports.Browser = void 0;

class t {
  static get uA() {
    return navigator.userAgent.toLowerCase();
  }

  static get pf() {
    return navigator.platform.toLowerCase();
  }

  static get safari() {
    return /^((?!chrome|android).)*safari/.test(this.uA);
  }

  static get safariVersion() {
    return +(this.uA.match(/version\/[\d\.]+.*safari/) || ["-1"])[0].replace(/^version\//, "").replace(/ safari$/, "");
  }

  static get firefox() {
    return this.uA.indexOf("firefox") > -1;
  }

  static get chrome() {
    return /chrome/.test(this.uA);
  }

  static get ie() {
    return /msie|trident/.test(this.uA);
  }

  static get ieMobile() {
    return /iemobile/.test(this.uA);
  }

  static get webkit() {
    return /webkit/.test(this.uA);
  }

  static get operaMini() {
    return /opera mini/.test(this.uA);
  }

  static get edge() {
    return /edge\/\d./.test(this.uA);
  }

  static get ios() {
    return /ip(hone|[ao]d)/.test(this.uA);
  }

  static get mac() {
    return this.pf.indexOf("mac") > -1;
  }

  static get windows() {
    return this.pf.indexOf("win") > -1;
  }

  static get android() {
    return /android/.test(this.uA);
  }

  static get androidMobile() {
    return /android.*mobile/.test(this.uA);
  }

  static get blackberry() {
    return /blackberry/.test(this.uA);
  }

  static get mobile() {
    return this.ieMobile || this.blackberry || this.androidMobile || this.ios || this.operaMini;
  }

  static get mouseWheelEvent() {
    return "onmousewheel" in document;
  }

  static get wheelEvent() {
    return "onwheel" in document;
  }

  static get keydownEvent() {
    return "onkeydown" in document;
  }

  static get touchDevice() {
    return "ontouchstart" in window;
  }

  static get mutationObserver() {
    return "MutationObserver" in window;
  }

  static get client() {
    return "undefined" != typeof window && void 0 !== window.document;
  }

}

exports.Browser = t;

function e(t, e, r, n, i) {
  return n + (i - n) / (r - e) * (t - e);
}

function r(t, e, r) {
  return Math.min(Math.max(t, e), r);
}

function n(t, e, r) {
  return t * (1 - r) + e * r;
}

function i(t, e, r) {
  return t > Math.min(e, r) && t < Math.max(e, r);
}

function o(t, e) {
  return Number(Math.round(t + "e" + e) + "e-" + e);
}

function s(t, e) {
  const r = t.toString();
  return parseFloat(r.substring(0, r.indexOf(".") + 1 + e));
}

function c(t, e = 0, r) {
  let n,
      i = 0;
  return (...o) => {
    const s = (performance || Date).now();
    i && s < i + e ? (clearTimeout(n), n = setTimeout(function () {
      i = s, t.apply(r, o);
    }, e)) : (i = s, t.apply(r, o));
  };
}

function a(t) {
  return void 0 !== typeof t && void 0 !== t;
}

function u(t) {
  return "number" == typeof t;
}

function h(t) {
  return "string" == typeof t;
}

function f(t) {
  return Array.isArray(t);
}

function l(t) {
  const e = typeof t;
  return !f(t) && ("object" === e && null != t || "function" === e);
}

function d(t) {
  return "function" == typeof t;
}

function m(t, ...e) {
  if (!e.length) return t;
  const r = e.shift();
  if (l(t) && l(r)) for (const e in r) l(r[e]) ? (t[e] || Object.assign(t, {
    [e]: {}
  }), m(t[e], r[e])) : Object.assign(t, {
    [e]: r[e]
  });
  return m(t, ...e);
}

function p(t) {
  if (l(t)) {
    const e = {};

    for (const r in t) t.hasOwnProperty(r) && (e[r] = p(t[r]));

    return e;
  }

  return t;
}

function g(t, e, r = ".") {
  const n = e.split(r);
  let i = t;

  for (; n.length > 0;) {
    const t = n.shift();

    if ("object" != typeof i || !t) {
      i = void 0;
      break;
    }

    i = i[t];
  }

  return i;
}

function w(t) {
  let e = 0,
      r = 0;

  do {
    e += t.offsetLeft || 0, r += t.offsetTop || 0, t = t.offsetParent;
  } while (t);

  return {
    x: e,
    y: r
  };
}

class b {
  constructor(t, e) {
    this.start = t > e ? e : t, this.end = e > t ? e : t;
  }

  mapTo(t, r = 0, n = 1) {
    return e(t, this.start, this.end, r, n);
  }

}

exports.Range = b;

class y {
  constructor() {
    this._completed = !1, this.promise = new Promise((t, e) => {
      this._resolve = t, this._reject = e;
    });
  }

  resolve(t) {
    if (this._completed) throw new Error("Can't resolve promise. Already completed");
    return this._completed = !0, this._resolve(t), this.promise;
  }

  reject(t) {
    if (this._completed) throw new Error("Can't reject promise. Already completed");
    return this._completed = !0, this._reject(t), this.promise;
  }

  get completed() {
    return this._completed;
  }

}

exports.Resolver = y;

class A {
  static reset() {
    this.next = 0;
  }

  static get(t = "") {
    return t + (this.next++).toString(36);
  }

}

exports.Uid = A;

function v(t, e) {
  const r = new AbortController(),
        n = fetch(t, Object.assign({
    signal: r.signal
  }, e));
  return n.controller = r, n;
}

let x;

function M(e) {
  if (!t.client) throw new Error("URL needs to be parse on the client side");
  return x || (x = document.createElement("a")), x.href = e, {
    protocol: x.protocol,
    host: x.host,
    hostname: x.hostname,
    port: x.port,
    pathname: x.pathname,
    search: x.search,
    hash: x.hash
  };
}

function O(t) {
  return `${t.protocol}//${t.host}${t.pathname}${t.search}${t.hash}`;
}

A.next = 0;
},{}],"node_modules/@smoovy/event/dist/bundles/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listenCompose = s;
exports.listenEl = e;
exports.EventEmitter = void 0;

class t {
  constructor() {
    this.listeners = {}, this.emitters = [], this.mutedEvents = [];
  }

  emit(t, e, s = () => {}) {
    const i = "function" == typeof e ? e : s;

    if ("string" == typeof t) {
      const n = t;

      if (!this.isEventMuted(n)) {
        for (let i = 0, n = this.emitters.length; i < n; i++) this.emitters[i].emit(t, e, s);

        if (this.listeners.hasOwnProperty(n)) for (let t = 0, s = this.listeners[n].length; t < s; t++) i.call(this, this.listeners[n][t].call(this, e !== i ? e : void 0));
      }
    } else {
      const e = t,
            n = Object.keys(e);

      for (let t = 0, r = n.length; t < r; t++) {
        const r = n[t],
              h = e[r];

        if (!this.isEventMuted(r)) {
          for (let t = 0, e = this.emitters.length; t < e; t++) this.emitters[t].emit(r, h, s);

          if (this.listeners.hasOwnProperty(r)) for (let t = 0, e = this.listeners[r].length; t < e; t++) i.call(this, this.listeners[r][t].call(this, h));
        }
      }
    }

    return this;
  }

  on(t, e) {
    return this.listeners.hasOwnProperty(t) ? this.listeners[t].push(e) : this.listeners[t] = [e], () => this.off(t, e);
  }

  off(t, e) {
    const s = this.listeners;

    if (s.hasOwnProperty(t)) {
      const i = s[t].indexOf(e);
      i > -1 && s[t].splice(i, 1);
    }
  }

  hasEventListeners(t) {
    return this.listeners[t] && this.listeners[t].length > 0;
  }

  isEventMuted(t) {
    return this.mutedEvents.includes(t);
  }

  muteEvents(...t) {
    return t.forEach(t => {
      "string" != typeof t || this.mutedEvents.includes(t) || this.mutedEvents.push(t);
    }), () => this.unmuteEvents(...t);
  }

  unmuteEvents(...t) {
    t.forEach(t => {
      if ("string" == typeof t) {
        const e = this.mutedEvents.indexOf(t);
        e > -1 && this.mutedEvents.splice(e, 1);
      }
    });
  }

  reflectEvents(...t) {
    this.emitters = t;
  }

  unreflectEvents() {
    this.emitters = [];
  }

}

exports.EventEmitter = t;

function e(t, e, s, i) {
  return "string" == typeof e && (e = [e]), e.forEach(e => t.addEventListener(e, s, i)), () => e.forEach(e => {
    t.removeEventListener(e, s, i);
  });
}

function s(...t) {
  return () => t.forEach(t => "function" == typeof t && t.call(void 0));
}
},{}],"node_modules/@smoovy/ticker/dist/bundles/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TickerThread = exports.Ticker = void 0;

class t {
  constructor(t) {
    this.calllback = t, this.dead = !1;
  }

  update(t, i) {
    this.calllback(t, i, this.kill.bind(this));
  }

  kill() {
    this.dead = !0;
  }

}

exports.TickerThread = t;

class i {
  constructor(t) {
    this.intervalMs = .06, this.ticking = !1, this.override = !1, this.threads = [], this.lastTime = -1, this.minDeltaMs = 0, this.maxDeltaMs = 100, t instanceof Array && 2 === t.length && (this.setMinFPS(t[0]), this.setMaxFPS(t[1])), "number" == typeof t && this.setMaxFPS(t);
  }

  static requestAnimationFrame(t) {
    return window.requestAnimationFrame ? window.requestAnimationFrame(t) : window.setTimeout(t, 1e3 / 60);
  }

  static now() {
    return (window.performance || Date).now();
  }

  setMinFPS(t) {
    const i = Math.max(Math.min(t, this.maxFPS), 0);
    return this.maxDeltaMs = 1 / Math.min(i / 1e3, this.intervalMs);
  }

  get minFPS() {
    return 1e3 / this.maxDeltaMs;
  }

  setMaxFPS(t) {
    if (0 === t) return this.minDeltaMs = 0;
    const i = Math.max(t, this.minFPS);
    return this.minDeltaMs = 1 / (i / 1e3);
  }

  get maxFPS() {
    return this.minDeltaMs > 0 ? 1e3 / this.minDeltaMs : 1e3 * this.intervalMs;
  }

  tick(t, s = i.now()) {
    const e = [];

    for (let i = 0, a = this.threads.length; i < a; i++) {
      const a = this.threads[i];
      a.dead ? e.push(a) : a.update(t, s);
    }

    for (let t = 0, i = e.length; t < i; t++) this.buryThread(e[t]);
  }

  update(t = i.now()) {
    if (t > this.lastTime) {
      let i = t - this.lastTime;
      if (i > this.maxDeltaMs && (i = this.maxDeltaMs), this.minDeltaMs && i + 1 < this.minDeltaMs) return;
      this.tick(i * this.intervalMs, t);
    }

    this.lastTime = t;
  }

  animate() {
    i.requestAnimationFrame(t => {
      this.update(t), this.ticking && !this.override && this.threads.length > 0 ? this.animate() : this.ticking = !1;
    });
  }

  kill() {
    this.threads.forEach(t => t.kill());
  }

  buryThread(t) {
    this.threads.splice(this.threads.indexOf(t), 1);
  }

  add(s) {
    const e = new t(s);
    return this.threads.push(e), this.ticking || this.override || (this.lastTime = i.now(), this.ticking = !0, this.animate()), e;
  }

}

exports.Ticker = i;
},{}],"node_modules/@smoovy/observer/dist/bundles/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementObserverDefaultConfig = exports.ViewportObserver = exports.ElementState = exports.ElementObserver = void 0;

var _utils = require("@smoovy/utils");

class h {
  constructor(t) {
    this.size = {
      width: 0,
      height: 0
    }, this.offset = {
      x: 0,
      y: 0
    }, this._destroyed = !1, this.changeListeners = [], this.destroyListeners = [], this.lastSum = 0, this.element = t instanceof h ? t.element : t;
  }

  update(t = !1, e = !1) {
    t ? setTimeout(() => this.updateDimensions(e)) : this.updateDimensions(e);
  }

  onDestroy(t) {
    this.destroyListeners.push(t);
  }

  updateDimensions(t) {
    this.updateSize(), this.updateOffset(), (this.hasChanged() || t) && this.emitChanges();
  }

  emitChanges() {
    for (let t = 0, e = this.changeListeners.length; t < e; t++) this.changeListeners[t].call(this, this.size, this.offset);
  }

  removeListener(t) {
    this.changeListeners = this.changeListeners.filter(e => e !== t);
  }

  destroy() {
    this._destroyed = !0;

    for (let t = 0, e = this.destroyListeners.length; t < e; t++) this.destroyListeners[t].call(this);

    this.changeListeners = [], this.destroyListeners = [];
  }

  get destroyed() {
    return this._destroyed;
  }

  changed(e, s = 0) {
    return s > 0 && (e = (0, _utils.throttle)(e, s)), this.changeListeners.push(e), {
      remove: () => this.removeListener(e)
    };
  }

  updateSize() {
    if (_utils.Browser.client) {
      const t = this.element.getBoundingClientRect();
      this.size.width = t.width, this.size.height = t.height;
    } else this.size.width = 0, this.size.height = 0;
  }

  updateOffset() {
    if (_utils.Browser.client) {
      const t = (0, _utils.getElementOffset)(this.element);
      this.offset.x = t.x, this.offset.y = t.y;
    } else this.offset.x = 0, this.offset.y = 0;
  }

  hasChanged() {
    const t = this.offset.x + this.offset.y + this.size.width + this.size.height,
          e = t !== this.lastSum;
    return this.lastSum = t, e;
  }

  inViewport(t, e, s = {
    x: 0,
    y: 0
  }) {
    const i = Object.assign({}, this.offset),
          h = {
      above: i.y + s.y + this.size.height < t.y,
      below: i.y - s.y > t.y + e.height,
      left: i.x + s.x + this.size.width < t.x,
      right: i.x - s.x > t.x + e.width
    };
    return Object.assign(Object.assign({}, h), {
      inside: !(h.above || h.below || h.right || h.left)
    });
  }

}

exports.ElementState = h;

class n {
  static changed(e, s = 0) {
    return s > 0 && (e = (0, _utils.throttle)(e, s)), this.listeners.push(e), this.checkListeners(), {
      remove: () => this.removeListener(e)
    };
  }

  static removeListener(t) {
    const e = this.listeners.indexOf(t);
    e > -1 && (this.listeners.splice(e, 1), this.checkListeners());
  }

  static checkListeners() {
    this.listening = this.listeners.length > 0;
  }

  static set listening(t) {
    t && !this._listening ? this.attach() : !t && this._listening && this.detach(), this._listening = t;
  }

  static get attached() {
    return this._listening;
  }

  static get state() {
    return this.stateResolver.promise;
  }

  static update(t = !1, s = !1) {
    _utils.Browser.client && (this._state.width = window.innerWidth, this._state.height = window.innerHeight), this.stateResolver.completed || this.stateResolver.resolve(this._state), s || this.handleResize(t);
  }

  static getStateSum() {
    return this._state.width + this._state.height;
  }

  static handleResize(t = !1) {
    cancelAnimationFrame(this.lastRafId);
    const e = this.getStateSum();
    this.lastRafId = requestAnimationFrame(() => {
      if (this.update(), e !== this.getStateSum() || !0 === t) for (let t = 0, e = this.listeners.length; t < e; t++) this.listeners[t].call(this, this._state);
    });
  }

  static attach() {
    this.resizeListener || (this.handleResize(), this.resizeListener = () => this.handleResize(), _utils.Browser.client && window.addEventListener("resize", this.resizeListener, !0));
  }

  static detach() {
    this.resizeListener && (_utils.Browser.client && window.removeEventListener("resize", this.resizeListener, !0), this.resizeListener = void 0);
  }

}

exports.ViewportObserver = n;
n._listening = !1, n._state = {
  width: 0,
  height: 0
}, n.lastRafId = -1, n.listeners = [], n.stateResolver = new _utils.Resolver();
const r = {
  mutationThrottle: 100,
  viewportThrottle: 100,
  mutators: [{
    target: _utils.Browser.client ? document.documentElement : void 0,
    options: {
      characterData: !0,
      childList: !0,
      subtree: !0
    }
  }]
};
exports.elementObserverDefaultConfig = r;

class a {
  constructor(t = {}) {
    this.config = t, this.attached = !1, this.states = [];
  }

  static observe(t) {
    return this.default.observe(t);
  }

  static reset() {
    return this.default.reset();
  }

  observe(t) {
    for (let e = 0, s = this.states.length; e < s; e++) if (this.states[e] === t || this.states[e].element === t) return this.states[e];

    return this.register(t instanceof h ? t : new h(t));
  }

  register(t) {
    return this.states.push(t), this.checkStates(), t.update(!0), t.onDestroy(() => this.deregister(t)), t;
  }

  deregister(t) {
    const e = this.states.indexOf(t);
    e > -1 && (this.states.splice(e, 1), this.checkStates());
  }

  reset() {
    this.states.forEach(t => this.deregister(t));
  }

  updateRaf() {
    _utils.Browser.client ? (cancelAnimationFrame(this.lastRaf), this.lastRaf = requestAnimationFrame(() => this.update())) : this.update();
  }

  update(t = !1) {
    for (let e = 0, s = this.states.length; e < s; e++) this.states[e].update(t);
  }

  attach() {
    if (this.attached = !0, this.viewportObserver = n.changed("number" == typeof this.config.viewportThrottle ? (0, _utils.throttle)(() => this.update(), this.config.viewportThrottle) : () => this.update()), _utils.Browser.client && _utils.Browser.mutationObserver && this.config.mutators) {
      const e = this.config.mutationThrottle;
      this.mutationObserver = new MutationObserver("number" == typeof e ? (0, _utils.throttle)(() => this.updateRaf(), e) : () => this.updateRaf()), this.config.mutators.forEach(t => {
        t.target && this.mutationObserver && this.mutationObserver.observe(t.target, Object.assign({}, t.options));
      });
    }

    let s;
    _utils.Browser.client && document.addEventListener("DOMContentLoaded", s = () => {
      this.updateRaf(), document.removeEventListener("DOMContentLoaded", s);
    }, !1), this.updateRaf();
  }

  detach() {
    this.attached = !1, this.viewportObserver && (this.viewportObserver.remove(), this.viewportObserver = void 0), this.mutationObserver && (this.mutationObserver.disconnect(), this.mutationObserver = void 0);
  }

  checkStates() {
    this.states.length > 0 && !this.attached && this.attach(), 0 === this.states.length && this.attached && this.detach();
  }

}

exports.ElementObserver = a;
a.default = new a(r);
},{"@smoovy/utils":"node_modules/@smoovy/utils/dist/bundles/index.esm.js"}],"node_modules/@smoovy/tween/dist/bundles/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.easingsMap = exports.easingsFlatMap = exports.easings = exports.Tween = void 0;

var _ticker = require("@smoovy/ticker");

const s = {
  in: (t, s, e, i) => -e * Math.cos(t / i * (Math.PI / 2)) + e + s,
  out: (t, s, e, i) => e * Math.sin(t / i * (Math.PI / 2)) + s
},
      e = {
  in: (t, s, e, i) => 0 === t ? s : e * Math.pow(2, 10 * (t / i - 1)) + s,
  out: (t, s, e, i) => t === i ? s + e : e * (1 - Math.pow(2, -10 * t / i)) + s
},
      i = {
  in: (t, s, e, i) => -e * (Math.sqrt(1 - (t /= i) * t) - 1) + s,
  out: (t, s, e, i) => e * Math.sqrt(1 - (t = t / i - 1) * t) + s
},
      a = {
  in: (t, s, e, i) => e - a.out(i - t, 0, e, i) + s,
  out: (t, s, e, i) => (t /= i) < 1 / 2.75 ? e * (7.5625 * t * t) + s : t < 2 / 2.75 ? e * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + s : t < 2.5 / 2.75 ? e * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + s : e * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + s
};
var r = Object.freeze({
  __proto__: null,
  Linear: {
    none: (t, s, e, i) => e * t / i + s
  },
  Quad: {
    in: (t, s, e, i) => e * (t /= i) * t + s,
    out: (t, s, e, i) => -e * (t /= i) * (t - 2) + s
  },
  Cubic: {
    in: (t, s, e, i) => e * (t /= i) * t * t + s,
    out: (t, s, e, i) => e * ((t = t / i - 1) * t * t + 1) + s
  },
  Quart: {
    in: (t, s, e, i) => e * (t /= i) * t * t * t + s,
    out: (t, s, e, i) => -e * ((t = t / i - 1) * t * t * t - 1) + s
  },
  Quint: {
    in: (t, s, e, i) => e * (t /= i) * t * t * t * t + s,
    out: (t, s, e, i) => e * ((t = t / i - 1) * t * t * t * t + 1) + s
  },
  Sine: s,
  Expo: e,
  Circ: i,
  Back: {
    in: (t, s, e, i, a = 1.70158) => e * (t /= i) * t * ((a + 1) * t - a) + s,
    out: (t, s, e, i, a = 1.70158) => e * ((t = t / i - 1) * t * ((a + 1) * t + a) + 1) + s
  },
  Bounce: a
});
exports.easings = r;

class h {
  constructor(t, s, e) {
    this.target = t, this.values = s, this.options = e, this.registry = h.registry, this.ticker = h.ticker, this.changes = {}, this.firstTick = !1, this._paused = !1, this._complete = !1, this._passed = 0, this.stableTarget = Object.assign({}, t), this.createThread();
  }

  static fromTo(t, s, e = {}) {
    return new h(t, s, e);
  }

  get easing() {
    return this.options.easing || i.out;
  }

  get duration() {
    return "number" == typeof this.options.duration ? this.options.duration : 100;
  }

  get paused() {
    return this._paused;
  }

  get complete() {
    return this._complete;
  }

  get passed() {
    return this._passed;
  }

  set passed(t) {
    this._passed = Math.min(t, this.duration), this.handleTick(this.currentTarget);
  }

  get progress() {
    return this.passed / this.duration;
  }

  set progress(t) {
    this.passed = this.duration * t;
  }

  runCallback(t, ...s) {
    this.options.on && "function" == typeof this.options.on[t] && this.options.on[t].apply(this, s);
  }

  createDelay(s) {
    const e = _ticker.Ticker.now();

    return this.delay = this.ticker.add((t, i, a) => {
      if (this._paused) return;
      const r = i - e;
      r >= s ? (this.runCallback("delay", s), delete this.delay, a()) : this.runCallback("delay", r);
    });
  }

  overwriteTarget(t) {
    const s = this.registry.get(t);
    s instanceof h && (s.stop(), this.registry.delete(t), this.runCallback("overwrite"));
  }

  createThread() {
    this.thread && !this.thread.dead && this.thread.kill(), this.changes = function (t, s) {
      const e = {};

      for (const i in t) if (t.hasOwnProperty(i) && s.hasOwnProperty(i)) {
        const a = s[i] - t[i];
        0 !== a && (e[i] = a);
      }

      return e;
    }(this.target, this.values), this.currentTarget = !1 === this.options.mutate ? Object.assign({}, this.target) : this.target;
    const t = 0 !== Object.keys(this.changes).length;
    return !1 !== this.options.overwrite && this.overwriteTarget(this.target), this.registry.set(this.target, this), this.firstTick = !0, this._complete = !1, this._passed = 0, !0 === this.options.paused && this.pause(), this.delay && (this.delay.kill(), delete this.delay), "number" == typeof this.options.delay && (this.runCallback("update", this.currentTarget, this.progress), this.createDelay(this.options.delay)), this.thread = this.ticker.add((s, e, i) => {
      this._paused || this.delay || (t ? this.passed += s / h.ticker.intervalMs : i());
    });
  }

  handleTick(t) {
    this.firstTick && (this.runCallback("start"), this.firstTick = !1), this.passed >= 0 && this.processChanges(t, t => this.easing.call(this, this._passed, this.stableTarget[t], this.changes[t], this.duration)), this._passed >= 0 && this._passed >= this.duration && (this.thread && !this.thread.dead && this.thread.kill(), this.processChanges(t, t => this.values[t]), this.runCallback("complete"), this._complete = !0);
  }

  processChanges(t, s) {
    for (const e in this.changes) this.changes.hasOwnProperty(e) && (t[e] = s(e));

    this.runCallback("update", t, this.progress);
  }

  stop() {
    return this.thread && !this.thread.dead && (this.thread.kill(), this.runCallback("stop")), this;
  }

  start() {
    return this._paused && (this._paused = !1, this.thread && !this.thread.dead && this.runCallback("start")), this;
  }

  pause() {
    return this._paused || (this._paused = !0, this.thread && !this.thread.dead && this.runCallback("pause")), this;
  }

  reset() {
    if (!1 !== this.options.mutate) for (const t in this.stableTarget) this.stableTarget.hasOwnProperty(t) && (this.target[t] = this.stableTarget[t]);
    return this.runCallback("reset"), this.createThread(), this;
  }

}

exports.Tween = h;
h.ticker = new _ticker.Ticker(), h.registry = new WeakMap();
const n = Object.assign({}, r),
      o = {};
exports.easingsFlatMap = o;
exports.easingsMap = n;

for (const t in n) if (n.hasOwnProperty(t)) for (const s in n[t]) n[t].hasOwnProperty(s) && (o[`${t}.${s}`] = n[t][s]);
},{"@smoovy/ticker":"node_modules/@smoovy/ticker/dist/bundles/index.esm.js"}],"node_modules/@smoovy/scroller/dist/bundles/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tweenTo = exports.translate = exports.touchInertia = exports.styleContainer = exports.smoothScroll = exports.scrollTo = exports.nativeSmoothScroll = exports.nativeScrollbar = exports.mouseWheel = exports.lerpContent = exports.keyboard = exports.clampContent = exports.bypassNative = exports.bypassFocus = exports.ScrollerEvent = exports.ScrollerDomEvent = exports.ScrollerDom = exports.Scroller = void 0;

var _utils = require("@smoovy/utils");

var _event = require("@smoovy/event");

var _ticker = require("@smoovy/ticker");

var _observer = require("@smoovy/observer");

var _tween = require("@smoovy/tween");

var m, v;
exports.ScrollerEvent = v;
exports.ScrollerDomEvent = m;
!function (t) {
  t.RECALC = "recalc";
}(m || (exports.ScrollerDomEvent = m = {}));

class y extends _event.EventEmitter {
  constructor(t) {
    super(), this.config = t, this.dynamic = !1, this.dynamic = t.element instanceof HTMLElement, !1 !== t.observer && (this.observer = new _observer.ElementObserver(t.observer)), this.container = new _observer.ElementState(this.dynamic ? document.createElement("div") : t.element.container), this.wrapper = new _observer.ElementState(this.dynamic ? document.createElement("div") : t.element.wrapper), this.observer && (this.container = this.observer.observe(this.container), this.wrapper = this.observer.observe(this.wrapper), this.wrapper.changed(() => this.emit(m.RECALC)), this.container.changed(() => this.emit(m.RECALC))), this.dynamic && (this.container.element.className += "smoovy-container", this.wrapper.element.className += "smoovy-wrapper", this.container.element.appendChild(this.wrapper.element));
  }

  recalc(t = !1) {
    this.wrapper.update(t), this.container.update(t);
  }

  attach() {
    if (this.dynamic) {
      const t = this.config.element,
            e = Array.from(t.childNodes);
      t.appendChild(this.container.element), this.wrapper.element.append(...e);
    }
  }

  detach() {
    if (this.dynamic) {
      const t = this.config.element,
            e = Array.from(this.wrapper.element.childNodes);
      t.append(...e), t.removeChild(this.container.element);
    }
  }

}

exports.ScrollerDom = y;
!function (t) {
  t.DELTA = "delta", t.OUTPUT = "output", t.VIRTUAL = "virtual", t.RECALC = "recalc", t.TWEEN_TO = "tween_to", t.SCROLL_TO = "scroll_to", t.TRANSFORM_DELTA = "~delta", t.TRANSFORM_VIRTUAL = "~virtual", t.TRANSFORM_OUTPUT = "~output";
}(v || (exports.ScrollerEvent = v = {}));

class T extends _event.EventEmitter {
  constructor(t, e) {
    super(), this.attached = !1, this.locks = [], this.availableBehaviors = new Map(), this.attachedBehaviors = new Map(), this.position = {
      output: {
        x: 0,
        y: 0
      },
      virtual: {
        x: 0,
        y: 0
      }
    }, this.dom = t instanceof y ? t : new y(t instanceof HTMLElement ? {
      element: t
    } : t);

    for (const t in e) e.hasOwnProperty(t) && this.setBehavior(t, e[t]);

    this.attach();
  }

  attach() {
    this.attached || (this.attached = !0, this.unlisten = (0, _event.listenCompose)(this.dom.on(m.RECALC, () => {
      this.updateDelta({
        x: 0,
        y: 0
      }), _ticker.Ticker.requestAnimationFrame(() => this.emit(v.RECALC));
    }), this.on(v.DELTA, t => {
      this.isLocked() || this.updateDelta(t);
    })), this.dom.attach(), this.availableBehaviors.forEach((t, e) => {
      this.attachBehavior(e);
    }));
  }

  destroy() {
    this.attached && (this.attached = !1, "function" == typeof this.unlisten && (this.unlisten(), delete this.unlisten), this.dom.detach(), this.attachedBehaviors.forEach(t => {
      "function" == typeof t && t.call(this);
    }));
  }

  recalc(t = !1) {
    this.dom.recalc(t), t ? _ticker.Ticker.requestAnimationFrame(() => this.emit(v.RECALC)) : this.emit(v.RECALC);
  }

  get behaviors() {
    return this.availableBehaviors;
  }

  setBehavior(t, e) {
    this.availableBehaviors.set(t, e);
  }

  deleteBehavior(t) {
    return this.attachedBehaviors.has(t) && this.detachBehavior(t), this.availableBehaviors.delete(t);
  }

  attachBehavior(t) {
    const e = this.availableBehaviors.get(t);
    return !(!e || this.attachedBehaviors.get(t) || (this.attachedBehaviors.set(t, e(this)), 0));
  }

  detachBehavior(t) {
    const e = this.attachedBehaviors.get(t);
    return !!e && (e.call(this), this.attachedBehaviors.delete(t), !0);
  }

  updateDelta(e) {
    const i = this.position.virtual;
    this.emit(v.TRANSFORM_DELTA, e, t => {
      e.x = t.x, e.y = t.y;
    }), this.updatePosition({
      x: (0, _utils.isNum)(e.x) ? i.x - e.x : void 0,
      y: (0, _utils.isNum)(e.y) ? i.y - e.y : void 0
    });
  }

  updatePosition(e) {
    e && (0, _utils.isNum)(e.x) && (this.position.virtual.x = e.x), e && (0, _utils.isNum)(e.y) && (this.position.virtual.y = e.y), this.emit(v.VIRTUAL, this.position.virtual), this.emit(v.TRANSFORM_VIRTUAL, this.position.virtual, t => {
      this.position.virtual.x = t.x, this.position.virtual.y = t.y;
    }), this.isEventMuted(v.TRANSFORM_OUTPUT) || !this.hasEventListeners(v.TRANSFORM_OUTPUT) ? this.updateOutput(this.position.virtual) : this.emit(v.TRANSFORM_OUTPUT, {
      pos: this.position.output,
      step: t => this.updateOutput(t)
    });
  }

  updateOutput(t) {
    this.position.output.x = t.x, this.position.output.y = t.y, this.emit(v.OUTPUT, t);
  }

  lock(t = "default", e = !0) {
    !this.locks.includes(t) && e ? this.locks.push(t) : e || this.unlock(t);
  }

  unlock(t = "default") {
    const e = this.locks.indexOf(t);
    e > -1 && this.locks.splice(e, 1);
  }

  isLocked(t) {
    return t ? this.locks.includes(t) : this.locks.length > 0;
  }

  scrollTo(t, e = !1) {
    this.emit(v.SCROLL_TO, {
      pos: t,
      skipOutputTransform: e
    });
  }

  tweenTo(t, e = {}) {
    this.emit(v.TWEEN_TO, {
      pos: t,
      options: e
    });
  }

  onVirtual(t) {
    return this.on(v.VIRTUAL, t);
  }

  onScroll(t) {
    return this.on(v.OUTPUT, t);
  }

  onDelta(t) {
    return this.on(v.DELTA, t);
  }

}

exports.Scroller = T;

const x = (t = {}) => i => {
  const o = t.focusTarget || _utils.Browser.client ? window : void 0,
        s = i.dom.container.element,
        a = t.ignoreInside || [];
  return (0, _event.listenCompose)((0, _event.listenEl)(s, "scroll", t => {
    t.preventDefault(), s.scrollLeft = s.scrollTop = 0;
  }), o ? (0, _event.listenEl)(o, "focus", e => {
    _ticker.Ticker.requestAnimationFrame(() => {
      const o = e.target;

      if (o instanceof HTMLElement && (!a.map(t => t.contains(o)).includes(!0) && o && s.contains(o) || s === o)) {
        const e = o.getBoundingClientRect(),
              s = i.dom.container.size;
        if (e.top <= 0 || e.top >= s.height || e.left <= 0 || e.right >= s.width) if (t.nativeTarget) {
          const o = i.position.virtual;
          t.nativeTarget.scrollTo(o.x + e.left - s.width / 2, o.y + e.top - s.height / 2);
        } else i.emit(v.DELTA, {
          y: -e.top + s.height / 2,
          x: -e.left + s.width / 2
        });
      }
    });
  }, !0) : void 0);
};

exports.bypassFocus = x;

function w(t, e = 100, i = 250, o = 200, s = 1 / 0) {
  const a = {
    x: 0,
    y: 0
  };

  switch (t.key) {
    case " ":
      a.y = -o;
      break;

    case "ArrowLeft":
      a.x = e;
      break;

    case "ArrowRight":
      a.x = -e;
      break;

    case "ArrowDown":
      a.y = -e;
      break;

    case "ArrowUp":
      a.y = e;
      break;

    case "PageDown":
      a.y = -i;
      break;

    case "PageUp":
      a.y = i;
      break;

    case "Home":
      a.y = s;
      break;

    case "End":
      a.y = -s;
  }

  return a;
}

const f = {
  condition: () => !1
},
      g = (e = {}) => {
  const i = Object.assign(f, e);
  let o;
  return o = e => {
    const s = i.target || window,
          a = [];
    let n;

    const r = () => ({
      x: s === window ? s.scrollX : s.scrollLeft,
      y: s === window ? s.scrollY : s.scrollTop
    }),
          p = () => {
      i.condition() ? (e.behaviors.forEach((t, i) => {
        t !== o && (e.detachBehavior(i), a.push(i));
      }), n = (0, _event.listenCompose)((0, _event.listenEl)(s, "scroll", () => {
        const t = r();
        e.emit(v.DELTA, {
          x: e.position.virtual.x - t.x,
          y: e.position.virtual.y - t.y
        });
      }), e.on(v.SCROLL_TO, ({
        pos: e
      }) => {
        if ((0, _utils.isNum)(e.x) || (0, _utils.isNum)(e.y)) {
          const i = r();
          s.scrollTo((0, _utils.isNum)(e.x) ? e.x : i.x, (0, _utils.isNum)(e.y) ? e.y : i.y);
        }
      })), e.on(v.TWEEN_TO, ({
        pos: t,
        options: i
      }) => {
        const o = !!i.force;
        let s;

        const a = () => {
          s && !o && (s.stop(), s = void 0);
        },
              n = (0, _event.listenCompose)((0, _event.listenEl)(window, "touchstart", a), (0, _event.listenEl)(window, "wheel", a), (0, _event.listenEl)(window, "keydown", t => {
          const e = w(t);
          "Tab" !== t.key && 0 === e.x && 0 === e.y || a();
        }));

        s = _tween.Tween.fromTo(e.position.virtual, t, {
          mutate: !1,
          duration: i.duration,
          easing: i.easing,
          on: {
            update: t => window.scrollTo(t.x, t.y),
            complete: n,
            stop: n
          }
        });
      })) : a.length > 0 && (n && (n(), n = void 0), a.forEach(t => e.attachBehavior(t)), _ticker.Ticker.requestAnimationFrame(() => e.dom.recalc()));
    };

    setTimeout(() => p()), e.on(v.RECALC, () => p());
  };
},
      b = () => t => t.on(v.TRANSFORM_VIRTUAL, e => {
  const o = t.dom.wrapper.size,
        s = t.dom.container.size,
        a = Math.max(o.width - s.width, 0),
        n = Math.max(o.height - s.height, 0);
  return {
    x: (0, _utils.clamp)(e.x, 0, a),
    y: (0, _utils.clamp)(e.y, 0, n)
  };
}),
      O = {
  passive: !1,
  target: _utils.Browser.client ? document.documentElement : void 0,
  eventName: "keydown",
  arrowDelta: 100,
  pageDelta: 250,
  spaceDelta: 200,
  homeEndDelta: 1 / 0
},
      E = (t = {}) => {
  const i = Object.assign(O, t);
  return o => {
    const s = i.target;
    return _utils.Browser.wheelEvent ? (0, _event.listenEl)(s, i.eventName, t => {
      const e = w(t, i.arrowDelta, i.pageDelta, i.spaceDelta, i.homeEndDelta);
      (e.x || e.y) && o.emit(v.DELTA, e);
    }, {
      passive: t.passive
    }) : void 0;
  };
},
      A = {
  damping: .1,
  precision: .009,
  mobileDamping: .18
},
      L = (t = {}) => {
  const i = Object.assign(A, t);
  return t => {
    let s;
    const a = i.ticker || new _ticker.Ticker(),
          n = _utils.Browser.mobile ? i.mobileDamping : i.damping,
          r = t.on(v.TRANSFORM_OUTPUT, ({
      pos: e,
      step: r
    }) => {
      s && s.kill(), s = a.add((s, a, l) => {
        const c = t.position.virtual,
              h = (0, _utils.lerp)(e.x, c.x, n),
              p = (0, _utils.lerp)(e.y, c.y, n),
              u = Math.abs(c.x - h),
              d = Math.abs(c.y - p);
        u < i.precision && d < i.precision && l(), r({
          x: h,
          y: p
        });
      });
    });
    return () => {
      r(), a.kill();
    };
  };
},
      R = {
  passive: !1,
  multiplier: 1,
  multiplierFirefox: 25
},
      D = (t = {}) => {
  const i = Object.assign(R, t);
  return o => {
    const s = i.target || document.documentElement;
    return _utils.Browser.wheelEvent ? (0, _event.listenEl)(s, "wheel", s => {
      const a = {
        x: 0,
        y: 0
      };
      t.passive || s.preventDefault(), a.x = s.wheelDeltaX || -1 * s.deltaX, a.y = s.wheelDeltaY || -1 * s.deltaY, a.x *= i.multiplier, a.y *= i.multiplier, _utils.Browser.firefox && 1 === s.deltaMode && (a.x *= i.multiplierFirefox, a.y *= i.multiplierFirefox), o.emit(v.DELTA, a);
    }, {
      passive: i.passive
    }) : void 0;
  };
},
      C = (t = {}) => e => e.on(v.SCROLL_TO, i => {
  let o;
  i.skipOutputTransform && (o = e.muteEvents(v.TRANSFORM_OUTPUT));
  const s = e.position.virtual;

  if (t.nativeTarget) {
    const e = {};
    "number" == typeof i.pos.x && (e.left = i.pos.x), "number" == typeof i.pos.y && (e.top = i.pos.y), t.nativeTarget.scrollTo(Object.assign({
      behavior: t.nativeBehavior || "smooth"
    }, e));
  } else {
    const t = {};
    "number" == typeof i.pos.x && (t.x = -(i.pos.x - s.x)), "number" == typeof i.pos.y && (t.y = -(i.pos.y - s.y)), e.updateDelta(t);
  }

  _ticker.Ticker.requestAnimationFrame(() => {
    o && o();
  });
}),
      k = {
  defaults: {
    width: "100%",
    height: "100%",
    overflow: "hidden"
  }
},
      U = (t = {}) => {
  const e = (0, _utils.objectDeepMerge)(k, t);
  return t => {
    const i = t.dom.container.element;

    for (const t in e.defaults) e.defaults.hasOwnProperty(t) && (i.style[t] = e.defaults[t]);

    return () => {
      for (const t in e.defaults) e.defaults.hasOwnProperty(t) && (i.style[t] = "");
    };
  };
},
      M = {
  passive: !1,
  deltaMultiplier: 1,
  velocityDamping: .08,
  velocityMultiplier: 20,
  minimumThreshold: 2
},
      F = (t = {}) => {
  const e = Object.assign(M, t);
  return t => {
    const i = document.documentElement,
          s = e.target || i,
          n = new _ticker.Ticker(),
          r = {
      x: 0,
      y: 0
    },
          p = {
      x: 0,
      y: 0
    },
          u = e.minimumThreshold;
    let d = 0,
        m = !1;

    const y = t => t.targetTouches ? t.targetTouches[0] : t;

    return (0, _event.listenCompose)((0, _event.listenEl)(s, "touchstart", t => {
      n.kill();
      const e = y(t);
      r.x = e.pageX, r.y = e.pageY, m = !0;
    }, {
      passive: e.passive
    }), (0, _event.listenEl)(i, "touchend", () => {
      m && (0 === p.x && 0 === p.y || n.add((i, s, n) => {
        p.x = (0, _utils.lerp)(p.x, 0, e.velocityDamping), p.y = (0, _utils.lerp)(p.y, 0, e.velocityDamping), t.emit(v.DELTA, p), (0, _utils.between)(p.x, u, -u) && (0, _utils.between)(p.y, u, -u) && (p.x = 0, p.y = 0, n());
      })), m = !1;
    }, {
      passive: e.passive
    }), (0, _event.listenEl)(i, "touchmove", i => {
      if (m) {
        i.preventDefault();
        const o = {
          x: 0,
          y: 0
        },
              s = y(i);
        o.x = (s.pageX - r.x) * e.deltaMultiplier, o.y = (s.pageY - r.y) * e.deltaMultiplier;
        const a = _ticker.Ticker.now() - d;
        p.x = (r.x - s.pageX) / a, p.y = (r.y - s.pageY) / a, p.x *= -1 * e.velocityMultiplier, p.y *= -1 * e.velocityMultiplier, r.x = s.pageX, r.y = s.pageY, d = _ticker.Ticker.now(), t.emit(v.DELTA, o);
      }
    }, {
      passive: e.passive
    }));
  };
},
      B = {
  firefoxFix: !0,
  initialStyles: !0,
  precision: 2
},
      N = (t, e = 0, i = 0, o = !1) => {
  let s = `translate3d(${-e}px, ${-i}px, 0)`;
  o && (s += " rotate3d(0.01, 0.01, 0.01, 0.01deg)"), t.style.transform = s;
},
      _ = (t = {}) => {
  const i = Object.assign(B, t),
        o = i.firefoxFix && _utils.Browser.firefox;
  return t => {
    const e = t.dom.wrapper.element,
          s = t.on(v.OUTPUT, t => {
      const s = (0, _utils.cutDec)(t.x, i.precision),
            a = (0, _utils.cutDec)(t.y, i.precision);
      N(e, s, a, o);
    });
    return i.initialStyles && N(e, 0, 0, o), () => {
      e.style.transform = "", s();
    };
  };
},
      S = (t = {}) => e => {
  let i;
  return e.on(v.TWEEN_TO, ({
    pos: o,
    options: s
  }) => {
    const a = !!s.force,
          n = (0, _event.listenCompose)(void 0 === t.nativeTarget ? (0, _event.listenCompose)(e.on(v.DELTA, () => {
      i && !a && i.stop();
    }), e.muteEvents(v.TRANSFORM_OUTPUT, a && v.DELTA)) : (0, _event.listenEl)(t.nativeTarget, t.nativeKillEvents || ["wheel", "touchmove"], () => {
      i && !a && i.stop();
    }));
    i && i.stop(), i = _tween.Tween.fromTo(e.position.virtual, o, {
      mutate: !1,
      duration: s.duration,
      easing: s.easing,
      on: {
        update: i => {
          t.nativeTarget ? t.nativeTarget.scrollTo(i.x, i.y) : e.updateDelta({
            x: e.position.virtual.x - i.x,
            y: e.position.virtual.y - i.y
          });
        },
        stop: () => {
          n(), i = void 0;
        },
        complete: () => {
          n(), i = void 0;
        }
      }
    });
  });
},
      P = {
  target: _utils.Browser.client ? window : void 0
},
      j = (t = {}) => {
  const e = Object.assign(P, t);
  return t => {
    const i = document.createElement("div"),
          o = t.dom.container.element.parentElement,
          s = () => {
      i.style.height = `${t.dom.wrapper.size.height}px`;
    };

    return s(), o && o.append(i), (0, _event.listenCompose)(() => i.remove(), e.target ? (0, _event.listenEl)(e.target, "scroll", () => t.emit(v.DELTA, {
      x: t.position.virtual.x - window.scrollX,
      y: t.position.virtual.y - window.scrollY
    })) : void 0, t.on(v.RECALC, s));
  };
},
      I = (t, e = {}) => new T(t, Object.assign({
  clampContent: b(),
  tweenTo: S(),
  scrollTo: C(),
  bypassFocus: x(e.focus),
  styleContainer: U({
    defaults: e.styles
  }),
  touchInertia: F(e.touch),
  lerpContent: L(e.lerp),
  mouseWheel: D(e.mouse),
  translate: _(e.translate),
  keyboard: E(e.keyboard)
}, e.behaviors || {})),
      X = (t, i = {}) => new T(t, Object.assign({
  clampContent: b(),
  nativeScrollbar: j(i.scrollbar),
  lerpContent: L(i.lerp),
  bypassNative: g(Object.assign({
    condition: () => _utils.Browser.mobile
  }, i.native)),
  translate: _(i.translate),
  tweenTo: S(Object.assign({
    nativeTarget: _utils.Browser.client ? window : void 0
  }, i.tweenTo)),
  scrollTo: C(Object.assign({
    nativeTarget: _utils.Browser.client ? window : void 0
  }, i.scrollTo)),
  bypassFocus: x(Object.assign({
    nativeTarget: _utils.Browser.client ? window : void 0
  }, i.focus)),
  styleContainer: U({
    defaults: Object.assign({
      position: "fixed",
      left: "0px",
      top: "0px",
      width: "100%",
      height: "100%"
    }, i.styles)
  })
}, i.behaviors || {}));

exports.nativeSmoothScroll = X;
exports.smoothScroll = I;
exports.nativeScrollbar = j;
exports.tweenTo = S;
exports.translate = _;
exports.touchInertia = F;
exports.styleContainer = U;
exports.scrollTo = C;
exports.mouseWheel = D;
exports.lerpContent = L;
exports.keyboard = E;
exports.clampContent = b;
exports.bypassNative = g;
},{"@smoovy/utils":"node_modules/@smoovy/utils/dist/bundles/index.esm.js","@smoovy/event":"node_modules/@smoovy/event/dist/bundles/index.esm.js","@smoovy/ticker":"node_modules/@smoovy/ticker/dist/bundles/index.esm.js","@smoovy/observer":"node_modules/@smoovy/observer/dist/bundles/index.esm.js","@smoovy/tween":"node_modules/@smoovy/tween/dist/bundles/index.esm.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _scroller = require("@smoovy/scroller");

window.onload = function () {
  console.log('Spirit ~ Siddharth S.');
  var mainEl = document.querySelector('.scroll-wrapper');
  var scroller = (0, _scroller.nativeSmoothScroll)({
    element: mainEl
  });
};
},{"@smoovy/scroller":"node_modules/@smoovy/scroller/dist/bundles/index.esm.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54312" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map