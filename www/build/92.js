webpackJsonp([92],{

/***/ 1393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonImg", function() { return Img; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_core_js__ = __webpack_require__(677);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var Img=function(){function e(){}return e.prototype.srcChanged=function(){this.addIO()},e.prototype.componentDidLoad=function(){this.addIO()},e.prototype.addIO=function(){var e=this;this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver(function(t){t[0].isIntersecting&&(e.loadSrc=e.src,e.removeIO(),e.ionImgDidLoad.emit())}),this.io.observe(this.el)):setTimeout(function(){return e.loadSrc=e.src},200))},e.prototype.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},e.prototype.render=function(){return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_core_js__["b" /* h */])("img",{src:this.loadSrc,alt:this.alt,decoding:"async"})},Object.defineProperty(e,"is",{get:function(){return"ion-img"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{alt:{type:String,attr:"alt"},el:{elementRef:!0},loadSrc:{state:!0},src:{type:String,attr:"src",watchCallbacks:["srcChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionImgDidLoad",method:"ionImgDidLoad",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-img{display:block}ion-img>img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"},enumerable:!0,configurable:!0}),e}();

/***/ })

});
//# sourceMappingURL=92.js.map