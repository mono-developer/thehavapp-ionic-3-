import { Component, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';
// import {
//   NativeGeocoder,
//   NativeGeocoderReverseResult,
//   NativeGeocoderForwardResult,
//   NativeGeocoderOptions
// } from "@ionic-native/native-geocoder";
import { AmplifyService } from 'aws-amplify-angular';

declare let google: any;

@IonicPage()
@Component({
  selector: 'page-address-modal',
  templateUrl: 'address-modal.html',
})
export class AddressModalPage {
	@ViewChild("map") mapElement: ElementRef;
  @ViewChild("searchbar", { read: ElementRef })
  searchbar: ElementRef;
  addressElement: HTMLInputElement = null;
  map: any;
  location: any;
  accuracy: number;

  constructor(
  	public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public geolocation: Geolocation,
    public amplifyService: AmplifyService,
    public platform: Platform,
    // public nativeGeocoder: NativeGeocoder,
    private changeDetector: ChangeDetectorRef
  	) {
  	this.location = {
  		full_address: '',
  		lat: '',
  		lng: ''
  	}
  	this.platform.ready().then(() => this.loadMaps());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressModalPage');
  }

  loadMaps() {
    this.getAddress();

  }

  getAddress() {
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
        this.location.lat = lat.toFixed(5);
        this.location.lng = lng.toFixed(5);
        this.accuracy = position.coords.accuracy;

        let mapOptions = {
          center: new google.maps.LatLng(lat, lng),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(
          this.mapElement.nativeElement,
          mapOptions
        );

        this.initAutocomplete();

        this.addMarker(this.map, null);

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
          
      },
      err => {
        console.log(err);
      }
    );
  }

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
    // console.log('address', this.location.address);
    this.createAutocomplete(this.addressElement).subscribe(location => {
      let options = {
        center: location,
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, options);
        this.addMarker(this.map, this.location.full_address); 
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
          console.log('place', place);
          let lat = place.geometry.location.lat();
          let lng = place.geometry.location.lng();
          this.location.lat = lat.toFixed(5);
          this.location.lng = lng.toFixed(5);
          this.location.full_address = place.formatted_address;
          this.changeDetector.detectChanges();
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
  }

  addMarker(map, address) {
    let marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    if(address) {
      let content = "<h4>" + address + " </h4>";
      this.addInfoWindow(marker, content);
    }
    
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

  verify() {
    this.viewCtrl.dismiss({location: this.location});
  }

}
