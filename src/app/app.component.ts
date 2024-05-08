import { Component } from '@angular/core';
import { CartService } from './cart.service';

declare let AOS : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sa1Project';

  numberOfOrders : number = 0 ;

  constructor(private cartService: CartService) {
    setInterval(() => {
      this.numberOfOrders = this.cartService.getCartItems().length;
    }, 500);
  }

  onActivate() {
    window.scroll(0,0) ;
  }

  toTop () {
    window.scrollTo({
      top : 0 ,
      behavior : 'smooth'
    })
  }
  
  scr() {
    if (window.scrollY>=400) {
      document.querySelector('.toTop')?.classList.add('top-show') ;
    }
    else {
      document.querySelector('.toTop')?.classList.remove('top-show') ;
    }
  }


  ngOnInit(): void {
    AOS.init() ;
  }

}
