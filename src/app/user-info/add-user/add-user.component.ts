import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder ,FormControl , Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private _UsersService : UsersService , private _FormBuilder : FormBuilder) { }

  phonePattern = "^[01][0,1,2,5]{1}[0-9]{8}$";
  passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/ ;

  errorMessage = this._UsersService.registerErrorMessage ;
  showError = false ;
  showSavedMessage = false;

  register : FormGroup = this._FormBuilder.group ({
    first_name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]) ,
    last_name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]) ,
    email : new FormControl(null,[Validators.required,Validators.email]) ,
    phone : new FormControl(null,[Validators.required , Validators.pattern(this.phonePattern)]) ,
    password : new FormControl(null,[Validators.required , Validators.pattern(this.passwordPattern)]) ,
  }) 

  add() {
    var first_name = this.register.value.first_name;
    var last_name = this.register.value.last_name;
    var email = this.register.value.email;
    var phone = this.register.value.phone;
    var password = this.register.value.password;
    this.register.reset() ;

      const phoneExists = this._UsersService.users.some((user) => user.phone === phone);

      if (phoneExists) {
        this.showError = true ;
      } 
      else {
        this._UsersService.users.push({first_name , last_name , email , phone , password});
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
  }

}
