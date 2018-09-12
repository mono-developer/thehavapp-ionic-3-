import { Component } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CommentPage } from '../comment/comment';

@IonicPage()
@Component({
  templateUrl: 'capture.html',
})
export class CapturePage {

  public photos : any;
  public photoIsNotEmpty: boolean = false; 

  takephoto_options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true,    
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(
    private camera: Camera, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    // private DomSanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
    this.photos = [];
  }

  takephoto() {
    this.camera.getPicture(this.takephoto_options).then((file_uri) => {
      this.photos.push({
        file_uri,
        caption: ''
      });
      this.photos.reverse();
      this.photoIsNotEmpty = true;
    }, (err) => {
      console.log(err);      
     });
  }

  deletephoto(index) {
    this.photos.splice(index, 1);
  }

  retakephoto(index) {
    this.camera.getPicture(this.takephoto_options).then((file_uri) => {
      const newItem = {
        file_uri: file_uri,
        caption: this.photos[index]['caption']
      };
      this.photos.splice(index, 1, newItem);
    }, (err) => {
      console.log(err);      
    });
  }

  back() {
    this.navCtrl.pop();
  }

  continue() {
    this.navCtrl.push(CommentPage, {
      photos: this.photos
    });
  }


}
