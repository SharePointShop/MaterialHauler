import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OtherDutiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name: 'OtherDuties', priority: 'high'})
@Component({
  selector: 'page-other-duties',
  templateUrl: 'other-duties.html',
})
export class OtherDutiesPage {

  InitialDate: string = new Date().toISOString();
  StartTime: string = new Date().toLocaleTimeString();
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherDutiesPage');
  }

}
