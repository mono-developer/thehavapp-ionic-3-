import { Component, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';
import { CapturePage } from "../capture/capture";
// import {
//   NativeGeocoder,
//   NativeGeocoderReverseResult,
//   NativeGeocoderForwardResult,
//   NativeGeocoderOptions
// } from "@ionic-native/native-geocoder";
import { AmplifyService } from 'aws-amplify-angular';
import { LoginPage } from '../login/login';

declare let google: any;

@IonicPage()
@Component({
  selector: "page-verify",
  templateUrl: "verify.html"
})
export class VerifyPage {
  @ViewChild("map") mapElement: ElementRef;
  @ViewChild("searchbar", { read: ElementRef })
  searchbar: ElementRef;
  addressElement: HTMLInputElement = null;
  map: any;
  address: string;

  private given_name: string = "";
  private family_name: string = "";
  private auth: any;
  lat: any;
  lng: any;
  full_address: string;
  accuracy: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public amplifyService: AmplifyService,
    public platform: Platform,
    // public nativeGeocoder: NativeGeocoder,
    private changeDetector: ChangeDetectorRef
  ) {
    // this.platform.ready().then(() => this.loadMaps());
    this.amplifyService = amplifyService;

    const auth = this.amplifyService.auth();
    this.auth = auth;

    auth.currentAuthenticatedUser().then(user => {
      this.given_name = user.attributes.given_name;
      this.family_name = user.attributes.family_name;
    });
  }

  viewPlace(id) {
    console.log("Clicked Marker", id);
  }
  ionViewDidLoad() {}
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
  logout() {
    this.auth
      .signOut()
      .then(data => this.navCtrl.setRoot(LoginPage))
      .catch(err => console.log(err));
  }

  continue() {
    this.navCtrl.push(CapturePage);
  }
}
