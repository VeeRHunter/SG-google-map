import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PenPage } from '../pen/pen';
import { CartPage } from '../cart/cart';
import { PaymentPage } from '../payment/payment';
import { DonePage } from '../done/done';
import { SelectCategoryPage } from '../select-category/select-category';
import { NotesPage } from '../notes/notes';
import { ElectronicsPage } from '../electronics/electronics';
import { CalculatorPage } from '../calculator/calculator';
import { ThumbdrivePage } from '../thumbdrive/thumbdrive';
import { NotebookPage } from '../notebook/notebook';
import { ClearFilePage } from '../clear-file/clear-file';
import { StaplerPage } from '../stapler/stapler';
import { HighlighterPage } from '../highlighter/highlighter';

@Component({
  selector: 'page-stationery',
  templateUrl: 'stationery.html'
})
export class StationeryPage {

  constructor(public navCtrl: NavController) {
  }
  
  goToPen(params) {
    if (!params) params = {};
    this.navCtrl.push(PenPage);
  }

  goToNotebook(params) {
    if (!params) params = {};
    this.navCtrl.push(NotebookPage);
  }

  goToClearFile(params) {
    if (!params) params = {};
    this.navCtrl.push(ClearFilePage);
  }

  goToStapler(params) {
    if (!params) params = {};
    this.navCtrl.push(StaplerPage);
  }

  gotoHighlighter() {
    this.navCtrl.push(HighlighterPage);
  }
}
