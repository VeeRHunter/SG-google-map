import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DonePage } from '../done/done';
import { SelectCategoryPage } from '../select-category/select-category';
import { NotesPage } from '../notes/notes';
import { CartPage } from '../cart/cart';
import { StationeryPage } from '../stationery/stationery';
import { PenPage } from '../pen/pen';
import { NotebookPage } from '../notebook/notebook';
import { ClearFilePage } from '../clear-file/clear-file';
import { StaplerPage } from '../stapler/stapler';
import { ElectronicsPage } from '../electronics/electronics';
import { CalculatorPage } from '../calculator/calculator';
import { ThumbdrivePage } from '../thumbdrive/thumbdrive';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  public totalPrice = 0;
  public paymentDate: any;

  public cartList: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public serviceProvider: ServiceProvider,
  ) {
  }

  ionViewDidLoad() {
    this.cartList = new Array();
    if (this.navParams.get('cartData') != null
      && typeof (this.navParams.get('cartData')) != "undefined") {
      let params = this.navParams.get('cartData');
      for (let list of params) {
        this.totalPrice = this.totalPrice + list.price;
        this.cartList.push(list);
      }
    }
    // this.serviceProvider.setNavController(this.navCtrl);
    // console.log(this.totalPrice);
    // console.log(this.cartList);
  }

  cartSubmit(submitData) {
    if (submitData.valid) {
      let sendParam = { "createdDate": this.paymentDate, "cartList": this.cartList };
      this.navCtrl.push(DonePage, { sendParam: sendParam });
      // this.serviceProvider.processPaymentCart(this.paymentDate, this.cartList);
    }
  }

  goToDone(params) {
    if (!params) params = {};
    this.navCtrl.push(DonePage);
  }
}
