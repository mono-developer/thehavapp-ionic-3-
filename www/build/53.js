webpackJsonp([53],{

/***/ 1403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRouterOutlet", function() { return RouterOutlet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_core_js__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chunk_50b4bfc6_js__ = __webpack_require__(1433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chunk_ab2696b0_js__ = __webpack_require__(1430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chunk_c311c162_js__ = __webpack_require__(1429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chunk_fe7f197d_js__ = __webpack_require__(1431);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,a){function r(t){try{s(i.next(t))}catch(t){a(t)}}function c(t){try{s(i.throw(t))}catch(t){a(t)}}function s(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(r,c)}s((i=i.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var n,i,o,a,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=i[2&a[0]?"return":a[0]?"throw":"next"])&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[0,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,i=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){r=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(6===a[0]&&r.label<o[1]){r.label=o[1],o=a;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(a);break}o[2]&&r.ops.pop(),r.trys.pop();continue}a=e.call(t,r)}catch(t){a=[6,t],i=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};var RouterOutlet=function(){function t(){this.isTransitioning=!1}return t.prototype.componentWillLoad=function(){void 0===this.animated&&(this.animated=this.config.getBoolean("animate",!0)),this.ionNavWillLoad.emit()},t.prototype.componentDidUnload=function(){this.activeEl=this.activeComponent=void 0},t.prototype.setRoot=function(t,e,n){return __awaiter(this,void 0,void 0,function(){var i,o;return __generator(this,function(a){switch(a.label){case 0:return this.isTransitioning||this.activeComponent===t?[2,!1]:(this.activeComponent=t,[4,Object(__WEBPACK_IMPORTED_MODULE_2__chunk_ab2696b0_js__["a"])(this.delegate,this.el,t,["ion-page","hide-page"],e)]);case 1:return i=a.sent(),o=this.activeEl,[4,this.commit(i,o,n)];case 2:return a.sent(),this.activeEl=i,Object(__WEBPACK_IMPORTED_MODULE_2__chunk_ab2696b0_js__["b"])(this.delegate,o),[2,!0]}})})},t.prototype.commit=function(t,e,n){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(i){switch(i.label){case 0:return this.isTransitioning||e===t?[2,!1]:(this.isTransitioning=!0,this.ionNavWillChange.emit(),n=n||{},[4,Object(__WEBPACK_IMPORTED_MODULE_4__chunk_fe7f197d_js__["b"])(Object.assign({mode:this.mode,animated:this.animated,animationCtrl:this.animationCtrl,window:this.win,enteringEl:t,leavingEl:e,baseEl:this.el},n))]);case 1:return i.sent(),this.isTransitioning=!1,this.ionNavDidChange.emit(),[2,!0]}})})},t.prototype.setRouteId=function(t,e,n){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(i){switch(i.label){case 0:return[4,this.setRoot(t,e,{duration:0===n?0:void 0,direction:-1===n?"back":"forward"})];case 1:return[2,{changed:i.sent(),element:this.activeEl}]}})})},t.prototype.getRouteId=function(){var t=this.activeEl;return t?{id:t.tagName,element:t}:void 0},t.prototype.render=function(){return["ios"===this.mode&&Object(__WEBPACK_IMPORTED_MODULE_0__ionic_core_js__["b" /* h */])("div",{class:"nav-decor"}),Object(__WEBPACK_IMPORTED_MODULE_0__ionic_core_js__["b" /* h */])("slot",null)]},Object.defineProperty(t,"is",{get:function(){return"ion-router-outlet"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated",mutable:!0},animationBuilder:{type:"Any",attr:"animation-builder"},animationCtrl:{connect:"ion-animation-controller"},commit:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getRouteId:{method:!0},setRoot:{method:!0},setRouteId:{method:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}();

/***/ }),

/***/ 1429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticSelection; });
function hapticSelection() { var n = window.TapticEngine; n && n.selection(); }
function hapticSelectionStart() { var n = window.TapticEngine; n && n.gestureSelectionStart(); }
function hapticSelectionChanged() { var n = window.TapticEngine; n && n.gestureSelectionChanged(); }
function hapticSelectionEnd() { var n = window.TapticEngine; n && n.gestureSelectionEnd(); }



/***/ }),

/***/ 1430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detachComponent; });
function attachComponent(e, o, n, t, r) { if (e)
    return e.attachViewToDom(o, n, r, t); if ("string" != typeof n && !(n instanceof HTMLElement))
    throw new Error("framework delegate is missing"); var a = "string" == typeof n ? o.ownerDocument.createElement(n) : n; return t && t.forEach(function (e) { return a.classList.add(e); }), r && Object.assign(a, r), o.appendChild(a), a.componentOnReady ? a.componentOnReady() : Promise.resolve(a); }
function detachComponent(e, o) { if (o) {
    if (e) {
        var n = o.parentElement;
        return e.removeViewFromDom(n, o);
    }
    o.remove();
} return Promise.resolve(); }



/***/ }),

/***/ 1431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return transition; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var iosTransitionAnimation = function () { return __webpack_require__.e/* import() */(107).then(__webpack_require__.bind(null, 1434)); }, mdTransitionAnimation = function () { return __webpack_require__.e/* import() */(106).then(__webpack_require__.bind(null, 1435)); };
function transition(n) {
    return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                beforeTransition(n);
                return [4 /*yield*/, getAnimationBuilder(n)];
            case 1:
                i = _a.sent();
                return [2 /*return*/, i ? animation(i, n) : noAnimation(n)];
        }
    }); });
}
function getAnimationBuilder(n) {
    return __awaiter(this, void 0, void 0, function () { var _a, _b; return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (!(n.leavingEl && !1 !== n.animated && 0 !== n.duration)) return [3 /*break*/, 7];
                if (!n.animationBuilder) return [3 /*break*/, 1];
                _a = n.animationBuilder;
                return [3 /*break*/, 6];
            case 1:
                if (!("ios" === n.mode)) return [3 /*break*/, 3];
                return [4 /*yield*/, iosTransitionAnimation()];
            case 2:
                _b = (_c.sent()).iosTransitionAnimation;
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, mdTransitionAnimation()];
            case 4:
                _b = (_c.sent()).mdTransitionAnimation;
                _c.label = 5;
            case 5:
                _a = _b;
                _c.label = 6;
            case 6: return [2 /*return*/, _a];
            case 7: return [2 /*return*/];
        }
    }); });
}
function beforeTransition(n) { var i = n.enteringEl, e = n.leavingEl; setZIndex(i, e, n.direction), n.showGoBack ? i.classList.add("can-go-back") : i.classList.remove("can-go-back"), i.hidden = !1, e && (e.hidden = !1); }
function animation(n, i) {
    return __awaiter(this, void 0, void 0, function () { var e; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, waitForReady(i, !0)];
            case 1:
                _a.sent();
                return [4 /*yield*/, i.animationCtrl.create(n, i.baseEl, i)];
            case 2:
                e = _a.sent();
                fireWillEvents(i.window, i.enteringEl, i.leavingEl);
                return [4 /*yield*/, playTransition(e, i)];
            case 3: return [2 /*return*/, (_a.sent(), e.hasCompleted && fireDidEvents(i.window, i.enteringEl, i.leavingEl), e)];
        }
    }); });
}
function noAnimation(n) {
    return __awaiter(this, void 0, void 0, function () { var i, e; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = n.enteringEl, e = n.leavingEl;
                i && i.classList.remove("hide-page"), e && e.classList.remove("hide-page");
                return [4 /*yield*/, waitForReady(n, !1)];
            case 1: return [2 /*return*/, (_a.sent(), fireWillEvents(n.window, i, e), fireDidEvents(n.window, i, e), null)];
        }
    }); });
}
function waitForReady(n, i) {
    return __awaiter(this, void 0, void 0, function () { var e; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e = (null != n.deepWait ? n.deepWait : i) ? [deepReady(n.enteringEl), deepReady(n.leavingEl)] : [shallowReady(n.enteringEl), shallowReady(n.leavingEl)];
                return [4 /*yield*/, Promise.all(e)];
            case 1:
                _a.sent();
                return [4 /*yield*/, notifyViewReady(n.viewIsReady, n.enteringEl)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    }); });
}
function notifyViewReady(n, i) {
    return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = n;
                if (!_a) return [3 /*break*/, 2];
                return [4 /*yield*/, n(i)];
            case 1:
                _a = (_b.sent());
                _b.label = 2;
            case 2:
                _a;
                return [2 /*return*/];
        }
    }); });
}
function playTransition(n, i) { var e = i.progressCallback, a = new Promise(function (i) { return n.onFinish(i); }); return e ? (n.progressStart(), e(n)) : n.play(), a; }
function fireWillEvents(n, i, e) { lifecycle(n, e, "ionViewWillLeave"), lifecycle(n, i, "ionViewWillEnter"); }
function fireDidEvents(n, i, e) { lifecycle(n, i, "ionViewDidEnter"), lifecycle(n, e, "ionViewDidLeave"); }
function lifecycle(n, i, e) { if (i) {
    var a = new (0, n.CustomEvent)(e, { bubbles: !1, cancelable: !1 });
    i.dispatchEvent(a);
} }
function shallowReady(n) { return n && n.componentOnReady ? n.componentOnReady() : Promise.resolve(); }
function deepReady(n) { return n ? customElements.get ? customElements.get(n.tagName.toLowerCase()) ? componentOnReady(n) : Promise.all(Array.from(n.children).map(deepReady)) : componentOnReady(n) : Promise.resolve(); }
function componentOnReady(n) { return n.componentOnReady ? n.componentOnReady() : Promise.all(Array.from(n.children).map(deepReady)); }
function setZIndex(n, i, e) { n && (n.style.zIndex = "back" === e ? "99" : "101"), i && (i.style.zIndex = "100"); }



/***/ }),

/***/ 1433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chunk_c311c162_js__ = __webpack_require__(1429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chunk_fe7f197d_js__ = __webpack_require__(1431);




/***/ })

});
//# sourceMappingURL=53.js.map