import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-stapler',
  templateUrl: 'stapler.html'
})
export class StaplerPage {

  public sendParam = {
    "venue": "Stationery",
    "type": "Stapler",
    "price": 0,
    "quantity": "",
    "color": ""
  };

  public quanList = [1, 2, 3, 4];
  public colList = ["Black", "White", "Orange"];

  constructor(public navCtrl: NavController) {
  }

  cartSubmit(cartData) {
    if (cartData.valid) {
      this.sendParam.price = 8 * parseFloat(this.sendParam.quantity);
      this.navCtrl.push(CartPage, { cartData: this.sendParam });
    }
  }


}
