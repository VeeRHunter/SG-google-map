import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesPage } from '../notes/notes';
import { CartPage } from '../cart/cart';
import { PaymentPage } from '../payment/payment';
import { DonePage } from '../done/done';
import { StationeryPage } from '../stationery/stationery';
import { PenPage } from '../pen/pen';
import { NotebookPage } from '../notebook/notebook';
import { ClearFilePage } from '../clear-file/clear-file';
import { StaplerPage } from '../stapler/stapler';
import { ElectronicsPage } from '../electronics/electronics';
import { CalculatorPage } from '../calculator/calculator';
import { ThumbdrivePage } from '../thumbdrive/thumbdrive';

@Component({
  selector: 'page-select-category',
  templateUrl: 'select-category.html'
})
export class SelectCategoryPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    let date = new Date();
    console.log(date.toDateString());
    console.log(date.toISOString());
    console.log(date.toLocaleDateString());
    console.log(date.toLocaleTimeString());
    console.log(date.toTimeString());
  }

  goToNotes(params) {
    if (!params) params = {};
    this.navCtrl.push(NotesPage);
  }

  goToCart(params) {
    if (!params) params = {};
    this.navCtrl.push(CartPage);
  }

  goToPayment(params) {
    if (!params) params = {};
    this.navCtrl.push(PaymentPage);
  }

  goToDone(params) {
    if (!params) params = {};
    this.navCtrl.push(DonePage);
  }

  goToSelectCategory(params) {
    if (!params) params = {};
    this.navCtrl.push(SelectCategoryPage);
  }

  goToStationery(params) {
    if (!params) params = {};
    this.navCtrl.push(StationeryPage);
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

  goToElectronics(params) {
    if (!params) params = {};
    this.navCtrl.push(ElectronicsPage);
  }

  goToCalculator(params) {
    if (!params) params = {};
    this.navCtrl.push(CalculatorPage);
  }

  goToThumbdrive(params) {
    if (!params) params = {};
    this.navCtrl.push(ThumbdrivePage);
  }

  gotoCartPage() {
    this.navCtrl.push(CartPage);
  }
}
