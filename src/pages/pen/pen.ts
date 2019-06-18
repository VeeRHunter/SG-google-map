import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { PaymentPage } from '../payment/payment';
import { DonePage } from '../done/done';
import { SelectCategoryPage } from '../select-category/select-category';
import { NotesPage } from '../notes/notes';
import { StationeryPage } from '../stationery/stationery';
import { NotebookPage } from '../notebook/notebook';
import { ClearFilePage } from '../clear-file/clear-file';
import { StaplerPage } from '../stapler/stapler';
import { ElectronicsPage } from '../electronics/electronics';
import { CalculatorPage } from '../calculator/calculator';
import { ThumbdrivePage } from '../thumbdrive/thumbdrive';

@Component({
  selector: 'page-pen',
  templateUrl: 'pen.html'
})
export class PenPage {

  public sendParam = {
    "venue": "Stationery",
    "type": "Pen",
    "price": 0,
    "quantity": "",
    "color": ""
  };

  public quanList = [1, 2, 3, 4, 5];
  public colList = ["Black", "Blue", "Green", "Pink"];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {

  }

  goToCart(params) {
    if (!params) params = {};
    this.navCtrl.push(CartPage);
  }

  cartSubmit(cartData) {
    if (cartData.valid) {
      this.sendParam.price = 10 * parseFloat(this.sendParam.quantity);
      this.navCtrl.push(CartPage, { cartData: this.sendParam });
    }
  }

}
