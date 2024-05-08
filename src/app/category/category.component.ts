import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private _ActivatedRoute :ActivatedRoute , private _DataService :DataService , private cartService:CartService , private _pageTitle : Title ) { }

  category : any ;
  products : any ;
  addedProducts: number[] = [];

  addToCart(product:any) {
    this.cartService.addToCart(product);
    this.addedProducts.push(product.id-1);
  }

  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe(params => {
      this.category = params.get('category');
      this._pageTitle.setTitle(`A to Z | ${this.category}`) ;
      this._DataService.getCategoryType(this.category).subscribe ({
        next:(data) => {
          this.addedProducts = [] ;
          this.products = data ;
        }
      })

    });

  }

}
