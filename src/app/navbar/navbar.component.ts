import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  numberOfOrders : number = 0 ;
  isLogin = false ;
  user : any ;

  constructor(private cartService: CartService , private _users : UsersService , private _Router : Router) {
    setInterval(() => {
      this.numberOfOrders = this.cartService.getCartItems().length;

      if (this._users.isLogin==true) {
        this.isLogin = true ;
        this.user = this._users.user ;
      }

    }, 500);
  }

  logOut() {
    this._users.isLogin = false ;
    this.isLogin = false ;
    this._Router.navigate(['/home']) ;
  }

  ngOnInit(): void {   
  }

}
