import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent {

  constructor( private router: Router,
                private formBuilder: FormBuilder,
                private userService: UserService
    ) { }

  public formSubmitted = false;

  public loginForm = this.formBuilder.group({
    email: [ localStorage.getItem('email') || 'eve.holt@reqres.in', [ Validators.required, Validators.email ]],
    password: ['cityslicka', Validators.required ],
    remember: [ !!localStorage.getItem('email') || false ]
  })

  login(){

    console.log(this.loginForm)
    
    this.userService.login( this.loginForm.value )
    .subscribe( response => {

      if (this.loginForm.get('remember').value) {
        localStorage.setItem('email', this.loginForm.get('email').value);
      } else {
        localStorage.removeItem('email');
      }
      this.router.navigateByUrl('/');

    }, (error) => {
      Swal.fire('User not found', error, 'error');
    })
  }

}
