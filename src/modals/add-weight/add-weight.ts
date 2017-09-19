
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'add-weight.html'
})
export class AddWeightModal {
  myParam: string;
  Weight: number;
  Material: string;

  constructor(public viewCtrl: ViewController, params: NavParams) 
  {
       // this.myParam = params.get('myParam');
        this.Weight = null;

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addItem() {
    this.viewCtrl.dismiss({weight: this.Weight, material: this.Material});
  }
}