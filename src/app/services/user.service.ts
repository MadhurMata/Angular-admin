import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterForm } from '../interfaces/register-forminterface';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoginForm } from '../interfaces/login-form.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  createUser(formData: RegisterForm ) {
    // for backend implementation
    // return this.http.post(`${ base_url }/users`, formData); 
    
    //I will be useing the reqres api as i don't have backend done
    return this.http.post('https://reqres.in/api/register', formData)
    .pipe(
      tap( (response: any) => {
        localStorage.setItem('token', response.token)
      })
    )
  }
  
  login(formData: LoginForm ) {
    // for backend implementation
    // return this.http.post(`${ base_url }/users`, formData); 
    
    //I will be useing the reqres api as i don't have backend done
    return this.http.post('https://reqres.in/api/login', formData)
      .pipe(
        tap( (response: any) => {
          localStorage.setItem('token', response.token)
        })
      ) 
  }
  
  //Example other petition that needs headers and params with an interceptor ussage
  otherPetition() {
    
    let params = new HttpParams().append('page', '2');
    params = params.append('name', 'Madhur');

    // Implemented in the token-interceptor
    // const headers = new HttpHeaders({
    //   'token': 'kjncsx67yeufjncx83ie'
    // });

    return this.http.get('https://reqres.in/api/user', {
      params,
      //headers
    }).pipe(
      map( response => response['data'] ),
      //catchError( this.handleErrorResponse ) // managed in the interceptor
    )
  }
  // managed in the interceptor
  // handleErrorResponse( error: HttpErrorResponse ) {
  //   return throwError('Error message') // manage error where I am receiving the information by (err) => { do something }

  // }

}
