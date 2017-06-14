import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, MenuController, ViewController } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';
import { LoginPage } from '../login/login';
import { OrdersPage } from '../orders/orders';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  pages: any;
  cart: any =[];
  menuItems: FirebaseListObservable<any[]>;
  //menuItems: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public modalCtrl: ModalController,
    private angularFireDB: AngularFireDatabase,
    private authService: AuthServiceProvider,
    private menuCtrl: MenuController,
    private viewCtrl: ViewController) {
  	/*this.menuItems = [
  		{name: "Pizza", details: "Cheese", price: "100", image: "../../assets/pictures/pizza-slice.png"},
  		{name: "Pasta", details: "Red Sauce", price: "105", image: "../../assets/pictures/pasta.jpeg"},
  		{name: "Ice Cream", details: "Vanilla", price: "50", image: "../../assets/pictures/icecream.png"}
  	];*/
    this.menuItems = angularFireDB.list('/menuItems');
    this.pages = [
    {"title": "Menu", "component": MenuPage, "id": "MenuPage"},
    {"title": "My Orders", "component": OrdersPage, "id": "OrdersPage"}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  showAlert(alertTitle, alertMessage){
    let alert = this.alertCtrl.create({
        title: alertTitle,
        subTitle: alertMessage,
        buttons: ['OK']
    });
    alert.present();
  }

  showConfirm(item){
  	let confirm = this.alertCtrl.create({
  		title: "Place Order?",
  		message: "Do you want to order " + item.name + " for Rs. " + item.price + "?",
  		buttons: [
  			{
  				text: "Confirm",
  				handler: () =>{
  					console.log("Order Confirmed!");
  					this.cart.push(item);
            this.showAlert("Confirmed!", "Added " + item.name + " to cart.");
  				}  	
  			},
  			{
  				text: "Cancel",
  				handler: () => {
  					console.log("Order Cancelled!");
  				}
  			}
  		]

  	});
  	confirm.present();	
  }

  whenClicked(item){
  	console.log(item.price);
  	this.showConfirm(item);
	console.log(this.cart);
  }

  goToCheckout(){
    let data = {
      cart: this.cart,
    };
    let modal = this.modalCtrl.create(CheckoutPage, data);
    modal.present();

//  		this.navCtrl.push(CheckoutPage, this.cart);
     }
 signOutFromFacebook():void{
    this.authService.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  openMenu(){
    this.menuCtrl.open();
  }

  openPage(page){
    let current = this.viewCtrl.name;
    if(current === page.id)
       console.log("already here");
    else
      this.navCtrl.push(page.component);
  }


 addMenuItem(){
   this.menuItems.push({
     "name":"Sandwich",
     "image": "not there",
     "price": "40",
     details: "Tomato"
   });
 }

}
