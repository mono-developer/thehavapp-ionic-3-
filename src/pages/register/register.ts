import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AmplifyService } from 'aws-amplify-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { FormBuilder, Validators } from '@angular/forms';
import { AddressModalPage } from '../address-modal/address-modal';

@IonicPage()
@Component({
  templateUrl: 'register.html',
})
export class RegisterPage {

  private submitAttempt: boolean;
  private signUpForm: any;
  private data: any;
  private location: any;
  public address_valid: boolean = true;

  constructor(
    public alertCtrl: AlertController, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public formBuilder: FormBuilder, 
    public amplifyService: AmplifyService,
  ) {
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
      address : '',
      lat: '',
      lng: ''
    }
    
    this.submitAttempt = false;

    this.signUpForm = formBuilder.group({
      given_name: ['', Validators.compose([Validators.required])],
      family_name: ['', Validators.compose([])],
      address: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      username: ['', Validators.compose([Validators.required])],
      // Password: Minimum six characters, at least one uppercase letter, one lowercase letter and one number
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  
  setAddress() {
    console.log('setAddress');
    let setAddressModal = this.modalCtrl.create(AddressModalPage, {
      address: this.location.address, 
      lat: this.location.lat, 
      lng: this.location.lng });
    setAddressModal.onDidDismiss(data => {
      if(data && data.location.full_address) {
        console.log('location', data);
        this.data.address = data.location.full_address;
      } else {
        this.address_valid = false;
      }
    })

    setAddressModal.present();
  }

  submit() {
    this.submitAttempt = true;

    if ( ! this.signUpForm.valid) {
      this.showAlert('InvalidForm');
      return;
    }

    const { 
      username, password, email, given_name, family_name, address 
    } = this.data;

    const auth = this.amplifyService.auth();
    auth.signUp({
      username: username.toLowerCase(),
      password,
      attributes: {
        email: email.toLowerCase(),
        given_name,
        family_name,
        address
      }
      })
      .then(data => {
        console.log(data);
        auth.signIn(username.toLowerCase(), password)
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
        console.log(err);
        if (err.code) {
          this.showAlert(err.code);
        }
      });
  }

  showAlert(error) {
    let title = '';
    let subTitle = '';

    switch (error) {
      case 'UsernameExistsException':
        title = 'Username Exist';
        subTitle = 'Please use another username. Thank you.'
        break;
      case 'InvalidForm':
        title = 'Invalid Data';
        subTitle = 'Please check your input. Thank you.';
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

  back(){
    this.navCtrl.pop();
  }

}
