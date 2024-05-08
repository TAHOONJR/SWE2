import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private _ActivatedRoute :ActivatedRoute , private _DataService :DataService , private cartService:CartService , private _pageTitle : Title ) { }

  productId : any ;
  productType : any ;
  productData : any ;
  added = false ;

  addToCart() {
    this.cartService.addToCart(this.productData);
     this.added = true ;
  }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('productId');
      this.productType = params.get('productType');
      console.log(this.productType);
  
      // Convert productType based on the URL parameter
      if (this.productType == 'm') {
        this.productType = 'mClothing';
      }
      else if (this.productType == 'w') {
        this.productType = 'wClothing';
      }
      else if (this.productType == 'j') {
        this.productType = 'jewelery';
      }
      else {
        this.productType = 'electronics';
      }
  
      // Get product data based on the productId and converted productType
      this._DataService.getSingleProduct(this.productId, this.productType).subscribe ({
        next: (data) => {
          this.productData = data;
          this._pageTitle.setTitle(`A to Z | ${this.productData.name}`);
        }
      });
    });
  }
  

}
