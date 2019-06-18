import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalculatorPage } from '../calculator/calculator';
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
import { ThumbdrivePage } from '../thumbdrive/thumbdrive';

@Component({
  selector: 'page-electronics',
  templateUrl: 'electronics.html'
})
export class ElectronicsPage {

  constructor(public navCtrl: NavController) {
  }
  goToCalculator(params){
    if (!params) params = {};
    this.navCtrl.push(CalculatorPage);
  }goToCart(params){
    if (!params) params = {};
    this.navCtrl.push(CartPage);
  }goToPayment(params){
    if (!params) params = {};
    this.navCtrl.push(PaymentPage);
  }goToDone(params){
    if (!params) params = {};
    this.navCtrl.push(DonePage);
  }goToSelectCategory(params){
    if (!params) params = {};
    this.navCtrl.push(SelectCategoryPage);
  }goToNotes(params){
    if (!params) params = {};
    this.navCtrl.push(NotesPage);
  }goToStationery(params){
    if (!params) params = {};
    this.navCtrl.push(StationeryPage);
  }goToPen(params){
    if (!params) params = {};
    this.navCtrl.push(PenPage);
  }goToNotebook(params){
    if (!params) params = {};
    this.navCtrl.push(NotebookPage);
  }goToClearFile(params){
    if (!params) params = {};
    this.navCtrl.push(ClearFilePage);
  }goToStapler(params){
    if (!params) params = {};
    this.navCtrl.push(StaplerPage);
  }goToElectronics(params){
    if (!params) params = {};
    this.navCtrl.push(ElectronicsPage);
  }goToThumbdrive(params){
    if (!params) params = {};
    this.navCtrl.push(ThumbdrivePage);
  }
}
