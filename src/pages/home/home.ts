import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegularDeliveryPage } from '../regular-delivery/regular-delivery';
import { CustomerDeliveryPage } from '../customer-delivery/customer-delivery';
import { OtherDutiesPage } from '../other-duties/other-duties';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToPage(page) {
    if(page =='RegularDelivery')
      this.navCtrl.push(RegularDeliveryPage);
    else if(page =='CustomerDelivery')
      this.navCtrl.push(CustomerDeliveryPage);
    else if(page == 'OtherDuties')
      this.navCtrl.push(OtherDutiesPage);
  }
}
