webpackJsonp([84],{

/***/ 1398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonNavPush", function() { return NavPush; });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var NavPush=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),n=this.component;return e&&n?e.push(n,this.componentProps):Promise.resolve(null)},Object.defineProperty(e,"is",{get:function(){return"ion-nav-push"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}();

/***/ })

});
//# sourceMappingURL=84.js.map