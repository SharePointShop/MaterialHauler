import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddWeightModal } from '../../modals/add-weight/add-weight';

/**
 * Generated class for the CustomerDeliveryPage page.

 */
@IonicPage({name: 'CustomerDelivery'})
@Component({
  selector: 'page-customer-delivery',
  templateUrl: 'customer-delivery.html',
})
export class CustomerDeliveryPage {

  InitialDate: string = new Date().toISOString();
  StartTime: string = new Date().toLocaleTimeString();
  items: string[] =  new Array();
  
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerDeliveryPage');
  }

  OpenAddWeightModal() {
    let modal = this.modalCtrl.create(AddWeightModal);
    modal.onDidDismiss(data => {
      let result = '';
      if(data['weight'] != null || data['material'] != null)
        result =  data.weight + ' tons of ' + data.material;
      else if(data['weight'] != null)
        result = data.weight;
      else if(data['material'] != null)
      result = data.material;
      
      this.items.push(result);

    });
    modal.present();
  }

  DeleteWeight(title){
    var idx = this.items.indexOf(title);
    if(idx == -1) return;
    if (idx > -1) {
      this.items.splice(idx, 1);
    }
  }
}
