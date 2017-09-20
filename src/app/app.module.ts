import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegularDeliveryPage } from '../pages/regular-delivery/regular-delivery';
import { CustomerDeliveryPage } from '../pages/customer-delivery/customer-delivery';
import { OtherDutiesPage } from '../pages/other-duties/other-duties';

import { AddWeightModal } from '../modals/add-weight/add-weight';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegularDeliveryPage,
    CustomerDeliveryPage,
    OtherDutiesPage,
    AddWeightModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegularDeliveryPage,
    CustomerDeliveryPage,
    OtherDutiesPage,
    AddWeightModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
