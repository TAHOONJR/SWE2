import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder ,FormControl , Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(private _FormBuilder : FormBuilder , private _pageTitle : Title , private _users : UsersService) { }

  errorMessage = this._users.registerErrorMessage ;
  showError = false ;

  phonePattern = "^[01][0,1,2,5]{1}[0-9]{8}$";
  passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/ ;

  register : FormGroup = this._FormBuilder.group ({
    first_name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]) ,
    last_name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]) ,
    email : new FormControl(null,[Validators.required,Validators.email]) ,
    phone : new FormControl(null,[Validators.required , Validators.pattern(this.phonePattern)]) ,
    password : new FormControl(null,[Validators.required , Validators.pattern(this.passwordPattern)]) ,
  }) 

  registerForm() {
    var first_name = this.register.value.first_name;
    var last_name = this.register.value.last_name;
    var email = this.register.value.email;
    var phone = this.register.value.phone;
    var password = this.register.value.password;
    this.register.reset() ;
    if (this._users.users.some((u) => u.phone === phone)) {
      this.showError = true ;
    }
    else {
      this._users.registerUser({ first_name , last_name , email , phone , password});
    }
  }
 
  ngOnInit(): void {
    this._pageTitle.setTitle('A to Z | Register') ;
  }

}
