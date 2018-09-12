webpackJsonp([72],{

/***/ 1402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRippleEffect", function() { return RippleEffect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chunk_770a6cdb_js__ = __webpack_require__(1427);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var RippleEffect=function(){function e(){this.lastClick=-1e4,this.tapClick=!1}return e.prototype.tapClickChanged=function(e){this.enableListener(this,"parent:ionActivated",e),this.enableListener(this,"touchstart",!e),this.enableListener(this,"mousedown",!e)},e.prototype.ionActivated=function(e){this.addRipple(e.detail.x,e.detail.y)},e.prototype.touchStart=function(e){this.lastClick=Object(__WEBPACK_IMPORTED_MODULE_0__chunk_770a6cdb_js__["a"])(e);var t=e.touches[0];this.addRipple(t.clientX,t.clientY)},e.prototype.mouseDown=function(e){var t=Object(__WEBPACK_IMPORTED_MODULE_0__chunk_770a6cdb_js__["a"])(e);this.lastClick<t-1e3&&this.addRipple(e.pageX,e.pageY)},e.prototype.componentDidLoad=function(){this.tapClickChanged(this.tapClick)},e.prototype.addRipple=function(e,t){var i,n,o,a=this;this.queue.read(function(){var r=a.el.getBoundingClientRect(),c=r.width,p=r.height;o=Math.min(2*Math.sqrt(c*c+p*p),MAX_RIPPLE_DIAMETER),i=e-r.left-o/2,n=t-r.top-o/2}),this.queue.write(function(){var e=a.doc.createElement("div");e.classList.add("ripple-effect");var t=e.style,r=Math.max(RIPPLE_FACTOR*Math.sqrt(o),MIN_RIPPLE_DURATION);t.top=n+"px",t.left=i+"px",t.width=o+"px",t.height=o+"px",t.animationDuration=r+"ms",a.el.appendChild(e),setTimeout(function(){return e.remove()},r+50)})},Object.defineProperty(e,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{addRipple:{method:!0},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},queue:{context:"queue"},tapClick:{type:Boolean,attr:"tap-click",watchCallbacks:["tapClickChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"parent:ionActivated",method:"ionActivated",disabled:!0},{name:"touchstart",method:"touchStart",disabled:!0,passive:!0},{name:"mousedown",method:"mouseDown",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-ripple-effect{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict}.ripple-effect{border-radius:50%;position:absolute;background-color:var(--ion-ripple-background-color,#000);opacity:0;will-change:transform,opacity;pointer-events:none;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;contain:strict}\@-webkit-keyframes rippleAnimation{0%{opacity:.2;-webkit-transform:scale(.1);transform:scale(.1)}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}\@keyframes rippleAnimation{0%{opacity:.2;-webkit-transform:scale(.1);transform:scale(.1)}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}"},enumerable:!0,configurable:!0}),e}(),RIPPLE_FACTOR=35,MIN_RIPPLE_DURATION=260,MAX_RIPPLE_DIAMETER=550;

/***/ }),

/***/ 1427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deferEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clamp; });
/* unused harmony export d */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return pointerCoord; });
function clamp(e, n, t) { return Math.max(e, Math.min(n, t)); }
function assert(e, n) { if (!e) {
    var e_1 = "ASSERT: " + n;
    throw console.error(e_1), new Error(e_1);
} }
function now(e) { return e.timeStamp || Date.now(); }
function pointerCoord(e) { if (e) {
    var n = e.changedTouches;
    if (n && n.length > 0) {
        var e_2 = n[0];
        return { x: e_2.clientX, y: e_2.clientY };
    }
    if (void 0 !== e.pageX)
        return { x: e.pageX, y: e.pageY };
} return { x: 0, y: 0 }; }
function isEndSide(e, n) { var t = "rtl" === e.document.dir; switch (n) {
    case "start": return t;
    case "end": return !t;
    default: throw new Error("\"" + n + "\" is not a valid value for [side]. Use \"start\" or \"end\" instead.");
} }
function deferEvent(e) { return debounceEvent(e, 0); }
function debounceEvent(e, n) { var t = e._original || e; return { _original: e, emit: debounce(t.emit.bind(t), n) }; }
function debounce(e, n) {
    if (n === void 0) { n = 0; }
    var t;
    return function () {
        var r = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            r[_i] = arguments[_i];
        }
        clearTimeout(t), t = setTimeout.apply(void 0, [e, n].concat(r));
    };
}



/***/ })

});
//# sourceMappingURL=72.js.map