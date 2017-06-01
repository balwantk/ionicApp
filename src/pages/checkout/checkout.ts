import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CheckoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  cart: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
   }

  ionViewDidLoad() {
  	console.log("CheckoutPage loaded Helo");
  	this.cart = this.navParams.get('cart');

  	console.log(this.cart);
  	this.logCart();
  }

  closeModal(){
  	this.viewCtrl.dismiss();
  }

  logCart(){
  	for(let i = 0; i < this.cart.length; i++){
  		console.log(this.cart[i].name);
  	}
  }

  get cartTotal(){
  	let sum = 0;
  	if(this.cart.length == 0){
  		return 0;
  	}
  	for(let i = 0; i < this.cart.length; i++){
		sum = sum + parseInt(this.cart[i].price);	
	}
  	console.log(sum);
  	return sum;
  }
  removeFromCart(item){
	for(let i = 0; i < this.cart.length; i++){
		if(this.cart[i].name == item.name){
			this.cart.splice(i, 1);
			return;
		}
	}
  }

}
