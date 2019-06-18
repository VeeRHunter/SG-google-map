import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-clear-file',
  templateUrl: 'clear-file.html'
})
export class ClearFilePage {

  public sendParam = {
    "venue": "Stationery",
    "type": "ClearFile",
    "price": 0,
    "quantity": "",
    "color": ""
  };

  public quanList = [1, 2, 3, 4, 5];
  public colList = ["Black", "Pink", "Red", "Green", "Yellow"];

  constructor(public navCtrl: NavController) {
  }

  cartSubmit(cartData) {
    if (cartData.valid) {
      this.sendParam.price = 7 * parseFloat(this.sendParam.quantity);
      this.navCtrl.push(CartPage, { cartData: this.sendParam });
    }
  }

}
