import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
import { CalculatorPage } from '../calculator/calculator';
import { ThumbdrivePage } from '../thumbdrive/thumbdrive';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  public savedCartList: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
  }

  ionViewDidLoad() {
    this.getCartData();
    this.setCartData();
  }

  getCartData() {
    this.savedCartList = new Array();
    let localCart = JSON.parse(localStorage.getItem('savedChartList'));
    if (localCart != null && localCart.length != 0) {
      for (let list of localCart) {
        this.savedCartList.push(list);
      }
    }
  }

  setCartData() {
    if (this.navParams.get('cartData') != null
      && typeof (this.navParams.get('cartData')) != "undefined") {
      let params = this.navParams.get('cartData');
      let enablePush = true;
      for (let list of this.savedCartList) {
        switch (params.venue) {
          case "Notes":
            if (list.venue == params.venue && list.school == params.school
              && list.module == params.module) {
              enablePush = false;
            }
            break;
          case "Stationery":
            if (list.venue == params.venue) {
              switch (params.type) {
                case "Pen":
                  if (params.color == list.color && params.type == list.type) {
                    list.quantity = params.quantity;
                    list.price = params.price;
                    enablePush = false;
                  }
                  break;
                case "Notebook":
                  if (params.color == list.color && params.size == list.size && params.type == list.type) {
                    list.quantity = params.quantity;
                    list.price = params.price;
                    enablePush = false;
                  }
                  break;
                case "ClearFile":
                  if (params.color == list.color && params.type == list.type) {
                    list.quantity = params.quantity;
                    list.price = params.price;
                    enablePush = false;
                  }
                  break;
                case "Stapler":
                  if (params.color == list.color && params.type == list.type) {
                    list.quantity = params.quantity;
                    list.price = params.price;
                    enablePush = false;
                  }
                  break;
                case "Highlighter":
                  if (params.color == list.color && params.type == list.type) {
                    list.quantity = params.quantity;
                    list.price = params.price;
                    enablePush = false;
                  }
                  break;
                default:
                  break;
              }
            }
            break;
          case "Electronics":
            if (list.venue == params.venue) {
              switch (params.type) {
                case "Calculator":
                  if (params.brand == list.brand) {
                    list.quantity = params.quantity;
                    list.price = params.price;
                    enablePush = false;
                  }
                  break;
                case "Thumbdrive":
                  if (params.brand == list.brand) {
                    list.quantity = params.quantity;
                    list.price = params.price;
                    enablePush = false;
                  }
                  break;
                default:
                  break;
              }
            }
            break;
          default:
            break;
        }
      }
      if (enablePush) {
        this.savedCartList.push(params);
      }
      console.log(this.savedCartList);
      localStorage.setItem('savedChartList', JSON.stringify(this.savedCartList));
    }
  }

  goToPayment() {
    this.navCtrl.push(PaymentPage, { cartData: this.savedCartList });
  }

  goToSelectCategory(params) {
    if (!params) params = {};
    this.navCtrl.push(SelectCategoryPage);
  }

  removeCart(index) {
    this.savedCartList.splice(index, 1);
    console.log(this.savedCartList);
    localStorage.setItem('savedChartList', JSON.stringify(this.savedCartList));
  }
}
