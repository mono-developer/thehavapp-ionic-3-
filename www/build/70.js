webpackJsonp([70],{

/***/ 1391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonCheckbox", function() { return Checkbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_core_js__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chunk_770a6cdb_js__ = __webpack_require__(1427);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var Checkbox=function(){function e(){this.inputId="ion-cb-"+checkboxIds++,this.labelId=this.inputId+"-lbl",this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on"}return e.prototype.componentWillLoad=function(){this.emitStyle()},e.prototype.componentDidLoad=function(){this.ionStyle=Object(__WEBPACK_IMPORTED_MODULE_1__chunk_770a6cdb_js__["b"])(this.ionStyle)},e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({"checkbox-disabled":this.disabled,"checkbox-checked":this.checked})},e.prototype.onChange=function(){this.checked=!this.checked},e.prototype.onKeyUp=function(){this.keyFocus=!0},e.prototype.onFocus=function(){this.ionFocus.emit()},e.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},e.prototype.hostData=function(){return{class:{"checkbox-checked":this.checked,"checkbox-disabled":this.disabled,"checkbox-key":this.keyFocus}}},e.prototype.render=function(){var e={"checkbox-icon":!0,"checkbox-checked":this.checked};return[Object(__WEBPACK_IMPORTED_MODULE_0__ionic_core_js__["b" /* h */])("div",{class:e},Object(__WEBPACK_IMPORTED_MODULE_0__ionic_core_js__["b" /* h */])("div",{class:"checkbox-inner"})),Object(__WEBPACK_IMPORTED_MODULE_0__ionic_core_js__["b" /* h */])("input",{type:"checkbox",id:this.inputId,"aria-labelledby":this.labelId,onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),checked:this.checked,name:this.name,value:this.value,disabled:this.disabled})]},Object.defineProperty(e,"is",{get:function(){return"ion-checkbox"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"checkbox"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["emitStyle"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-checkbox{position:relative;display:inline-block}ion-checkbox input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.checkbox-md .checkbox-icon{border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-border-md-color,var(--ion-border-color,#c1c4cd));background-color:var(--ion-item-md-background-color,var(--ion-item-background-color,var(--ion-background-color,#fff)));-webkit-transition-duration:280ms;transition-duration:280ms;-webkit-transition-property:background;transition-property:background;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);contain:strict}.checkbox-md .checkbox-checked{border-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.checkbox-md .checkbox-checked .checkbox-inner{left:4px;top:0;position:absolute;width:5px;height:10px;border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff));-webkit-transform:rotate(45deg);transform:rotate(45deg)}.checkbox-md.checkbox-disabled,.item-md.item-checkbox-disabled ion-label{opacity:.3;pointer-events:none}.checkbox-key .checkbox-icon::after{border-radius:50%;left:-12px;top:-12px;position:absolute;display:block;width:36px;height:36px;background:var(--ion-color-md-primary-tint,var(--ion-color-primary-tint,#4c8dff));content:\"\";opacity:.2}.item.item-md .checkbox-md{margin:9px 36px 9px 4px;position:static;display:block}.item.item-md .checkbox-md[slot=end]{margin:11px 10px 10px 0}.checkbox-md+.item-inner ion-label{margin-left:0}.checkbox-md-primary .checkbox-checked{border-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.checkbox-md-primary .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff))}.checkbox-md-secondary .checkbox-checked{border-color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8));background-color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.checkbox-md-secondary .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.checkbox-md-tertiary .checkbox-checked{border-color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff));background-color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.checkbox-md-tertiary .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.checkbox-md-success .checkbox-checked{border-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60));background-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.checkbox-md-success .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff))}.checkbox-md-warning .checkbox-checked{border-color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00));background-color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.checkbox-md-warning .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#fff))}.checkbox-md-danger .checkbox-checked{border-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141));background-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.checkbox-md-danger .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff))}.checkbox-md-light .checkbox-checked{border-color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8));background-color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.checkbox-md-light .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000))}.checkbox-md-medium .checkbox-checked{border-color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2));background-color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.checkbox-md-medium .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#fff))}.checkbox-md-dark .checkbox-checked{border-color:var(--ion-color-md-dark,var(--ion-color-dark,#222428));background-color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}.checkbox-md-dark .checkbox-checked .checkbox-inner{border-color:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff))}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),checkboxIds=0;

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
//# sourceMappingURL=70.js.map