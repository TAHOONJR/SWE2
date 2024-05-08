import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ShowUsersComponent } from './user-info/show-users/show-users.component';
import { AddUserComponent } from './user-info/add-user/add-user.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { EditProductsComponent } from './user-info/edit-products/edit-products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CategoryComponent,
    CartComponent,
    UserInfoComponent,
    ShowUsersComponent,
    AddUserComponent,
    ProductComponent,
    FooterComponent,
    EditProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,

    HttpClientModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
