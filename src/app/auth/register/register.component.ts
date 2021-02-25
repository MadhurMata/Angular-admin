import { Component  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent{

  public formSubmitted = false;

  public registerForm = this.formBuilder.group({
    name: ['Eve', [ Validators.required ]],
    email: ['eve.holt@reqres.in', [ Validators.required, Validators.email ]],
    password: ['pistol', [ Validators.required ]],
    passwordConfirmation: ['pistol', [ Validators.required ]],
    terms: [ true, [ Validators.required ]],
  }, {
    validators: this.equalPasswords('password', 'passwordConfirmation')
  })
  
  constructor( 
                private formBuilder: FormBuilder,
                private userService: UserService
                ) {}

  createUset(){
    this.formSubmitted = true;

    console.log('create user', this.registerForm)
    //if ( this.registerForm.invalid ) { return; }
    // Create user en DB
    this.userService.createUser( this.registerForm.value )
      .subscribe( response => {
        console.log(response)
      }, (error) => {
        Swal.fire('Error', error, 'error');
      })

  }
  
  invalidField( field: string ): boolean {

    if ( this.registerForm.get(field).invalid && this.formSubmitted ) {
      return true;
    }
    return false;
  }

  acceptTermsField() {
    return !this.registerForm.get('terms').value && this.formSubmitted
  }

  invalidPasswordField() {
    const password = this.registerForm.get('password').value;
    const passwordConfirmation = this.registerForm.get('passwordConfirmation').value;

    if ( password !== passwordConfirmation && this.formSubmitted ) {
      return true;
    }  else {
      return false;
    }
  }

  equalPasswords(password: string, passwordConfirmation: string ) {
    return ( formGroup: FormGroup ) => {
      
      const passwordControl = formGroup.get(password);
      const passwordConfirmationControl = formGroup.get(passwordConfirmation);
      
      if ( passwordControl === passwordConfirmationControl ) {
        passwordConfirmationControl.setErrors(null);
      } else {
        passwordConfirmationControl.setErrors({ notEqual: true });
      }

    }


  }

}
