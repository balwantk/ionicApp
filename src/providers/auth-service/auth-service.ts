import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthServiceProvider {

  private currentUser: firebase.User;
 
  constructor(private angFireAuth: AngularFireAuth) {
    console.log('Hello AuthServiceProvider Provider');
    angFireAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
  }
  get authenticated(): boolean{
  	return this.currentUser !== null;
  }

  signInWithFacebook(): firebase.Promise<any>{
  	return this.angFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  signOut(): void{
  	if (this.authenticated){
	  	console.log(this.currentUser.displayName);
	  	this.angFireAuth.auth.signOut();
	  	console.log(this.currentUser.displayName);
	}else{
		console.log("Already logged out");
	}
  }

  displayName(): string{
  	if(this.currentUser !== null){
      return this.currentUser.displayName;  	
  	}
  	else{
  		return ' ';
  	}
  }
}
