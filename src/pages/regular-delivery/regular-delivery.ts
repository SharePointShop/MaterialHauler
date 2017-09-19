import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController  } from 'ionic-angular';
import { AddWeightModal } from '../../modals/add-weight/add-weight';

/**
 * Generated class for the RegularDeliveryPage page.
 *
 */
@IonicPage({name: 'RegularDelivery', priority: 'high'})


@Component({
  selector: 'page-regular-delivery',
  templateUrl: 'regular-delivery.html',
})
export class RegularDeliveryPage {

  InitialDate: string = new Date().toISOString();
  items: string[] =  new Array();

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {

    //this.items = ['Terminator XXX', 'The Empire Strikes Back'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegularDeliveryPage');
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
} // RegularDeliveryPage