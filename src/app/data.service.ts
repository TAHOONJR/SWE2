import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient:HttpClient , private http: HttpClient) { }
  
  getmClothing () :Observable <any> {
    return this._HttpClient.get(`http://localhost:8080/items/mClothing`) ;
  } 
  
  getwClothing () :Observable <any> {
    return this._HttpClient.get(`http://localhost:8080/items/wClothing`) ;
  } 
  
  getjewelery () :Observable <any> {
    return this._HttpClient.get(`http://localhost:8080/items/jewelery`) ;
  } 
  
  getelectronics () :Observable <any> {
    return this._HttpClient.get(`http://localhost:8080/items/electronics`) ;
  } 

  getCategoryType (type : any) :Observable <any> {
    return this._HttpClient.get(`http://localhost:8080/items/${type}`) ;
  }  

  getSingleProduct (id : any , type  : any ) :Observable <any> {
    return this._HttpClient.get(`http://localhost:8080/items/${type}/${id}`) ;
  }  



  getCategories () :Observable <any> {
    return this._HttpClient.get(`https://fakestoreapi.com/products/categories`) ;
  }  

  // get countries api

  getCountries () :Observable <any> {
    return this._HttpClient.get(`https://restcountries.com/v3.1/all`) ;
  } 


}
