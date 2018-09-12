import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommentPage } from '../comment/comment';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  templateUrl: 'morephoto.html',
})
export class MorephotoPage {

  public photos : any;
  public base64Image : string;
  
  browsephoto_options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,   
    correctOrientation: true,        
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }


  constructor( public camera: Camera , public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.photos = this.navParams.get('photos');
  }

  browse() {
   console.log('browse');
  }

  addmore() {
    console.log('addmore');
    this.camera.getPicture(this.browsephoto_options).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.photos.push(this.base64Image);
      this.photos.reverse();
    }, (err) => {
      console.log(err);      
     });
  }

  back() {
    this.navCtrl.pop();
  }

  continue() {
    this.navCtrl.push(CommentPage);
  }

  deletephoto(index){
    this.photos.splice(index, 1);
  }

}
