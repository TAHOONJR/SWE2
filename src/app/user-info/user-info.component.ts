import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder ,FormControl , Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor( private _UsersService : UsersService , private _FormBuilder : FormBuilder) { 
  }

  userInfo : any ;
  userIndex = 0 ;

  phonePattern = "^[01][0,1,2,5]{1}[0-9]{8}$";
  passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/ ;

  isAdmin = false ;

  showError = false ;
  showSavedMessage = false;
  errorMessage = this._UsersService.registerErrorMessage ;

  register : FormGroup = this._FormBuilder.group ({
    first_name: new FormControl(this._UsersService.user.first_name,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]) ,
    last_name: new FormControl(this._UsersService.user.last_name,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]) ,
    email : new FormControl(this._UsersService.user.email,[Validators.required,Validators.email]) ,
    phone : new FormControl(this._UsersService.user.phone,[Validators.required , Validators.pattern(this.phonePattern)]) ,
    password : new FormControl(this._UsersService.user.password,[Validators.required , Validators.pattern(this.passwordPattern)]) ,
  }) 

  save() {
    var first_name = this.register.value.first_name;
    var last_name = this.register.value.last_name;
    var email = this.register.value.email;
    var phone = this.register.value.phone;
    var password = this.register.value.password;

      const usersWithPhone = this._UsersService.users.filter((user, index) => {
        return user.phone === phone && index !== this.userIndex;
      });

      if (usersWithPhone.length > 0) {
        this.showError = true ;
      } 
      else {
        this._UsersService.users[this.userIndex] = { first_name , last_name , email , phone , password} ;
        this.showError = false ;
        this.showTempMessage() ;
      }

  }

  showTempMessage() {
    this.showSavedMessage = true;

    setTimeout(() => {
      this.showSavedMessage = false;
    }, 1000); 
  }

  ngOnInit(): void {
    this.userInfo = this._UsersService.user ;
    this.userIndex = this._UsersService.userIndex ;    

    if (this.userInfo.phone==1124599015) {
      this.isAdmin = true ;
      this.passwordPattern = /.*/ ;
      this.register.get('password')?.setValidators([Validators.required,Validators.pattern(this.passwordPattern)]) ;
      this.register.get('phone')?.setValidators([Validators.required]) ;
      this.register.get('first_name')?.setValidators([Validators.required]) ;
      this.register.get('last_name')?.setValidators([Validators.required]) ;
    }
  }

}
