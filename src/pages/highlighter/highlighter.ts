import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-highlighter',
  templateUrl: 'highlighter.html'
})
export class HighlighterPage {

  public sendParam = {
    "venue": "Stationery",
    "type": "Highlighter",
    "price": 0,
    "quantity": "",
    "color": ""
  };

  public quanList = [1, 2, 3, 4, 5];
  public colList = ["Pink", "Blue", "Yellow", "Green", "Orange"];

  constructor(public navCtrl: NavController) {
  }

  cartSubmit(cartData) {
    if (cartData.valid) {
      console.log(this.sendParam)
      this.sendParam.price = 9 * parseFloat(this.sendParam.quantity);
      this.navCtrl.push(CartPage, { cartData: this.sendParam });
    }
  }

}
