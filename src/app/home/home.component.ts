import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import { Title } from '@angular/platform-browser';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _DataService:DataService , private cartService:CartService , private _pageTitle : Title , private _UsersService : UsersService) { 
    setInterval(() => {
      if (this._UsersService.isLogin) {
        if (this._UsersService.user.phone == 1141770634) {
          this.isAdmin = true ;
        }
      }
      else {
        this.isAdmin = false ;  
      }

    }, 500);
  }

  Categories : any ;
  productsMClothing : any ;
  productsWClothing : any ;
  productsJewelery : any ;
  productsElectronics : any ;
  addedProducts: number[] = [];
  isLogin = this._UsersService.isLogin ;
  isAdmin = false ;
  noItemsForSearch = false ;

  categoriesImages = ['assets/categories/Electronics_2.jpg' , 'assets/categories/jewelry.jpg' , 'assets/categories/clothes.jpg' , 'assets/categories/clothes.jpg']


  addToCart(product:any) {
    this.cartService.addToCart(product);
    this.addedProducts.push(product.id-1);
  }

  remove (index : number) {
    this.productsMClothing.splice(index,1) ;   
  }


  searchProducts(searchTerm: string) {
    searchTerm = searchTerm.toLowerCase();

    if (this.productsMClothing.length==0) {
      this.noItemsForSearch = true ;
    }

    if (searchTerm=='') {
      this.noItemsForSearch = false ;
      this._DataService.getmClothing().subscribe({
        next:(data)=>{
          this.productsMClothing = data ;
        }
      })
    }
    
    this.productsMClothing = this.productsMClothing.filter((value:any)=> {
      return value.title.toLowerCase().includes(searchTerm)
    }
    );

  }

  ngOnInit(): void {
    
    this._pageTitle.setTitle('A to Z | Home') ;  
    
    this._DataService.getCategories().subscribe({
      next:(data)=> {
        if (data.length === this.categoriesImages.length) {
          this.Categories = data.map((category:any, index:any) => {
            return { category: category, src: this.categoriesImages[index] };
          });
        }
      }
    })

    this._DataService.getmClothing().subscribe({
      next:(data)=>{
        this.productsMClothing = data ;
        console.log(data);  
      }
    })

    this._DataService.getwClothing().subscribe({
      next:(data)=>{
        this.productsWClothing = data ;
        console.log(data);  
      }
    })

    this._DataService.getjewelery().subscribe({
      next:(data)=>{
        this.productsJewelery = data ;
        console.log(data);  
      }
    })

    this._DataService.getelectronics().subscribe({
      next:(data)=>{
        this.productsElectronics = data ;
        console.log(data);  
      }
    })

    // this._DataService.testBackend().subscribe((items) => {
    //   console.log('Items:', items);
    // });
    
  }

}
