webpackJsonp([86],{

/***/ 1399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonNavSetRoot", function() { return NavSetRoot; });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var NavSetRoot=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),t=this.component;return e&&t?e.setRoot(t,this.componentProps):Promise.resolve(null)},Object.defineProperty(e,"is",{get:function(){return"ion-nav-set-root"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}();

/***/ })

});
//# sourceMappingURL=86.js.map