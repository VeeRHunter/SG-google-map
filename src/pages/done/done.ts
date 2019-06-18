import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SelectCategoryPage } from '../select-category/select-category';
import { NotesPage } from '../notes/notes';
import { CartPage } from '../cart/cart';
import { PaymentPage } from '../payment/payment';
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
  selector: 'page-done',
  templateUrl: 'done.html'
})
export class DonePage {

  public sendParam: any;
  public collectionDate: any;

  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    public serverProvider: ServiceProvider,
  ) {
  }

  ionViewDidLoad() {
    this.sendParam = this.navParam.get('sendParam');
    this.collectionDate = this.sendParam.createdDate;
    this.serverProvider.setNavController(this.navCtrl);
  }

  cartSubmit(cartData) {
    // if (cartData.valid) {
    this.serverProvider.processPaymentCart(this.sendParam);
    // }
  }
}
