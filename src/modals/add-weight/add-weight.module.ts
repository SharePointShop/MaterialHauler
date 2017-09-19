import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AddWeightModal } from './add-weight';

@NgModule({
  declarations: [
    AddWeightModal,
  ],
  imports: [
    IonicPageModule.forChild(AddWeightModal),
  ],
  entryComponents: [
    AddWeightModal,
  ]
})
export class AddWeightModalModule {}