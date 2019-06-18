import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { PaymentPage } from '../payment/payment';
import { DonePage } from '../done/done';
import { SelectCategoryPage } from '../select-category/select-category';
import { StationeryPage } from '../stationery/stationery';
import { PenPage } from '../pen/pen';
import { NotebookPage } from '../notebook/notebook';
import { ClearFilePage } from '../clear-file/clear-file';
import { StaplerPage } from '../stapler/stapler';
import { ElectronicsPage } from '../electronics/electronics';
import { CalculatorPage } from '../calculator/calculator';
import { ThumbdrivePage } from '../thumbdrive/thumbdrive';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {

  public schoolList = [
    "School Of Business Management",
    "School Of Information Technology",
    "School Of Health & Social Sciences",
    "School Of Engineering"
  ]
  public moduleList: any[];

  public notesParam = {
    "venue": "Notes",
    "school": "",
    "price": 10,
    "module": ""
  };

  constructor(public navCtrl: NavController) {
  }

  goToCart(params) {
    if (!params) params = {};
    this.navCtrl.push(CartPage);
  }

  selectSchool() {
    switch (this.notesParam.school) {
      case "School Of Business Management":
        this.moduleList = ["Accounting", "Finance"];
        break;
      case "School Of Information Technology":
        this.moduleList = ["Coding", "html"];
        break;
      case "School Of Engineering":
        this.moduleList = ["Mechatronics", "aerospace"];
        break;
      case "School Of Health & Social Sciences":
        this.moduleList = ["nursing", "oral health"];
        break;
      default:
        break;
    }
  }

  noteSubmit(noteData) {
    if (noteData.valid) {
      this.navCtrl.push(CartPage, { cartData: this.notesParam });
    }
  }

}
