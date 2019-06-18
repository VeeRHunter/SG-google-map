import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import * as firebase from 'firebase';
import { NavController } from 'ionic-angular';
import { LoadingProvider } from '../loading/loading';
import { DonePage } from '../../pages/done/done';
import { SelectCategoryPage } from '../../pages/select-category/select-category';
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  public navCtrl: NavController;

  constructor(
    public loading: LoadingProvider,
  ) {
    console.log('Hello ServiceProvider Provider');
  }

  setNavController(navCtrl) {
    this.navCtrl = navCtrl;
  }

  processPaymentCart(cartList) {
    this.loading.show();

    let dateCreated = new Date();
    firebase.database().ref('BookstoreItems/' + dateCreated.toISOString().split('.')[0]).set({
      createdDate: cartList.createdDate,
      cartList: cartList.cartList,
    });
    localStorage.clear();
    this.loading.hide();
    this.navCtrl.push(SelectCategoryPage);
  }

}
