webpackJsonp([44],{

/***/ 1432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isCordova; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isElectron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isIpad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isIphone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isPhablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return matchMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isHybrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return needInputShims; });
function isIpad(i) { return testUserAgent(i, /iPad/i); }
function isIphone(i) { return testUserAgent(i, /iPhone/i); }
function isIOS(i) { return testUserAgent(i, /iPad|iPhone|iPod/i); }
function isAndroid(i) { return !isIOS(i); }
function isPhablet(i) { var t = i.innerWidth, n = i.innerHeight, e = Math.min(t, n), s = Math.max(t, n); return e > 390 && e < 520 && s > 620 && s < 800; }
function isTablet(i) { var t = i.innerWidth, n = i.innerHeight, e = Math.min(t, n), s = Math.max(t, n); return e > 460 && e < 820 && s > 780 && s < 1400; }
function isDevice(i) { return matchMedia(i, "(any-pointer:coarse)"); }
function isHybrid(i) { return isCordova(i) || isCapacitorNative(i); }
function isCordova(i) { var t = i; return !!(t.cordova || t.phonegap || t.PhoneGap); }
function isCapacitorNative(i) { var t = i.Capacitor; return !(!t || !t.isNative); }
function isElectron(i) { return testUserAgent(i, /electron/); }
function needInputShims(i) { return isIOS(i) && isDevice(i); }
function testUserAgent(i, t) { return t.test(i.navigator.userAgent); }
function matchMedia(i, t, n) {
    if (n === void 0) { n = !1; }
    return i.matchMedia ? i.matchMedia(t).matches : n;
}



/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonHideWhen", function() { return HideWhen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonShowWhen", function() { return ShowWhen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chunk_410a1e2e_js__ = __webpack_require__(1432);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
function updateTestResults(e){e.passesTest=getTestResult(e)}function isPlatformMatch(e,t){for(var n=0,i=t.replace(/\s/g,"").split(",");n<i.length;n++)for(var r=i[n],o=0,s=e;o<s.length;o++)if(r===s[o])return!0;return!1}function isModeMatch(e,t){var n=t.replace(/\s/g,"").split(","),i=e.get("mode");return n.indexOf(i)>=0}function isSizeMatch(e,t){for(var n=0,i=t.replace(/\s/g,"").split(",");n<i.length;n++){var r=i[n],o=SIZE_TO_MEDIA[r];if(o&&Object(__WEBPACK_IMPORTED_MODULE_0__chunk_410a1e2e_js__["i"])(e,o))return!0}return!1}function getTestResult(e){var t=[];if(e.mediaQuery&&t.push(Object(__WEBPACK_IMPORTED_MODULE_0__chunk_410a1e2e_js__["i"])(e.win,e.mediaQuery)),e.size&&t.push(isSizeMatch(e.win,e.size)),e.mode&&t.push(isModeMatch(e.config,e.mode)),e.platform){var n=e.calculatedPlatforms.map(function(e){return e.name});t.push(isPlatformMatch(n,e.platform))}return e.orientation&&t.push(isOrientationMatch(e.win,e.orientation)),!t.length||(1===t.length?t[0]:t.reduce(function(t,n){return e.or?t||n:t&&n}))}function isOrientationMatch(e,t){return"portrait"===t?isPortrait(e):"landscape"===t&&!isPortrait(e)}function isPortrait(e){return Object(__WEBPACK_IMPORTED_MODULE_0__chunk_410a1e2e_js__["i"])(e,"(orientation: portrait)")}var SIZE_TO_MEDIA={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"},PLATFORM_CONFIGS=[{name:"ipad",isMatch:__WEBPACK_IMPORTED_MODULE_0__chunk_410a1e2e_js__["e"]},{name:"iphone",isMatch:__WEBPACK_IMPORTED_MODULE_0__chunk_410a1e2e_js__["f"]},{name:"ios",isMatch:__WEBPACK_IMPORTED_MODULE_0__chunk_410a1e2e_js__["d"]},{name:"android",isMatch:__WEBPACK_IMPORTED_MODULE_0__chunk_410a1e2e_js__["a"]},{name:"phablet",isMatch:__WEBPACK_IMPORTED_MODULE_0__chunk_410a1e2e_js__["g"]},{name:"tablet",isMatch:__WEBPACK_IMPORTED_MODULE_0__chunk_410a1e2e_js__["h"]},{name:"cordova",isMatch:__WEBPACK_IMPORTED_MODULE_0__chunk_410a1e2e_js__["b"]},{name:"electron",isMatch:__WEBPACK_IMPORTED_MODULE_0__chunk_410a1e2e_js__["c"]}];function detectPlatforms(e,t){return t.filter(function(t){return t.isMatch(e)})}var HideWhen=function(){function e(){this.or=!1,this.passesTest=!1}return e.prototype.componentWillLoad=function(){this.calculatedPlatforms=detectPlatforms(this.win,PLATFORM_CONFIGS),this.onResize()},e.prototype.onResize=function(){updateTestResults(this)},e.prototype.hostData=function(){return{class:{"show-content":!this.passesTest,"hide-content":this.passesTest}}},Object.defineProperty(e,"is",{get:function(){return"ion-hide-when"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{config:{context:"config"},element:{elementRef:!0},mediaQuery:{type:String,attr:"media-query"},or:{type:Boolean,attr:"or"},orientation:{type:String,attr:"orientation"},passesTest:{state:!0},platform:{type:String,attr:"platform"},size:{type:String,attr:"size"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-hide-when.show-content{display:block}ion-hide-when.hide-content{display:none!important}"},enumerable:!0,configurable:!0}),e}(),ShowWhen=function(){function e(){this.or=!1,this.passesTest=!1}return e.prototype.componentWillLoad=function(){this.calculatedPlatforms=detectPlatforms(this.win,PLATFORM_CONFIGS),this.onResize()},e.prototype.onResize=function(){updateTestResults(this)},e.prototype.hostData=function(){return{class:{"show-content":this.passesTest,"hide-content":!this.passesTest}}},Object.defineProperty(e,"is",{get:function(){return"ion-show-when"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{calculatedPlatforms:{context:"platforms"},config:{context:"config"},element:{elementRef:!0},mediaQuery:{type:String,attr:"media-query"},or:{type:Boolean,attr:"or"},orientation:{type:String,attr:"orientation"},passesTest:{state:!0},platform:{type:String,attr:"platform"},size:{type:String,attr:"size"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-show-when.show-content{display:block}ion-show-when.hide-content{display:none!important}"},enumerable:!0,configurable:!0}),e}();

/***/ })

});
//# sourceMappingURL=44.js.map