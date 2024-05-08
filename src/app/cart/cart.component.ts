import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: any[];
  totalPrice = 0 ;
  finalPrice = 0 ;
  isLogin = false ;
  userInfo : any = { first_name: '', last_name: '', email: '', phone: 0, password: ''};
  countries : any ;
  clintCountry = '' ;
  time = new Date() ;

  constructor(private cartService: CartService , private _users : UsersService , private _DataService : DataService , private router: Router , private _pageTitle : Title ) {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
    this.totalPrice = 0 ;
    this.finalPrice = 0 ;
    this.calcTotalPrice() ;
  }

  calcTotalPrice () {
    for (let i = 0 ; i< this.cartService.getCartItems().length ; i++) {
      this.totalPrice += this.cartItems[i].price ;
      this.finalPrice += this.cartItems[i].price ;
    }
    if (this.totalPrice >= 500) {
      this.finalPrice = this.finalPrice - this.finalPrice*0.1 ;
    }
    if (this.time.getDay()==5) {
      this.finalPrice = this.finalPrice - this.finalPrice*0.2 ;
    }
    if (this._users.isLogin == true && this.userInfo.phone == 1124599015 ) {
      this.finalPrice = this.finalPrice - this.finalPrice*0.5 ;
    }
  }

  proceed () {
    if( this._users.isLogin == true ) {
      this.isLogin = true ;
      this.userInfo = this._users.user ;
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  getCountry ( country : any ) {
    this.clintCountry = country ;
  }

  async sendOrderDetails () {
    print() ;

    var templateParams = {
      first_name: this.userInfo.first_name,
      last_name: this.userInfo.last_name,
      email: this.userInfo.email,
      phone: this.userInfo.phone,
      country: this.clintCountry,
      orders: this.cartItems.map(obj => obj.title).join(' , ') ,
      total_price: this.finalPrice + '$' ,
    };

    emailjs.init('HszSuUZ0KZsNC4kwR') ;
    emailjs.send("service_m9014nf","template_mwjm8zj",templateParams).then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
    console.log('error',error);
        var url = "https://wa.me/+201124599015?text="
        + "Hello " + 'Mohamed , this message from A To Z Store' + "%0a"
        + "First Name : " + templateParams.first_name + "%0a"
        + "Last Name : " + templateParams.last_name + "%0a"
        + "Phone : " + templateParams.phone + "%0a"
        + "Email : " + templateParams.email + "%0a"
        + "Email : " + templateParams.country + "%0a"
        + "Orders : " + templateParams.orders + "%0a"
        + "Total Price : " + templateParams.total_price + "%0a"
      window.open(url,'_blank')?.focus() ;
   });
  }

  ngOnInit(): void {
    this._pageTitle.setTitle('A to Z | Cart') ;      
    
    if( this._users.isLogin == true ) {
      this.isLogin = true ;
      this.userInfo = this._users.user ;
    }

    this.calcTotalPrice() ;
    
    this._DataService.getCountries().subscribe({
      next:(data)=>{
        this.countries = data ;
      }
    })

  }

}
