import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { HTTP } from '@ionic-native/http';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
// import { NativeGeocoder} from '@ionic-native/native-geocoder';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { VerifyPage } from '../pages/verify/verify';
import { CapturePage } from '../pages/capture/capture';
import { MorephotoPage } from '../pages/morephoto/morephoto';
import { CommentPage } from '../pages/comment/comment';
import { SuccessPage } from '../pages/success/success';
import { AddressModalPage } from '../pages/address-modal/address-modal'


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    DashboardPage,
    VerifyPage,
    CapturePage,
    MorephotoPage,
    SuccessPage,
    CommentPage,
    AddressModalPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AmplifyAngularModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    DashboardPage,
    VerifyPage,
    CapturePage,
    MorephotoPage,
    SuccessPage,   
    CommentPage,  
    AddressModalPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    // NativeGeocoder,
    Facebook,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AmplifyService,
    HTTP,
    FileTransfer,
    FileTransferObject,
    File,
  ]
})
export class AppModule {}
