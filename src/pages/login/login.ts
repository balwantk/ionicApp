import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  token: any
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signInWithFacebook():void{
  	this.authService.signInWithFacebook()
  		.then(() => this.onSignInSuccess()).then(()=>{
  			this.navCtrl.setRoot(MenuPage);
  		});
  }

  private onSignInSuccess():void{
  	console.log("Facebook display name", this.authService.displayName());
  	alert("Signed in as" + this.authService.displayName());
  }

  signOutFromFacebook():void{
  	this.authService.signOut();
  }
}

