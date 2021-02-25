import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'token': 'kjncsx67yeufjncx83ie'
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle( reqClone )
      .pipe(
        catchError( this.handleErrorResponse )
      )
  }

  handleErrorResponse( error: HttpErrorResponse ) {
    return throwError('Error message') // manage error where I am receiving the information by (err) => { do something }

  }

}
