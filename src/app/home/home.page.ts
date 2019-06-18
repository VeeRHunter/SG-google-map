import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MapServiceService } from '../map-service.service';
import { LoadingService } from '../loading.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public libData: any = {};
  public libList: any[];

  constructor(
    private navCtrl: NavController,
    private mapService: MapServiceService,
    private loading: LoadingService,
    private toast: ToastService,

  ) { }

  ngOnInit() {
    this.mapService.getLocationList().snapshotChanges().subscribe((result: any) => {
      this.loading.dismiss();
      console.log(result);
      this.libList = new Array();

      // tslint:disable-next-line:forin
      for (const listSup in result.payload.val()) {
        this.libList.push(result.payload.val()[listSup]);
      }
      console.log(result.payload.val());
      console.log(this.libList);
    });
  }

}
