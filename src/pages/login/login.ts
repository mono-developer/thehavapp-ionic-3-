import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { DashboardPage } from '../dashboard/dashboard';
import { AmplifyService } from 'aws-amplify-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  templateUrl: 'login.html',
})

export class LoginPage {

  rootPage:any = LoginPage;
  fbuserData = null;
  private submitAttempt: boolean;
  private data: any;
  private signInForm: any;
  auth : any;

  constructor(
    public googlePlus: GooglePlus, 
    public facebook: Facebook , 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public formBuilder: FormBuilder, 
    public amplifyService: AmplifyService,
    public alertCtrl: AlertController
  ) {
    this.amplifyService = amplifyService;
    const auth = this.amplifyService.auth();
    this.auth = auth;

    this.data = {
      username: 'mono',
      password: 'one2345678',
    };
    
    this.submitAttempt = false;

    this.signInForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      // Password: Minimum six characters, at least one uppercase letter, one lowercase letter and one number
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  login() {
    this.submitAttempt = true;

    if ( ! this.signInForm.valid) {
      return;
    }

    const { 
      username, password
    } = this.data;

    this.auth.signIn(username.toLowerCase(), password)
      .then(data => {
        console.log(data);
        this.navCtrl.push(DashboardPage);
      })
      .catch(err => {
        console.log(err);
        this.showAlert(err);
      });
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  logintoGP() {
    // Try to login using email provided by Google.
    // - If error, then Sign Up the user to AWS Cognito
    console.log('Start: sign in by Google');

    this.googlePlus.login({})
      .then(id => {
        console.log('Sign in by Google success')
        this.auth.signIn(id.email, id.userId)
          .then(data => {
            console.log('Sign in Google->Cognito success')
            console.log(data);
            this.navCtrl.setRoot(DashboardPage);
          })
          .catch(err => {
            console.log('Sign in Google->Cognito failed. Maybe it is his first login. Now try to sign him up.')
            console.log(err);
            this.auth.signUp({
              username: id.email.toLowerCase(),
              password: id.userId + 'Salt123',
              attributes: {
                email: id.email.toLowerCase(),
                given_name: id.givenName,
                family_name: id.familyName,
                address: 'N/A'
              }
              })
              .then(data => {
                console.log('Sign up Google->Cognito success.')
                console.log(data);
                this.auth.signIn(id.email.toLowerCase(), id.userId + 'Salt123')
                  .then(data => {
                    console.log(data);
                    this.navCtrl.setRoot(DashboardPage);
                  })
                  .catch(err => {
                    console.log(err);
                    this.showAlert(err);
                  });
              })
              .catch(err => {
                console.log('Sign up Google->Cognito failed.')
                console.log(err);
                if (err.code) {
                  this.showAlert(err);
                }
              });
          });
      })
      .catch(err => {
        console.log('Error logging into Google', err)
      });
  }


  logintoFB(){
    // this.facebook.login(['email','public_profile']).then((response: FacebookLoginResponse) => {
    //   this.facebook.api('me?fields=id,name,email,first_name,picture,width(720).height(720).as(picture_large)',[]).then(profile=>{
    //   this.fbuserData = {email : profile['email'],first_name : profile['firstname'],picture : profile['picture_large']['data']['url'],username : 'mar'}
    //   })
    // });
    this.facebook.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .catch(e => console.log('Error logging into Facebook', e));
  }

  showAlert(error) {
    let title = '';
    let subTitle = '';

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

    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

}
