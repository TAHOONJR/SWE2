import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder ,FormControl , Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _FormBuilder : FormBuilder , private _pageTitle : Title , private _users : UsersService , private router: Router) { }

  errorMessage = this._users.loginErrorMessage ; 
  showError = false ;

  login : FormGroup = this._FormBuilder.group ({
    phone : new FormControl(null,[Validators.required]) ,
    password : new FormControl(null,[Validators.required]) ,
  }) 

  loginForm() {
    var phone = this.login.value.phone ;
    var password = this.login.value.password ;
    // this._users.loginUser(phone , password);
    if (this._users.loginUser(phone , password)==true) {
      this.router.navigate(['/home']);
      this.login.reset() ;
      this._users.isLogin = true ;
    }
    else {
      this.showError = true ;
    }
  }

  ngOnInit(): void { 
    this._pageTitle.setTitle('A to Z | Login') ;

    if (this._users.isLogin==true) {
      this.router.navigate(['/home']) ;
    }
  }

}
