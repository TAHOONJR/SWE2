import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AuthGuard } from './auth.guard';
import { ShowUsersComponent } from './user-info/show-users/show-users.component';
import { AddUserComponent } from './user-info/add-user/add-user.component';
import { ProductComponent } from './product/product.component';
import { EditProductsComponent } from './user-info/edit-products/edit-products.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:'home' , component:HomeComponent} ,
  {path:'login' , component:LoginComponent} ,
  {path:'register' , component:RegisterComponent} ,
  {path:'category/:category',component:CategoryComponent} ,
  {path:'product/:productId/:productType',component:ProductComponent} ,
  {path:'cart',component:CartComponent} ,
  {path:'u/:phone', canActivate:[AuthGuard] , component:UserInfoComponent , children : [
    {path:'showUsers',component:ShowUsersComponent} ,
    {path:'addUsers',component:AddUserComponent} ,
    {path:'editProducts',component:EditProductsComponent}
  ]} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
