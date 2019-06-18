import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = false;
  public loading;

  constructor(
    public loadingCtrl: LoadingController
  ) {

  }

  async present() {
    if (this.isLoading) {
      return;
    } else {
      this.isLoading = true;
      return await this.loadingCtrl.create({
        message: 'Please wait...'
      }).then(a => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
    }
  }

  async dismiss() {
    if (this.isLoading) {
      this.isLoading = false;
      return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
    } else {
      return;
    }
  }
}
