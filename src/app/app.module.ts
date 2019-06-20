import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ToastService } from './toast.service';
import { LoadingService } from './loading.service';
import { MapServiceService } from './map-service.service';
import { GoogleMaps } from '@ionic-native/google-maps/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';


const firebaseConfig = {
  apiKey: 'AIzaSyDO0E_T3WrFW-bEmOE40xN8U7-M7C57KyI',
  authDomain: 'mapstrial-b15de.firebaseapp.com',
  databaseURL: 'https://mapstrial-b15de.firebaseio.com',
  projectId: 'mapstrial-b15de',
  storageBucket: 'mapstrial-b15de.appspot.com',
  messagingSenderId: '204686556491',
  appId: '1:204686556491:web:ac1e298bb995e02c'
};
firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ToastService,
    LoadingService,
    MapServiceService,
    GoogleMaps,
    Geolocation,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
