import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   users: { first_name: string, last_name : string , email: string , phone : number , password: string}[] = [
    { first_name: 'Admin', last_name: 'Mohamed', email: 'info@acmecode-eg.com', phone: 1124599015, password: '111'},
  ];

  constructor(private router: Router) {
  }

    registerErrorMessage = 'Phone already exists .' ;
    loginErrorMessage = 'Account not found .' ;
    isLogin = false ;
    user : any ;
    userIndex : number = 0 ;

    // Register a new user
    registerUser(user: { first_name: string, last_name : string , email: string , phone : number , password: string }): void {
      const phoneExists = this.users.some((u) => u.phone === user.phone);

      if (!phoneExists) {
        this.users.push(user);
        this.router.navigate(['/login']);
      }
      else {
        console.log('Phone already exists.');
        this.registerErrorMessage = 'Phone already exists .' ;
      }
      // You can also save user data to a server or a database here.
    }

        // Authenticate a user
    loginUser(phone: number, password: string): boolean {
      const user = this.users.find((u) => u.phone === phone);
      this.userIndex = this.users.findIndex((u) => u.phone === phone) ;  
      this.user = user ;
      
      if (user && user.password === password) {  
        return true;
      }

      return false;
    }
}
