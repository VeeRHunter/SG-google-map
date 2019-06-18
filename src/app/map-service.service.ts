import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoadingService } from './loading.service';


@Injectable({
  providedIn: 'root'
})
export class MapServiceService {

  constructor(
    public angularfire: AngularFireDatabase,
    private loading: LoadingService,
  ) { }


  getLocationList() {
    this.loading.present();
    return this.angularfire.object('/locations/');
  }

}
