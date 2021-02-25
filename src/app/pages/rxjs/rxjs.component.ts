import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intevalSubs: Subscription;

  constructor() {

    // this.returnObserbable().pipe(
    //   retry(3)
    //   ).subscribe( value => 
    //   console.log('value', value),
    //   (error => console.warn('Error', error)),
    //   () => console.info('finished')
    // );

    // this.returnInterval().subscribe(
    //   (value) => console.log(value)
    // )

    //this.returnInterval().subscribe( console.log );


    this.intevalSubs =  this.returnInterval().subscribe( console.log );

   }

   ngOnDestroy() {
     this.intevalSubs.unsubscribe();
   }

   returnInterval(): Observable<number> {
     return interval(500)
       .pipe(
         map( value => value + 1 ),
          filter( value => value % 2 === 0 ),
          take(10)
       )
   }

  returnObserbable(): Observable<number> {
    return new Observable<number>( observer => {
      
      let i = 0;

      const interval = setInterval( () => {
        i++;
        observer.next(i);

        if (i >= 4) {
          clearInterval( interval );
          observer.complete();
        }

        if (i === 2) {
          observer.error('error message');
        }

      }, 1000)

    });
  }
}
