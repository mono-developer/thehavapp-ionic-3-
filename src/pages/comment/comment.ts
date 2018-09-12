import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { AmplifyService } from 'aws-amplify-angular';
import { HTTP } from '@ionic-native/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { SuccessPage } from '../success/success';

@IonicPage()
@Component({
  templateUrl: 'comment.html',
})
export class CommentPage {

  private comment : string = '';
  private JWT : string = '';
  private API_GATEWAY_HOST : string = '0xxs7qflqh.execute-api.us-east-1.amazonaws.com';
  private API_GATEWAY_PREFIX : string = 'https://0xxs7qflqh.execute-api.us-east-1.amazonaws.com/dev/';
  private ADD_PROPERTY_ENDPOINT : string = 'add-property/';
  private ACK_PHOTO_UPLOADED : string = 'acknowledge-photo-has-been-uploaded/';

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private http: HTTP, public amplifyService: AmplifyService,
              private transfer: FileTransfer, public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {
    this.amplifyService = amplifyService;

    const auth = this.amplifyService.auth();

    auth.currentSession().then(session => {
      this.JWT = session.idToken.jwtToken;

      this.http.setHeader(this.API_GATEWAY_HOST, 'Authorization', this.JWT);
    });

    this.http.setDataSerializer('json');
  }

  back() {
    this.navCtrl.pop();
  }

  submit() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Uploading data...'
    });
    loading.present();

    const photos = this.navParams.get('photos');
    const photo = photos[0];

    const body = {
      title: photo['caption'],
      comment: this.comment
    };

    const header = {
      Authorization: this.JWT
    };

    this.http.setDataSerializer('json');
    this.http.post(this.API_GATEWAY_PREFIX + this.ADD_PROPERTY_ENDPOINT, body, header)
      .then(data => {
        const resp_obj = JSON.parse(data.data)
        const UPLOAD_URL = resp_obj['upload_urls'][0]['upload_url'];
        
        const fileTransfer: FileTransferObject = this.transfer.create();

        let options: FileUploadOptions = {
          fileKey: '',
          fileName: '',
          httpMethod: 'PUT',
          chunkedMode: false,
          mimeType: "image/jpeg",
          headers: {
            "Content-Type": "image/jpeg"
          }
        }
    
        fileTransfer.upload(photo['file_uri'], UPLOAD_URL, options)
          .then((data2) => {
            console.log('Upload photo done:');
            console.log(data2);

            const body2 = {
              property_id: resp_obj['property_id'],
              photo_key: resp_obj['upload_urls'][0]['key']
            }

            this.http.post(this.API_GATEWAY_PREFIX + this.ACK_PHOTO_UPLOADED, body2, header)
              .then(data3 => {
                console.log('Acknowledged:');
                console.log(data3);
                
                loading.dismiss();
                this.navCtrl.push(SuccessPage);
              })
              .catch(err => {

              });
          }, (err) => {
            console.log('Upload photo error:');
            console.log(err);
            loading.dismiss();
            this.showAlert('UploadPhotoError');
          });
      })
      .catch(error => {
        console.log('API post error:');
        console.log(error);
        loading.dismiss();
        this.showAlert('APICallError');
      });
  }

  showAlert(error) {
    let title = '';
    let subTitle = '';

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

    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }
}
