import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { CheckoutPage } from '../pages/checkout/checkout';
import { LoginPage } from '../pages/login/login';
import { OrdersPage } from '../pages/orders/orders';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';


//for firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertServiceProvider } from '../providers/alert-service/alert-service';
export const firebaseConfig = {
    apiKey: "AIzaSyDQwg1YJg5GjMfGnfbCW4HA-H5bhF5mZGg",
    authDomain: "ionicproject-b5c2d.firebaseapp.com",
    databaseURL: "https://ionicproject-b5c2d.firebaseio.com",
    projectId: "ionicproject-b5c2d",
    storageBucket: "ionicproject-b5c2d.appspot.com",
    messagingSenderId: "86465225641"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    CheckoutPage,
    LoginPage,
    OrdersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    CheckoutPage,
    LoginPage, 
    OrdersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabaseModule,
    AuthServiceProvider,
    AngularFireAuth,
    AlertServiceProvider
    
  ]
})
export class AppModule {}
