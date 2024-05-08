import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartItems: any[] = [];

  addToCart(product:any) {
    this.cartItems.push(product);
  }

  removeItem(index: number) {
    if (index >= 0 && index < this.cartItems.length) {
      this.cartItems.splice(index, 1);
    }
  }

  getCartItems() {
    return this.cartItems; 
  }

}
