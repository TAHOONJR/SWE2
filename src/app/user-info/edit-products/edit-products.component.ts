import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit {

  constructor( private DataService : DataService , private http: HttpClient , private formBuilder: FormBuilder) { }

  products : any ;

  productForm : any ;
  isFormSubmitted = false;


  get formControls() {
    return this.productForm.controls;
  }

  addProduct() {
    this.isFormSubmitted = true;

    if (this.productForm.invalid) {
      return;
    }

    const postData = this.productForm.value;

    this.http.post<any>('http://localhost:8080/items/mClothing', postData).subscribe({
      next: (response) => {
        console.log('POST request successful', response);
        // Reset form or perform other actions as needed
        this.productForm.reset();
        this.isFormSubmitted = false;
      },
      error: (error) => {
        console.error('Error:', error);
        // Handle error
      }
    });
  }

  deleteProduct() {
    console.log('done')
  }

  ngOnInit(): void {

    this.DataService.getmClothing().subscribe({
      next:(data)=>{
        this.products = data ;
        console.log(this.products);
      }
    })

    this.productForm = this.formBuilder.group({
      productId: ['', Validators.required],
      productName: ['', Validators.required],
      productPrice: ['', Validators.required],
      productImage: ['', Validators.required],
      productCategory: ['', Validators.required],
      productDescription: ['', Validators.required]
    });


    // const postData = {
    //   id: "6",
    //   description: "DESC",
    //   name: "ay7aga",
    //   price: 99.99,
    //   image: "1",
    //   category: "m"
    // };

    // // Send POST request to localhost:8080/items/mClothing
    // this.http.post<any>('http://localhost:8080/items/mClothing', postData).subscribe({
    //   next: (response) => {
    //     console.log('POST request successful', response);
    //     // Handle response as needed
    //   },
    //   error: (error) => {
    //     console.error('Error:', error);
    //     // Handle error
    //   }
    // });
    
  }


}
