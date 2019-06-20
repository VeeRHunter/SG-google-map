import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { MapServiceService } from '../map-service.service';
import { LoadingService } from '../loading.service';
import { ToastService } from '../toast.service';
import { Environment, GoogleMap } from '@ionic-native/google-maps/ngx';
import {
  GoogleMaps, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  map;
  address: string;


  public libData: any = {};
  public libList: any[];

  constructor(
    private navCtrl: NavController,
    private mapService: MapServiceService,
    private loading: LoadingService,
    private toast: ToastService,
    private platform: Platform,
    private geolocation: Geolocation,
  ) { }

  ngOnInit() {
    this.mapService.getLocationList().snapshotChanges().subscribe((result: any) => {
      this.loading.dismiss();
      console.log(result);
      this.libList = new Array();

      // tslint:disable-next-line:forin
      for (const listSup in result.payload.val()) {
        this.libList.push(result.payload.val()[listSup]);
      }
      console.log(result.payload.val());
      console.log(this.libList);
    });

    Environment.setEnv({
      // api key for server
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyDO0E_T3WrFW-bEmOE40xN8U7-M7C57KyI',

      // api key for local development
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyDO0E_T3WrFW-bEmOE40xN8U7-M7C57KyI'
    });

    this.platform.ready();
    this.loadMap();

  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      // camera: {
      //   target: {
      //     lat: 43.0741704,
      //     lng: -89.3809802
      //   },
      //   zoom: 18,
      //   tilt: 30
      // }
    });
    this.goToMyLocation();
  }

  goToMyLocation() {
    this.map.clear();

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    this.geolocation.getCurrentPosition(options).then(result => {
      console.log(result);
    }, error => {
      console.log(error);
    });

    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      console.log(JSON.stringify(location, null, 2));

      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        duration: 5000
      });

      // add a marker
      const marker = this.map.addMarkerSync({
        title: '@ionic-native/google-maps plugin!',
        snippet: 'This plugin is awesome!',
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE
      });

      // show the infoWindow
      marker.showInfoWindow();

      // If clicked it, display the alert
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.toast.present('clicked!');
      });

      this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
        (data) => {
          console.log('Click MAP', data);
        }
      );
    })
      .catch(err => {
        // this.loading.dismiss();
        this.toast.present(err.error_message);
      });
  }

}
