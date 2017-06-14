import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'; 


/**
 * Generated class for the OrdersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

  placedOrders: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private angFireDB: AngularFireDatabase) {
  	this.placedOrders = this.angFireDB.list('/Orders');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

  
}

