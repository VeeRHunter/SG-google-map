import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SelectCategoryPage } from '../pages/select-category/select-category';
import { NotesPage } from '../pages/notes/notes';
import { PaymentPage } from '../pages/payment/payment';
import { StationeryPage } from '../pages/stationery/stationery';
import { ElectronicsPage } from '../pages/electronics/electronics';
import { PenPage } from '../pages/pen/pen';
import { CartPage } from '../pages/cart/cart';
import { NotebookPage } from '../pages/notebook/notebook';
import { ClearFilePage } from '../pages/clear-file/clear-file';
import { StaplerPage } from '../pages/stapler/stapler';
import { HighlighterPage } from '../pages/highlighter/highlighter';
import { CalculatorPage } from '../pages/calculator/calculator';
import { ThumbdrivePage } from '../pages/thumbdrive/thumbdrive';
import { DonePage } from '../pages/done/done';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service/service';
import { LoadingProvider } from '../providers/loading/loading';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebaseConfig = {
  apiKey: "AIzaSyAV_uyBCHubtBWF1LioFqfCvfAkCzvhi60",
  authDomain: "msaproj-de614.firebaseapp.com",
  databaseURL: "https://msaproj-de614.firebaseio.com",
  projectId: "msaproj-de614",
  storageBucket: "msaproj-de614.appspot.com",
  messagingSenderId: "830232158947"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    SelectCategoryPage,
    NotesPage,
    PaymentPage,
    StationeryPage,
    ElectronicsPage,
    PenPage,
    CartPage,
    NotebookPage,
    ClearFilePage,
    StaplerPage,
    HighlighterPage,
    CalculatorPage,
    ThumbdrivePage,
    DonePage
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
    SelectCategoryPage,
    NotesPage,
    PaymentPage,
    StationeryPage,
    ElectronicsPage,
    PenPage,
    CartPage,
    NotebookPage,
    ClearFilePage,
    StaplerPage,
    HighlighterPage,
    CalculatorPage,
    ThumbdrivePage,
    DonePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServiceProvider,
    LoadingProvider
  ]
})
export class AppModule { }