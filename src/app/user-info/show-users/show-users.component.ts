import { Component, OnInit } from '@angular/core';
// import { FormGroup , FormBuilder ,FormControl , Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
// import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})


export class ShowUsersComponent implements OnInit {

  constructor(private _UsersService : UsersService) { }

  users : {first_name: string, last_name : string , email: string , phone : number , password: string}[] = [] ;

  // phonePattern = "^[01][0,1,2,5]{1}[0-9]{8}$";
  // passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/ ;
  // updatedIndex : number = 0;
  
  // uniquePhoneValidator(excludedIndex: number): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     if (!control.value) {
  //       return null; // No validation error if the control is empty
  //     }
  
  //     const phone = control.value.toString(); // Convert to string (assuming phone is stored as a string)
  //     const isDuplicate = this._UsersService.users
  //       .filter((user : any, index) => index !== excludedIndex) // Exclude the user at index 3
  //       .some(user => user.phone === phone);
  
  //     return isDuplicate ? { duplicatePhone: true } : null;
  //   };
  // }

  // register : FormGroup = this._FormBuilder.group ({
  //   first_name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]) ,
  //   last_name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]) ,
  //   email : new FormControl(null,[Validators.required,Validators.email]) ,
  //   phone : new FormControl(null,[Validators.required , Validators.pattern(this.phonePattern) , this.uniquePhoneValidator(this.updatedIndex)]) ,
  //   password : new FormControl(null,[Validators.required , Validators.pattern(this.passwordPattern)]) ,
  // }) 

  deleteUser(index : number) {
    this._UsersService.users.splice(index+1,1) ;    
    this.users.splice(index,1) ;    
  }

  // updateUser (index:number) {
  //   this.updatedIndex = index ;
  //   var first_name = this.register.value.first_name;
  //   var last_name = this.register.value.last_name;
  //   var email = this.register.value.email;
  //   var phone = this.register.value.phone;
  //   var password = this.register.value.password;
    
  //   this.users[index] = {first_name , last_name , email , phone , password} ;
  //   this._UsersService.users[index+1] = {first_name , last_name , email , phone , password} ;
  // }

  ngOnInit(): void {
        this._UsersService.users.forEach((user) => {
          if (user.phone !== 1124599015) {
            this.users.push(user);
          }
        });    
  }

}
