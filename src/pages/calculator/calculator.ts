import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { PaymentPage } from '../payment/payment';
import { DonePage } from '../done/done';
import { SelectCategoryPage } from '../select-category/select-category';
import { NotesPage } from '../notes/notes';
import { StationeryPage } from '../stationery/stationery';
import { PenPage } from '../pen/pen';
import { NotebookPage } from '../notebook/notebook';
import { ClearFilePage } from '../clear-file/clear-file';
import { StaplerPage } from '../stapler/stapler';
import { ElectronicsPage } from '../electronics/electronics';
import { ThumbdrivePage } from '../thumbdrive/thumbdrive';

@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html'
})
export class CalculatorPage {

  public sendParam = {
    "venue": "Electronics",
    "type": "Calculator",
    "price": 0,
    "quantity": "",
    "brand": ""
  };

  public quanList = [1, 2, 3, 4, 5];
  public brandList = ["Casio", "Sharp"];

  constructor(public navCtrl: NavController) {
  }

  cartSubmit(cartData) {
    if (cartData.valid) {
      this.sendParam.price = 3 * parseFloat(this.sendParam.quantity);
      this.navCtrl.push(CartPage, { cartData: this.sendParam });
    }
  }

}
