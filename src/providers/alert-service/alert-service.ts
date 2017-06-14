import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the AlertServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AlertServiceProvider {

  constructor(public alertCtrl: AlertController) {
    console.log('Hello AlertServiceProvider Provider');
  }
showAlert(alertTitle, alertMessage){
    let alert = this.alertCtrl.create({
        title: alertTitle,
        subTitle: alertMessage,
        buttons: ['OK']
    });
    alert.present();
  }

  showConfirm(item, result){
  	let confirm = this.alertCtrl.create({
  		title: "Place Order?",
  		message: "Do you want to order " + item.name + " for Rs. " + item.price + "?",
  		buttons: [
  			{
  				text: "Confirm",
  				handler: () =>{
  					console.log("Order Confirmed!");
  					result = true;
  					//this.cart.push(item);
            this.showAlert("Confirmed!", "Added " + item.name + " to cart.");
  				}  	
  			},
  			{
  				text: "Cancel",
  				handler: () => {
  					console.log("Order Cancelled!");
  					result = false;
  				}
  			}
  		]

  	});
  	confirm.present();	
  }
}
