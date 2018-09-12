webpackJsonp([104],{

/***/ 1100:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1134:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1135:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comment_comment__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { DomSanitizer } from '@angular/platform-browser';



var CapturePage = /** @class */ (function () {
    function CapturePage(camera, navCtrl, navParams) {
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.photoIsNotEmpty = false;
        this.takephoto_options = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            mediaType: this.camera.MediaType.PICTURE
        };
    }
    CapturePage.prototype.ngOnInit = function () {
        this.photos = [];
    };
    CapturePage.prototype.takephoto = function () {
        var _this = this;
        this.camera.getPicture(this.takephoto_options).then(function (file_uri) {
            _this.photos.push({
                file_uri: file_uri,
                caption: ''
            });
            _this.photos.reverse();
            _this.photoIsNotEmpty = true;
        }, function (err) {
            console.log(err);
        });
    };
    CapturePage.prototype.deletephoto = function (index) {
        this.photos.splice(index, 1);
    };
    CapturePage.prototype.retakephoto = function (index) {
        var _this = this;
        this.camera.getPicture(this.takephoto_options).then(function (file_uri) {
            var newItem = {
                file_uri: file_uri,
                caption: _this.photos[index]['caption']
            };
            _this.photos.splice(index, 1, newItem);
        }, function (err) {
            console.log(err);
        });
    };
    CapturePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    CapturePage.prototype.continue = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__comment_comment__["a" /* CommentPage */], {
            photos: this.photos
        });
    };
    CapturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/developer/hav2.0/src/pages/capture/capture.html"*/'<ion-content class="pageMainBg">\n  <div class="dashboardScrn">\n    <div class="screenTitle">\n      <a (click)="back()"><img src="assets/imgs/arrowBack.png" alt="Image"></a>\n      CAPTURE PHOTO\n    </div>\n\n    <a (click)="takephoto()" class="btn-addmore">TAKE A PHOTO </a>\n\n    <div class="photoAlbum">\n      <div class="photoWrp" *ngFor="let photo of photos; let id = index" > \n        <div class="photoHolder">\n          <img [src]="photo[\'file_uri\']" *ngIf="photo" alt="Image" style="width:100%; height:100%;">\n        </div>\n        <div class="dscrptWrp">\n          <input type="text" name="desc" placeholder="Property Description" [(ngModel)]="photo[\'caption\']">\n          <a (click)="deletephoto(id)" >DELETE PHOTO</a>\n          <a (click)="retakephoto(id)" >RETAKE PHOTO</a>\n        </div>\n        <div class="clear"></div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <button *ngIf="photoIsNotEmpty" (click)="continue()" class="btn">CONTINUE</button> \n</ion-footer>'/*ion-inline-end:"/Users/developer/hav2.0/src/pages/capture/capture.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CapturePage);
    return CapturePage;
}());

//# sourceMappingURL=capture.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aws_amplify_angular__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(googlePlus, facebook, navCtrl, navParams, formBuilder, amplifyService, alertCtrl) {
        this.googlePlus = googlePlus;
        this.facebook = facebook;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.amplifyService = amplifyService;
        this.alertCtrl = alertCtrl;
        this.rootPage = LoginPage_1;
        this.fbuserData = null;
        this.amplifyService = amplifyService;
        var auth = this.amplifyService.auth();
        this.auth = auth;
        this.data = {
            username: 'mono',
            password: 'one2345678',
        };
        this.submitAttempt = false;
        this.signInForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            // Password: Minimum six characters, at least one uppercase letter, one lowercase letter and one number
            password: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].minLength(6)])]
        });
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.login = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.signInForm.valid) {
            return;
        }
        var _a = this.data, username = _a.username, password = _a.password;
        this.auth.signIn(username.toLowerCase(), password)
            .then(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
        })
            .catch(function (err) {
            console.log(err);
            _this.showAlert(err);
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.logintoGP = function () {
        var _this = this;
        // Try to login using email provided by Google.
        // - If error, then Sign Up the user to AWS Cognito
        console.log('Start: sign in by Google');
        this.googlePlus.login({})
            .then(function (id) {
            console.log('Sign in by Google success');
            _this.auth.signIn(id.email, id.userId)
                .then(function (data) {
                console.log('Sign in Google->Cognito success');
                console.log(data);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
            })
                .catch(function (err) {
                console.log('Sign in Google->Cognito failed. Maybe it is his first login. Now try to sign him up.');
                console.log(err);
                _this.auth.signUp({
                    username: id.email.toLowerCase(),
                    password: id.userId + 'Salt123',
                    attributes: {
                        email: id.email.toLowerCase(),
                        given_name: id.givenName,
                        family_name: id.familyName,
                        address: 'N/A'
                    }
                })
                    .then(function (data) {
                    console.log('Sign up Google->Cognito success.');
                    console.log(data);
                    _this.auth.signIn(id.email.toLowerCase(), id.userId + 'Salt123')
                        .then(function (data) {
                        console.log(data);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
                    })
                        .catch(function (err) {
                        console.log(err);
                        _this.showAlert(err);
                    });
                })
                    .catch(function (err) {
                    console.log('Sign up Google->Cognito failed.');
                    console.log(err);
                    if (err.code) {
                        _this.showAlert(err);
                    }
                });
            });
        })
            .catch(function (err) {
            console.log('Error logging into Google', err);
        });
    };
    LoginPage.prototype.logintoFB = function () {
        // this.facebook.login(['email','public_profile']).then((response: FacebookLoginResponse) => {
        //   this.facebook.api('me?fields=id,name,email,first_name,picture,width(720).height(720).as(picture_large)',[]).then(profile=>{
        //   this.fbuserData = {email : profile['email'],first_name : profile['firstname'],picture : profile['picture_large']['data']['url'],username : 'mar'}
        //   })
        // });
        this.facebook.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) { return console.log('Logged into Facebook!', res); })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.showAlert = function (error) {
        var title = '';
        var subTitle = '';
        switch (error.code) {
            case 'UserNotFoundException':
                title = 'Oops';
                subTitle = 'Sorry, user does not exist.';
                break;
            case 'NotAuthorizedException':
                title = 'Oops';
                subTitle = error.message;
                break;
            default:
                title = error.code;
                subTitle = error.message;
        }
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/developer/hav2.0/src/pages/login/login.html"*/'<ion-content class="pageMainBg">\n  \n  <div class="screenTitle">Login</div>\n  \n  <div class="logoWrap">\n      <img src="assets/imgs/mainlogo.png" alt="Image">\n  </div>\n\n  <div class="loginForm">\n    <form [formGroup]="signInForm">\n      <input type="text" class="uname" name="uname" placeholder="Enter Username" formControlName="username" [(ngModel)]="data.username">\n      <div *ngIf="!signInForm.controls.username.valid  && (signInForm.controls.username.dirty || submitAttempt)">\n        <p class="note danger">Please type your username</p>\n      </div>\n\n      <input type="password" class="pass" name="password" placeholder="Enter Password" formControlName="password" [(ngModel)]="data.password">\n      <div *ngIf="!signInForm.controls.password.valid  && (signInForm.controls.password.dirty || submitAttempt)">\n        <p class="note danger">Please type your valid password</p>\n      </div>\n\n      <button (click)="login()" >LOGIN</button>\n    </form>\n  </div>\n\n  <p *ngIf="fbuserData">{{fbuserData.username}}</p>\n  <a (click)="register()" class="creatAccnt" >Create An Account?</a>\n  \n  <div class="commectSM">\n    <img src="assets/imgs/or.png" alt="Image">\n    <a (click)="logintoFB()" ><img src="assets/imgs/facebookConnect.png" alt="Image"></a>\n    <a (click)="logintoGP()" ><img src="assets/imgs/googleConnect.png" alt="Image"></a>\n  </div>\n\n  \n  \n</ion-content>\n'/*ion-inline-end:"/Users/developer/hav2.0/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4_aws_amplify_angular__["b" /* AmplifyService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 1374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.show();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/developer/hav2.0/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/developer/hav2.0/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

// export ANDROID_HOME="$HOME/Android/Sdk"
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify_angular__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__success_success__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommentPage = /** @class */ (function () {
    function CommentPage(navCtrl, navParams, http, amplifyService, transfer, loadingCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.amplifyService = amplifyService;
        this.transfer = transfer;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.comment = '';
        this.JWT = '';
        this.API_GATEWAY_HOST = '0xxs7qflqh.execute-api.us-east-1.amazonaws.com';
        this.API_GATEWAY_PREFIX = 'https://0xxs7qflqh.execute-api.us-east-1.amazonaws.com/dev/';
        this.ADD_PROPERTY_ENDPOINT = 'add-property/';
        this.ACK_PHOTO_UPLOADED = 'acknowledge-photo-has-been-uploaded/';
        this.amplifyService = amplifyService;
        var auth = this.amplifyService.auth();
        auth.currentSession().then(function (session) {
            _this.JWT = session.idToken.jwtToken;
            _this.http.setHeader(_this.API_GATEWAY_HOST, 'Authorization', _this.JWT);
        });
        this.http.setDataSerializer('json');
    }
    CommentPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    CommentPage.prototype.submit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Uploading data...'
        });
        loading.present();
        var photos = this.navParams.get('photos');
        var photo = photos[0];
        var body = {
            title: photo['caption'],
            comment: this.comment
        };
        var header = {
            Authorization: this.JWT
        };
        this.http.setDataSerializer('json');
        this.http.post(this.API_GATEWAY_PREFIX + this.ADD_PROPERTY_ENDPOINT, body, header)
            .then(function (data) {
            var resp_obj = JSON.parse(data.data);
            var UPLOAD_URL = resp_obj['upload_urls'][0]['upload_url'];
            var fileTransfer = _this.transfer.create();
            var options = {
                fileKey: '',
                fileName: '',
                httpMethod: 'PUT',
                chunkedMode: false,
                mimeType: "image/jpeg",
                headers: {
                    "Content-Type": "image/jpeg"
                }
            };
            fileTransfer.upload(photo['file_uri'], UPLOAD_URL, options)
                .then(function (data2) {
                console.log('Upload photo done:');
                console.log(data2);
                var body2 = {
                    property_id: resp_obj['property_id'],
                    photo_key: resp_obj['upload_urls'][0]['key']
                };
                _this.http.post(_this.API_GATEWAY_PREFIX + _this.ACK_PHOTO_UPLOADED, body2, header)
                    .then(function (data3) {
                    console.log('Acknowledged:');
                    console.log(data3);
                    loading.dismiss();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__success_success__["a" /* SuccessPage */]);
                })
                    .catch(function (err) {
                });
            }, function (err) {
                console.log('Upload photo error:');
                console.log(err);
                loading.dismiss();
                _this.showAlert('UploadPhotoError');
            });
        })
            .catch(function (error) {
            console.log('API post error:');
            console.log(error);
            loading.dismiss();
            _this.showAlert('APICallError');
        });
    };
    CommentPage.prototype.showAlert = function (error) {
        var title = '';
        var subTitle = '';
        switch (error) {
            case 'UploadPhotoError':
                title = 'Sorry';
                subTitle = 'Error when upload photo.';
                break;
            case 'APICallError':
                title = 'Sorry';
                subTitle = 'Error when calling API.';
                break;
            default:
                title = 'Error';
                subTitle = 'Sorry, unhandled error.';
        }
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present();
    };
    CommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/developer/hav2.0/src/pages/comment/comment.html"*/'<ion-content class="pageMainBg">\n  <div class="dashboardScrn">\n      <div class="screenTitle">\n        <a (click)="back()" ><img src="assets/imgs/arrowBack.png" alt="Image"></a>\n        ADD PROPERTY COMMENTS\n      </div>\n\n      <div class="commentsWrp">\n        <label>Additional Comment About the Property</label>\n        <textarea name="add-comment" id="add-comment" cols="30" rows="15" placeholder="Add Comments Here" [(ngModel)]="comment"></textarea>\n      </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <button (click)="submit()" class="btn">SUBMIT</button>  \n</ion-footer>'/*ion-inline-end:"/Users/developer/hav2.0/src/pages/comment/comment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_2_aws_amplify_angular__["b" /* AmplifyService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CommentPage);
    return CommentPage;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify_angular__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__capture_capture__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { VerifyPage } from '../verify/verify';


var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, amplifyService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.amplifyService = amplifyService;
        this.given_name = '';
        this.family_name = '';
        this.amplifyService = amplifyService;
        var auth = this.amplifyService.auth();
        this.auth = auth;
        auth.currentAuthenticatedUser().then(function (user) {
            _this.given_name = user.attributes.given_name;
            _this.family_name = user.attributes.family_name;
        });
    }
    DashboardPage.prototype.logout = function () {
        var _this = this;
        this.auth.signOut()
            .then(function (data) { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]); })
            .catch(function (err) { return console.log(err); });
    };
    DashboardPage.prototype.continue = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__capture_capture__["a" /* CapturePage */]);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/developer/hav2.0/src/pages/dashboard/dashboard.html"*/'<ion-content class="pageMainBg">\n  <div class="dashboardScrn">\n      <div class="screenTitle">DASHBOARD</div>\n\n      <div class="homie"><img src="assets/imgs/homie.png" alt="Image"></div>\n\n      <div class="nameHolder">\n        <h2>Welcome</h2>\n        <h1>{{ given_name }} {{ family_name }}</h1>\n        <a (click)="logout()" class="logout">Logout</a>\n      </div>\n\n      <div class="instructionTitle">\n        Below are the instructions on how to use this app.\n      </div>\n\n      <ul class="intructionList">\n        <li>Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus id auctor magna donec in lobortis urna.</li>\n        <li>Aenean non ante id lectus vulputate faucibus hasellus sollicitudin justo at velit vehicula eget pretium nulla sollicitudin. </li>\n        <li>Petsum dolor sit amet consectetur adipiscing elit phasellus id auctor magna donec.</li>\n        <li>Dolor sit amet consectetur adipiscing elit phasellus id auctor magna donec in lobor lectus vulputate faucibus hasellus.</li>\n      </ul>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <button   (click)="continue()" class="btn">CONTINUE</button>  \n</ion-footer>\n'/*ion-inline-end:"/Users/developer/hav2.0/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_aws_amplify_angular__["b" /* AmplifyService */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aws_amplify_angular__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {
//   NativeGeocoder,
//   NativeGeocoderReverseResult,
//   NativeGeocoderForwardResult,
//   NativeGeocoderOptions
// } from "@ionic-native/native-geocoder";

var AddressModalPage = /** @class */ (function () {
    function AddressModalPage(navCtrl, navParams, viewCtrl, geolocation, amplifyService, platform, 
        // public nativeGeocoder: NativeGeocoder,
        changeDetector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.geolocation = geolocation;
        this.amplifyService = amplifyService;
        this.platform = platform;
        this.changeDetector = changeDetector;
        this.addressElement = null;
        this.location = {
            full_address: '',
            lat: '',
            lng: ''
        };
        this.platform.ready().then(function () { return _this.loadMaps(); });
    }
    AddressModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddressModalPage');
    };
    AddressModalPage.prototype.loadMaps = function () {
        this.getAddress();
    };
    AddressModalPage.prototype.getAddress = function () {
        var _this = this;
        var geolocationOptions = {
            maximumAge: 3000,
            timeout: 3000,
            enableHighAccuracy: true
        };
        this.geolocation.getCurrentPosition(geolocationOptions).then(function (position) {
            console.log('position', position);
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            _this.location.lat = lat.toFixed(5);
            _this.location.lng = lng.toFixed(5);
            _this.accuracy = position.coords.accuracy;
            var mapOptions = {
                center: new google.maps.LatLng(lat, lng),
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.initAutocomplete();
            _this.addMarker(_this.map, null);
            // this.getGeoCoder(lat, lng).then( (data:any) =>{
            //   	console.log('address', data);
            //   	if(data != undefined) {
            //     	this.address = data.locality + ', ' + data.countryName;
            //     	this.location.full_address = data.subThoroughfare + ' ' + data.thoroughfare + ' ' + data.locality + ' ' + data.administrativeArea + ' ' + data.postalCode + ', ' + data.countryName;
            //     } else {
            //     	this.address = '';
            //     	this.location.full_address = '';
            //     }                 
            // })
        }, function (err) {
            console.log(err);
        });
    };
    AddressModalPage.prototype.mapsSearchBar = function (ev) {
        var autocomplete = new google.maps.places.Autocomplete(ev);
        autocomplete.bindTo("bounds", this.map);
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, "place_changed", function () {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    sub.error({
                        message: "Autocomplete returned place with no geometry"
                    });
                }
                else {
                    sub.next(place.geometry.location);
                    sub.complete();
                }
            });
        });
    };
    AddressModalPage.prototype.initAutocomplete = function () {
        var _this = this;
        // reference : https://github.com/driftyco/ionic/issues/7223
        this.addressElement = this.searchbar.nativeElement.querySelector(".searchbar-input");
        // console.log('address', this.location.address);
        this.createAutocomplete(this.addressElement).subscribe(function (location) {
            var options = {
                center: location,
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, options);
            _this.addMarker(_this.map, _this.location.full_address);
        });
    };
    AddressModalPage.prototype.createAutocomplete = function (addressEl) {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(addressEl);
        autocomplete.bindTo("bounds", this.map);
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, "place_changed", function () {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    sub.error({
                        message: "Autocomplete returned place with no geometry"
                    });
                }
                else {
                    console.log('place', place);
                    var lat = place.geometry.location.lat();
                    var lng = place.geometry.location.lng();
                    _this.location.lat = lat.toFixed(5);
                    _this.location.lng = lng.toFixed(5);
                    _this.location.full_address = place.formatted_address;
                    _this.changeDetector.detectChanges();
                    // this.getGeoCoder(lat, lng).then( (data:any) =>{
                    //   console.log('address', data);
                    //   if(data != undefined) {
                    //   	this.address = data.locality + ', ' + data.countryName;
                    //   	this.location.full_address = data.subThoroughfare + ' ' + data.thoroughfare + ' ' + data.locality + ' ' + data.administrativeArea + ' ' + data.postalCode + ', ' + data.countryName;
                    //   } else {
                    //   	this.address = '';
                    //   	this.location.full_address = '';
                    //   }          
                    // })
                    sub.next(place.geometry.location);
                    //sub.complete();
                }
            });
        });
    };
    AddressModalPage.prototype.addMarker = function (map, address) {
        var marker = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        if (address) {
            var content = "<h4>" + address + " </h4>";
            this.addInfoWindow(marker, content);
        }
    };
    AddressModalPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, "click", function () {
            infoWindow.open(_this.map, marker);
        });
    };
    // getGeoCoder(lat, lng) {
    //   let options: NativeGeocoderOptions = {
    //     useLocale: true,
    //     maxResults: 5
    //   };
    //   return this.nativeGeocoder.reverseGeocode(lat, lng, options)
    //     .then((result: NativeGeocoderReverseResult[]) => {
    //       return result[0]
    //     })
    //     .catch((error: any) => {
    //       console.log(error);
    //       return error
    //     });
    // }
    AddressModalPage.prototype.verify = function () {
        this.viewCtrl.dismiss({ location: this.location });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("map"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], AddressModalPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("searchbar", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], AddressModalPage.prototype, "searchbar", void 0);
    AddressModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-address-modal',template:/*ion-inline-start:"/Users/developer/hav2.0/src/pages/address-modal/address-modal.html"*/'<ion-content class="pageMainBg">\n  <div class="dashboardScrn">\n    <div class="screenTitle">ADDRESS VERIFICATION</div>\n\n    <div class="homie"><img src="assets/imgs/homie.png" alt="Image"></div>\n\n    <div class="address">\n      <p>Latitude: <span>{{location.lat}}</span></p>\n      <p>Longitude: <span>{{location.lng}}</span></p>\n      <p>Accuracy: <span>{{accuracy}}</span>m</p>\n    </div>\n    <ion-searchbar class="searchbar" #searchbar placeholder="Search Address"></ion-searchbar>\n    <div #map id="map"></div>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <button (click)="verify()" class="btn">Verify</button>  \n</ion-footer>'/*ion-inline-end:"/Users/developer/hav2.0/src/pages/address-modal/address-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4_aws_amplify_angular__["b" /* AmplifyService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], AddressModalPage);
    return AddressModalPage;
}());

//# sourceMappingURL=address-modal.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__capture_capture__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuccessPage = /** @class */ (function () {
    function SuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SuccessPage.prototype.takemore = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__capture_capture__["a" /* CapturePage */]);
    };
    SuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/developer/hav2.0/src/pages/success/success.html"*/'<ion-content  class="pageMainBg">\n  <div class="dashboardScrn">\n    <div class="screenTitle">SUCCESS</div>\n\n    <div class="homie"><img src="assets/imgs/homie.png" alt="Image"></div>\n\n    <div class="successWrp">\n      <div class="nameHolder">\n        <h1>Success!</h1>\n      </div>\n\n      <div class="instructionTitle">\n        <h3>Your Property Photos Has Been Submitted.</h3>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <button (click)="takemore()" class="btn">TAKE MORE PHOTOS</button>  \n</ion-footer>'/*ion-inline-end:"/Users/developer/hav2.0/src/pages/success/success.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SuccessPage);
    return SuccessPage;
}());

//# sourceMappingURL=success.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify_angular__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__address_modal_address_modal__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = /** @class */ (function () {
    function RegisterPage(alertCtrl, navCtrl, navParams, modalCtrl, formBuilder, amplifyService) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.amplifyService = amplifyService;
        this.address_valid = true;
        this.amplifyService = amplifyService;
        this.data = {
            given_name: '',
            family_name: '',
            address: '',
            email: '',
            username: '',
            password: '',
        };
        this.location = {
            address: '',
            lat: '',
            lng: ''
        };
        this.submitAttempt = false;
        this.signUpForm = formBuilder.group({
            given_name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            family_name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([])],
            address: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email])],
            username: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            // Password: Minimum six characters, at least one uppercase letter, one lowercase letter and one number
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6)])]
        });
    }
    RegisterPage.prototype.setAddress = function () {
        var _this = this;
        console.log('setAddress');
        var setAddressModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__address_modal_address_modal__["a" /* AddressModalPage */], {
            address: this.location.address,
            lat: this.location.lat,
            lng: this.location.lng
        });
        setAddressModal.onDidDismiss(function (data) {
            if (data && data.location.full_address) {
                console.log('location', data);
                _this.data.address = data.location.full_address;
            }
            else {
                _this.address_valid = false;
            }
        });
        setAddressModal.present();
    };
    RegisterPage.prototype.submit = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.signUpForm.valid) {
            this.showAlert('InvalidForm');
            return;
        }
        var _a = this.data, username = _a.username, password = _a.password, email = _a.email, given_name = _a.given_name, family_name = _a.family_name, address = _a.address;
        var auth = this.amplifyService.auth();
        auth.signUp({
            username: username.toLowerCase(),
            password: password,
            attributes: {
                email: email.toLowerCase(),
                given_name: given_name,
                family_name: family_name,
                address: address
            }
        })
            .then(function (data) {
            console.log(data);
            auth.signIn(username.toLowerCase(), password)
                .then(function (data) {
                console.log(data);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
            })
                .catch(function (err) {
                console.log(err);
                _this.showAlert(err);
            });
        })
            .catch(function (err) {
            console.log(err);
            if (err.code) {
                _this.showAlert(err.code);
            }
        });
    };
    RegisterPage.prototype.showAlert = function (error) {
        var title = '';
        var subTitle = '';
        switch (error) {
            case 'UsernameExistsException':
                title = 'Username Exist';
                subTitle = 'Please use another username. Thank you.';
                break;
            case 'InvalidForm':
                title = 'Invalid Data';
                subTitle = 'Please check your input. Thank you.';
                break;
            default:
                title = error.code;
                subTitle = error.message;
        }
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/developer/hav2.0/src/pages/register/register.html"*/'<ion-content class="pageMainBg">\n    \n  <div class="screenTitle">\n    <a (click)="back()" ><img src="assets/imgs/arrowBack.png" alt="Image"></a>\n    CREATE AN ACCOUNT\n  </div>\n\n  <div class="logoWrap" (click)="setAddress()">\n    <img src="assets/imgs/mainlogo.png" alt="Image">\n  </div>\n\n  <div class="loginForm">\n    <form [formGroup]="signUpForm">\n      <input type="text" class="fullName" formControlName="given_name" placeholder="First Name" [(ngModel)]="data.given_name">\n      <div *ngIf="!signUpForm.controls.given_name.valid  && (signUpForm.controls.given_name.dirty || submitAttempt)">\n        <p class="note danger">First Name is required</p>\n      </div>\n\n      <input type="text" class="fullName" formControlName="family_name" placeholder="Last Name" [(ngModel)]="data.family_name">\n      \n      <div class="address" >\n        <!-- <input type="text" class="locationIcon" formControlName="address" placeholder="Location/Address" [(ngModel)]="data.address" disabled="true" (ionChanged)="setAddress()">   -->\n        <img src="assets/imgs/locationIcon.png">\n        <input type="text" class="address_input" formControlName="address" placeholder="Location/Address" [(ngModel)]="data.address">  \n        <img class="nav_arrow" src="assets/icon/nav_arrow.png" (click)="setAddress()">\n       <!--  <p *ngIf="!data.address" style="color: lightgray;">Location/Address</p>\n        <p *ngIf="data.address" style="color: #333;">{{data.address}}</p> -->\n      </div>\n      <div *ngIf="">\n        <p class="note danger">Address is required</p>\n      </div>\n      \n      <!-- <ion-searchbar class="searchbar locationIcon" #searchbar formControlName="address" placeholder="Location/Address"  [(ngModel)]="data.address"></ion-searchbar>\n      <div *ngIf="!signUpForm.controls.address.valid  && (signUpForm.controls.address.dirty || submitAttempt)">\n        <p class="note danger">Address is required</p>\n      </div> -->\n      \n      <input type="text" class="emailIcon" formControlName="email" placeholder="Email Address" [(ngModel)]="data.email">\n      <div *ngIf="!signUpForm.controls.email.valid  && (signUpForm.controls.email.dirty || submitAttempt)">\n        <p class="note danger">You must supply valid e-mail</p>\n      </div>\n      \n      <hr>\n      <input type="text" class="uname" formControlName="username" placeholder="Enter Username" [(ngModel)]="data.username">\n      <div *ngIf="!signUpForm.controls.username.valid  && (signUpForm.controls.username.dirty || submitAttempt)">\n        <p class="note danger">You must supply valid username</p>\n      </div>\n\n      <input type="password" class="pass" formControlName="password" placeholder="Enter Password" [(ngModel)]="data.password">\n      <div *ngIf="!signUpForm.controls.password.valid  && (signUpForm.controls.password.dirty || submitAttempt)">\n        <p class="note danger">Password: min 6 characters, with uppercase letter, lowercase letter and number</p>\n      </div>\n\n      <button (click)="submit()" >SUBMIT</button>\n    </form>\n  </div>  \n  \n</ion-content>\n'/*ion-inline-end:"/Users/developer/hav2.0/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_aws_amplify_angular__["b" /* AmplifyService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 345;

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/address-modal/address-modal.module": [
		1375,
		103
	],
	"../pages/capture/capture.module": [
		1418,
		102
	],
	"../pages/comment/comment.module": [
		1419,
		101
	],
	"../pages/dashboard/dashboard.module": [
		1420,
		100
	],
	"../pages/login/login.module": [
		1421,
		99
	],
	"../pages/morephoto/morephoto.module": [
		1422,
		98
	],
	"../pages/register/register.module": [
		1423,
		97
	],
	"../pages/success/success.module": [
		1424,
		96
	],
	"../pages/verify/verify.module": [
		1425,
		95
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 388;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorephotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment_comment__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MorephotoPage = /** @class */ (function () {
    function MorephotoPage(camera, navCtrl, navParams) {
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.browsephoto_options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            correctOrientation: true,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
    }
    MorephotoPage.prototype.ngOnInit = function () {
        this.photos = this.navParams.get('photos');
    };
    MorephotoPage.prototype.browse = function () {
        console.log('browse');
    };
    MorephotoPage.prototype.addmore = function () {
        var _this = this;
        console.log('addmore');
        this.camera.getPicture(this.browsephoto_options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
        }, function (err) {
            console.log(err);
        });
    };
    MorephotoPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    MorephotoPage.prototype.continue = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__comment_comment__["a" /* CommentPage */]);
    };
    MorephotoPage.prototype.deletephoto = function (index) {
        this.photos.splice(index, 1);
    };
    MorephotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/developer/hav2.0/src/pages/morephoto/morephoto.html"*/'<ion-content class="pageMainBg">\n  <div class="dashboardScrn">\n      <div class="screenTitle">\n        <a (click)="back()" ><img src="assets/imgs/arrowBack.png" alt="Image"></a>\n        ADD PHOTOS\n      </div>\n\n      <a (click)="addmore()" class="btn-addmore">BROWSE MORE PHOTOS</a>\n      \n      <div class="photoWrp" *ngFor="let photo of photos; let id = index" > \n          <div class="photoHolder">\n            <img [src]="photo" *ngIf="photo" alt="Image" >\n          </div>\n          <div class="dscrptWrp">\n            <input type="text" name="desc" placeholder="Property Description">\n            <a (click)="deletephoto(id)" >Delete Photo</a>\n          </div>\n        <div class="clear"></div>\n      </div>\n\n    </div>\n</ion-content>\n<ion-footer>\n  <button (click)="continue()" class="btn">CONTINUE</button>  \n</ion-footer>'/*ion-inline-end:"/Users/developer/hav2.0/src/pages/morephoto/morephoto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MorephotoPage);
    return MorephotoPage;
}());

//# sourceMappingURL=morephoto.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__capture_capture__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aws_amplify_angular__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {
//   NativeGeocoder,
//   NativeGeocoderReverseResult,
//   NativeGeocoderForwardResult,
//   NativeGeocoderOptions
// } from "@ionic-native/native-geocoder";


var VerifyPage = /** @class */ (function () {
    function VerifyPage(navCtrl, navParams, geolocation, amplifyService, platform, 
        // public nativeGeocoder: NativeGeocoder,
        changeDetector) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.amplifyService = amplifyService;
        this.platform = platform;
        this.changeDetector = changeDetector;
        this.addressElement = null;
        this.given_name = "";
        this.family_name = "";
        // this.platform.ready().then(() => this.loadMaps());
        this.amplifyService = amplifyService;
        var auth = this.amplifyService.auth();
        this.auth = auth;
        auth.currentAuthenticatedUser().then(function (user) {
            _this.given_name = user.attributes.given_name;
            _this.family_name = user.attributes.family_name;
        });
    }
    VerifyPage.prototype.viewPlace = function (id) {
        console.log("Clicked Marker", id);
    };
    VerifyPage.prototype.ionViewDidLoad = function () { };
    /*
      loadMaps() {
        let geolocationOptions = {
          maximumAge: 3000,
          timeout: 3000,
          enableHighAccuracy: true
        }
        this.geolocation.getCurrentPosition(geolocationOptions).then(
          position => {
            console.log('position', position);
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.lat = lat.toFixed(5);
            this.lng = lng.toFixed(5);
            this.accuracy = position.coords.accuracy;
    
            let mapOptions = {
              center: new google.maps.LatLng(lat, lng),
              zoom: 10,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
    
            };
    
            this.getGeoCoder(lat, lng).then( (data:any) =>{
              console.log('address', data);
              this.address = data.locality + ', ' + data.countryName;
              this.full_address = data.subThoroughfare + ' ' + data.thoroughfare + ' ' + data.locality + ' ' + data.administrativeArea + ' ' + data.postalCode + ', ' + data.countryName;
              this.map = new google.maps.Map(
                this.mapElement.nativeElement,
                mapOptions
              );
              this.initAutocomplete();
              this.addMarker(this.map, this.address);
            })
              
          },
          err => {
            console.log(err);
          }
        );
      }
    
      // geolocationSuccess() {
    
      // }
    
      // geolocationError() {
    
      // }
    
      mapsSearchBar(ev: any) {
        const autocomplete = new google.maps.places.Autocomplete(ev);
        autocomplete.bindTo("bounds", this.map);
        return new Observable((sub: any) => {
          google.maps.event.addListener(autocomplete, "place_changed", () => {
            const place = autocomplete.getPlace();
            if (!place.geometry) {
              sub.error({
                message: "Autocomplete returned place with no geometry"
              });
            } else {
              sub.next(place.geometry.location);
              sub.complete();
            }
          });
        });
      }
    
      initAutocomplete(): void {
        // reference : https://github.com/driftyco/ionic/issues/7223
        this.addressElement = this.searchbar.nativeElement.querySelector(
          ".searchbar-input"
        );
        this.createAutocomplete(this.addressElement).subscribe(location => {
          let options = {
            center: location,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
    
          this.map = new google.maps.Map(this.mapElement.nativeElement, options);
          setTimeout(() => {
            this.addMarker(this.map, this.address);
          }, 1500);
        });
      }
    
      createAutocomplete(addressEl: HTMLInputElement): Observable<any> {
        const autocomplete = new google.maps.places.Autocomplete(addressEl);
        autocomplete.bindTo("bounds", this.map);
        return new Observable((sub: any) => {
          google.maps.event.addListener(autocomplete, "place_changed", () => {
            const place = autocomplete.getPlace();
            if (!place.geometry) {
              sub.error({
                message: "Autocomplete returned place with no geometry"
              });
            } else {
              let lat = place.geometry.location.lat();
              let lng = place.geometry.location.lng();
              // this.getGeoCoder(lat, lng).then( (data:any) =>{
              //   console.log('address', data);
              //   this.lat = lat.toFixed(5);
              //   this.lng = lng.toFixed(5);
              //   this.address = data.locality + ', ' + data.countryName;
              //   this.full_address = data.subThoroughfare + ' ' + data.thoroughfare + ' ' + data.locality + ' ' + data.administrativeArea + ' ' + data.postalCode + ', ' + data.countryName;
              //   this.changeDetector.detectChanges();
              // })
              sub.next(place.geometry.location);
              //sub.complete();
            }
          });
        });
      }
    
      addMarker(map, address) {
        let marker = new google.maps.Marker({
          map: map,
          animation: google.maps.Animation.DROP,
          position: this.map.getCenter()
        });
    
        // let circle = new google.maps.Circle({
        //   map: map,
        //   radius: 5000,    // metres
        //   fillColor: '#AA0000'
        // });
    
        // circle.bindTo('center', marker, 'position');
    
        let content = "<h4>" + address + " </h4>";
    
        this.addInfoWindow(marker, content);
      }
    
      addInfoWindow(marker, content) {
        let infoWindow = new google.maps.InfoWindow({
          content: content
        });
    
        google.maps.event.addListener(marker, "click", () => {
          infoWindow.open(this.map, marker);
        });
      }
    
      // getGeoCoder(lat, lng) {
      //   let options: NativeGeocoderOptions = {
      //     useLocale: true,
      //     maxResults: 5
      //   };
      //   return this.nativeGeocoder.reverseGeocode(lat, lng, options)
      //     .then((result: NativeGeocoderReverseResult[]) => {
      //       return result[0]
      //     })
      //     .catch((error: any) => {
      //       console.log(error);
      //       return error
      //     });
      // }
    */
    VerifyPage.prototype.logout = function () {
        var _this = this;
        this.auth
            .signOut()
            .then(function (data) { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]); })
            .catch(function (err) { return console.log(err); });
    };
    VerifyPage.prototype.continue = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__capture_capture__["a" /* CapturePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("map"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], VerifyPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("searchbar", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], VerifyPage.prototype, "searchbar", void 0);
    VerifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-verify",template:/*ion-inline-start:"/Users/developer/hav2.0/src/pages/verify/verify.html"*/'<ion-content class="pageMainBg">\n  <div class="dashboardScrn">\n    <div class="screenTitle">ADDRESS VERIFICATION</div>\n\n    <div class="homie"><img src="assets/imgs/homie.png" alt="Image"></div>\n\n    <div class="nameHolder">\n      <h1>{{ given_name }} {{ family_name }}</h1>\n      <a (click)="logout()" class="logout">Logout</a>\n    </div>\n\n    <!-- <div class="instructionTitle">\n      Before we proceed may we ask your location/address\n    </div> -->\n\n    <div class="address">\n      <p>Address: <span>{{full_address}}</span></p>\n      <p>Latitude: <span>{{lat}}</span></p>\n      <p>Longitude: <span>{{lng}}</span></p>\n      <p>Accuracy: <span>{{accuracy}}</span>m</p>\n    </div>\n    <ion-searchbar class="searchbar" #searchbar placeholder="Search Address"></ion-searchbar>\n    <div #map id="map"></div>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <button (click)="continue()" class="btn">Continue</button>  \n</ion-footer>'/*ion-inline-end:"/Users/developer/hav2.0/src/pages/verify/verify.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4_aws_amplify_angular__["b" /* AmplifyService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], VerifyPage);
    return VerifyPage;
}());

//# sourceMappingURL=verify.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_amplify__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
__WEBPACK_IMPORTED_MODULE_2_aws_amplify___default.a.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Region
        region: 'us-east-1',
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-1_GeDtw97aZ',
        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '4684psmudc6mg01j6bk6q1qmah',
        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: true,
        // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
});
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_http__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(1373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_aws_amplify_angular__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(1374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_verify_verify__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_capture_capture__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_morephoto_morephoto__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_comment_comment__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_success_success__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_address_modal_address_modal__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import { NativeGeocoder} from '@ionic-native/native-geocoder';










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_verify_verify__["a" /* VerifyPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_capture_capture__["a" /* CapturePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_morephoto_morephoto__["a" /* MorephotoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_success_success__["a" /* SuccessPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_address_modal_address_modal__["a" /* AddressModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/address-modal/address-modal.module#AddressModalPageModule', name: 'AddressModalPage', segment: 'address-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/capture/capture.module#CapturePageModule', name: 'CapturePage', segment: 'capture', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comment/comment.module#CommentPageModule', name: 'CommentPage', segment: 'comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/morephoto/morephoto.module#MorephotoPageModule', name: 'MorephotoPage', segment: 'morephoto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/success/success.module#SuccessPageModule', name: 'SuccessPage', segment: 'success', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify/verify.module#VerifyPageModule', name: 'VerifyPage', segment: 'verify', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_aws_amplify_angular__["a" /* AmplifyAngularModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_verify_verify__["a" /* VerifyPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_capture_capture__["a" /* CapturePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_morephoto_morephoto__["a" /* MorephotoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_success_success__["a" /* SuccessPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_address_modal_address_modal__["a" /* AddressModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
                // NativeGeocoder,
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__["a" /* GooglePlus */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12_aws_amplify_angular__["b" /* AmplifyService */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ })

},[710]);
//# sourceMappingURL=main.js.map