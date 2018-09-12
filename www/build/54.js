webpackJsonp([54],{

/***/ 1396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonNav", function() { return Nav; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_core_js__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chunk_ab2696b0_js__ = __webpack_require__(1430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chunk_770a6cdb_js__ = __webpack_require__(1427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chunk_fe7f197d_js__ = __webpack_require__(1431);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function s(e){try{h(i.next(e))}catch(e){o(e)}}function a(e){try{h(i.throw(e))}catch(e){o(e)}}function h(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(s,a)}h((i=i.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=i[2&o[0]?"return":o[0]?"throw":"next"])&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[0,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};var ViewController=function(){function e(e,t){this.component=e,this.params=t,this.state=1}return e.prototype.init=function(e){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(i){switch(i.label){case 0:return this.state=2,this.element?[3,2]:(t=this.component,n=this,[4,Object(__WEBPACK_IMPORTED_MODULE_1__chunk_ab2696b0_js__["a"])(this.delegate,e,t,["ion-page","hide-page"],this.params)]);case 1:n.element=i.sent(),i.label=2;case 2:return[2]}})})},e.prototype._destroy=function(){this.state;var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3},e}();function matches(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var i=e.params,r=null==i,o=null==n;if(r!==o)return!1;if(r&&o)return!0;var s=Object.keys(i),a=Object.keys(n);if(s.length!==a.length)return!1;for(var h=0;h<s.length;h++){var u=s[h];if(i[u]!==n[u])return!1}return!0}function convertToView(e,t){return e?e instanceof ViewController?e:new ViewController(e,t):null}function convertToViews(e){return e.map(function(e){return e instanceof ViewController?e:"page"in e?convertToView(e.page,e.params):convertToView(e,void 0)}).filter(function(e){return null!==e})}var Nav=function(){function e(){this.transInstr=[],this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[]}return e.prototype.rootChanged=function(){this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},e.prototype.componentWillLoad=function(){this.useRouter=!!this.win.document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeBackEnabled&&(this.swipeBackEnabled=this.config.getBoolean("swipeBackEnabled","ios"===this.mode)),void 0===this.animated&&(this.animated=this.config.getBoolean("animate",!0)),this.ionNavWillLoad.emit()},e.prototype.componentDidLoad=function(){this.rootChanged()},e.prototype.componentDidUnload=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];Object(__WEBPACK_IMPORTED_MODULE_3__chunk_fe7f197d_js__["a"])(this.win,n.element,"ionViewWillUnload"),n._destroy()}this.sbTrns&&this.sbTrns.destroy(),this.transInstr.length=this.views.length=0,this.sbTrns=void 0,this.destroyed=!0},e.prototype.push=function(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},i)},e.prototype.insert=function(e,t,n,i,r){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:i},r)},e.prototype.insertPages=function(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)},e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},e.prototype.popTo=function(e,t,n){var i={removeStart:-1,removeCount:-1,opts:t};return e instanceof ViewController?(i.removeView=e,i.removeStart=1):"number"==typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)},e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},e.prototype.removeIndex=function(e,t,n,i){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:n},i)},e.prototype.setRoot=function(e,t,n,i){return this.setPages([{page:e,params:t}],n,i)},e.prototype.setPages=function(e,t,n){return t||(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)},e.prototype.setRouteId=function(e,t,n){var i,r=this,o=this.getActive();if(matches(o,e,t))return Promise.resolve({changed:!1,element:o.element});var s,a=new Promise(function(e){return i=e}),h={updateURL:!1,viewIsReady:function(e){var t,n=new Promise(function(e){return t=e});return i({changed:!0,element:e,markVisible:function(){return __awaiter(r,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return t(),[4,s];case 1:return e.sent(),[2]}})})}}),n}};if(0===n)s=this.setRoot(e,t,h);else{var u=this.views.find(function(n){return matches(n,e,t)});u?s=this.popTo(u,Object.assign({},h,{direction:"back"})):1===n?s=this.push(e,t,h):-1===n&&(s=this.setRoot(e,t,Object.assign({},h,{direction:"back",animated:!0})))}return a},e.prototype.getRouteId=function(){var e=this.getActive();return e?{id:e.element.tagName,params:e.params,element:e.element}:void 0},e.prototype.canGoBack=function(e){return void 0===e&&(e=this.getActive()),!(!e||!this.getPrevious(e))},e.prototype.getActive=function(){return this.views[this.views.length-1]},e.prototype.getByIndex=function(e){return this.views[e]},e.prototype.getPrevious=function(e){if(void 0===e&&(e=this.getActive()),e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}},e.prototype.length=function(){return this.views.length},e.prototype.queueTrns=function(e,t){var n=new Promise(function(t,n){e.resolve=t,e.reject=n});return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n},e.prototype.success=function(e,t){if(null!==this.transInstr){if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=this.win.document.querySelector("ion-router");if(n){var i="back"===e.direction?-1:1;n.navChanged(i)}}}else this.fireError("nav controller was destroyed",t)},e.prototype.failed=function(e,t){null!==this.transInstr?(this.transInstr.length=0,this.fireError(e,t)):this.fireError("nav controller was destroyed",t)},e.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},e.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},e.prototype.runTransition=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,i,r,o;return __generator(this,function(s){switch(s.label){case 0:if(s.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActive(),n=this.getEnteringView(e,t),!t&&!n)throw new Error("no views in the stack to be removed");return n&&1===n.state?[4,n.init(this.el)]:[3,2];case 1:s.sent(),s.label=2;case 2:return this.postViewInit(n,t,e),(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t?[4,this.transition(n,t,e)]:[3,4];case 3:return r=s.sent(),[3,5];case 4:r={hasCompleted:!0,requiresTransition:!1},s.label=5;case 5:return i=r,this.success(i,e),this.ionNavDidChange.emit(),[3,7];case 6:return o=s.sent(),this.failed(o,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}})})},e.prototype.prepareTI=function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),null!=e.removeView){e.removeStart,e.removeCount;var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}null!=e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var i=e.insertViews;if(i){i.length;var r=convertToViews(i);if(0===r.length)throw new Error("invalid views to insert");for(var o=0,s=r;o<s.length;o++){var a=s[o];a.delegate=e.opts.delegate;var h=a.nav;if(h&&h!==this)throw new Error("inserted view was already inserted");if(3===a.state)throw new Error("inserted view was already destroyed")}e.insertViews=r}},e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(n)return n[n.length-1];var i=e.removeStart;if(null!=i)for(var r=this.views,o=i+e.removeCount,s=r.length-1;s>=0;s--){var a=r[s];if((s<i||s>=o)&&a!==t)return a}},e.prototype.postViewInit=function(e,t,n){n.resolve,n.reject;var i=n.opts,r=n.insertViews,o=n.removeStart,s=n.removeCount,a=void 0;if(null!=o&&null!=s){a=[];for(var h=0;h<s;h++)(p=this.views[h+o])&&p!==e&&p!==t&&a.push(p);i.direction=i.direction||"back"}if(0===this.views.length+(r?r.length:0)-(s||0))throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(r){for(var u=n.insertStart,c=0,l=r;c<l.length;c++){var p=l[c];this.insertViewAt(p,u),u++}n.enteringRequiresTransition&&(i.direction=i.direction||"forward")}if(a&&a.length>0){for(var d=0,v=a;d<v.length;d++)p=v[d],Object(__WEBPACK_IMPORTED_MODULE_3__chunk_fe7f197d_js__["a"])(this.win,p.element,"ionViewWillLeave"),Object(__WEBPACK_IMPORTED_MODULE_3__chunk_fe7f197d_js__["a"])(this.win,p.element,"ionViewDidLeave"),Object(__WEBPACK_IMPORTED_MODULE_3__chunk_fe7f197d_js__["a"])(this.win,p.element,"ionViewWillUnload");for(var f=0,m=a;f<m.length;f++)p=m[f],this.destroyView(p)}},e.prototype.transition=function(e,t,n){return __awaiter(this,void 0,void 0,function(){var i,r,o,s,a,h,u=this;return __generator(this,function(c){switch(c.label){case 0:return this.sbTrns&&(this.sbTrns.destroy(),this.sbTrns=void 0),i=n.opts,r=i.progressAnimation?function(e){u.sbTrns=e}:void 0,o=e.element,s=t&&t.element,a=Object.assign({mode:this.mode,animated:this.animated,showGoBack:this.canGoBack(e),animationCtrl:this.animationCtrl,progressCallback:r,window:this.win,baseEl:this.el,enteringEl:o,leavingEl:s},i),[4,Object(__WEBPACK_IMPORTED_MODULE_3__chunk_fe7f197d_js__["b"])(a)];case 1:return h=c.sent(),[2,this.transitionFinish(h,e,t,i)]}})})},e.prototype.transitionFinish=function(e,t,n,i){var r=!e||e.hasCompleted,o=r?t:n;return o&&this.cleanup(o),e&&e.destroy(),{hasCompleted:r,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}},e.prototype.insertViewAt=function(e,t){var n=this.views,i=n.indexOf(e);i>-1?(e.nav,n.splice(t,0,n.splice(i,1)[0])):(e.nav,e.nav=this,n.splice(t,0,e))},e.prototype.removeView=function(e){2===e.state||e.state;var t=this.views,n=t.indexOf(e);n>=0&&t.splice(n,1)},e.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},e.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),i=t.length-1;i>=0;i--){var r=t[i];i>n?(Object(__WEBPACK_IMPORTED_MODULE_3__chunk_fe7f197d_js__["a"])(this.win,r.element,"ionViewWillUnload"),this.destroyView(r)):i<n&&(r.element.hidden=!0)}},e.prototype.swipeBackStart=function(){this.isTransitioning||this.transInstr.length>0||this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},e.prototype.swipeBackProgress=function(e){if(this.sbTrns){this.isTransitioning=!0;var t=e.deltaX/this.win.innerWidth;this.sbTrns.progressStep(t)}},e.prototype.swipeBackEnd=function(e){if(this.sbTrns){var t=e.deltaX,n=this.win.innerWidth,i=t/n,r=e.velocityX,o=n/2,s=r>=0&&(r>.2||e.deltaX>o),a=(s?1-i:i)*n,h=0;if(a>5){var u=a/Math.abs(r);h=Math.min(u,300)}this.sbTrns.progressEnd(s,i,h)}},e.prototype.canSwipeBack=function(){return!!this.swipeBackEnabled&&!this.isTransitioning&&this.canGoBack()},e.prototype.render=function(){return[this.swipeBackEnabled&&Object(__WEBPACK_IMPORTED_MODULE_0__ionic_core_js__["b" /* h */])("ion-gesture",{canStart:this.canSwipeBack.bind(this),onStart:this.swipeBackStart.bind(this),onMove:this.swipeBackProgress.bind(this),onEnd:this.swipeBackEnd.bind(this),gestureName:"goback-swipe",gesturePriority:10,direction:"x",threshold:10,attachTo:"body"}),"ios"===this.mode&&Object(__WEBPACK_IMPORTED_MODULE_0__ionic_core_js__["b" /* h */])("div",{class:"nav-decor"}),Object(__WEBPACK_IMPORTED_MODULE_0__ionic_core_js__["b" /* h */])("slot",null)]},Object.defineProperty(e,"is",{get:function(){return"ion-nav"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated",mutable:!0},animationCtrl:{connect:"ion-animation-controller"},canGoBack:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getActive:{method:!0},getByIndex:{method:!0},getPrevious:{method:!0},getRouteId:{method:!0},insert:{method:!0},insertPages:{method:!0},length:{method:!0},pop:{method:!0},popTo:{method:!0},popToRoot:{method:!0},push:{method:!0},queue:{context:"queue"},removeIndex:{method:!0},root:{type:String,attr:"root",watchCallbacks:["rootChanged"]},rootParams:{type:"Any",attr:"root-params"},setPages:{method:!0},setRoot:{method:!0},setRouteId:{method:!0},swipeBackEnabled:{type:Boolean,attr:"swipe-back-enabled",mutable:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),e}();

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



/***/ })

});
//# sourceMappingURL=54.js.map