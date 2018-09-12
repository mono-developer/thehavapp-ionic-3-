import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CapturePage } from '../capture/capture';

@IonicPage()
@Component({
  templateUrl: 'success.html',
})
export class SuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  takemore(){
    this.navCtrl.push(CapturePage);
  }

}
