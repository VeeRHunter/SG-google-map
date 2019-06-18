import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { PaymentPage } from '../payment/payment';
import { DonePage } from '../done/done';
import { SelectCategoryPage } from '../select-category/select-category';
import { NotesPage } from '../notes/notes';
import { StationeryPage } from '../stationery/stationery';
import { PenPage } from '../pen/pen';
import { ClearFilePage } from '../clear-file/clear-file';
import { StaplerPage } from '../stapler/stapler';
import { ElectronicsPage } from '../electronics/electronics';
import { CalculatorPage } from '../calculator/calculator';
import { ThumbdrivePage } from '../thumbdrive/thumbdrive';

@Component({
  selector: 'page-notebook',
  templateUrl: 'notebook.html'
})
export class NotebookPage {

  public sendParam = {
    "venue": "Stationery",
    "type": "Notebook",
    "price": 0,
    "quantity": "",
    "color": "",
    "size": ""
  };

  public quanList = [1, 2, 3, 4, 5];
  public colList = ["Pink", "Black", "Red", "Yellow", "Orange"];
  public sizeList = ["A3", "A4", "A5"];

  constructor(public navCtrl: NavController) {
  }

  cartSubmit(cartData) {
    if (cartData.valid) {
      this.sendParam.price = 6 * parseFloat(this.sendParam.quantity);
      this.navCtrl.push(CartPage, { cartData: this.sendParam });
    }
  }
}
