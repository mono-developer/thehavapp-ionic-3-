import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AmplifyService } from 'aws-amplify-angular';
// import { VerifyPage } from '../verify/verify';
import { CapturePage } from '../capture/capture';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  private given_name : string = '';
  private family_name : string = '';
  private auth : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public amplifyService: AmplifyService
  ) {
    this.amplifyService = amplifyService;
    
    const auth = this.amplifyService.auth();
    this.auth = auth;

    auth.currentAuthenticatedUser().then(user => {
      this.given_name = user.attributes.given_name;
      this.family_name = user.attributes.family_name;
    });
  }

  logout() {
    this.auth.signOut()
      .then(data => this.navCtrl.setRoot(LoginPage))
      .catch(err => console.log(err));
  }

  continue() {
    this.navCtrl.push(CapturePage);
  }

}
