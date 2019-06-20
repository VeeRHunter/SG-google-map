import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service/service';
import { LoadingProvider } from '../providers/loading/loading';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomePage } from '../pages/home/home';
import { Geolocation } from '@ionic-native/geolocation';

const firebaseConfig = {
  apiKey: "AIzaSyDO0E_T3WrFW-bEmOE40xN8U7-M7C57KyI",
  authDomain: "mapstrial-b15de.firebaseapp.com",
  databaseURL: "https://mapstrial-b15de.firebaseio.com",
  projectId: "mapstrial-b15de",
  storageBucket: "mapstrial-b15de.appspot.com",
  messagingSenderId: "204686556491",
  appId: "1:204686556491:web:ac1e298bb995e02c"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServiceProvider,
    LoadingProvider
  ]
})
export class AppModule { }