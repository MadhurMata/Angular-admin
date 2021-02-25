import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent implements OnDestroy {

  public pageTitle: string;
  public $titleSubscription: Subscription

  constructor( private router: Router) {

     this.$titleSubscription = this.getRouteArguments().subscribe( ({ title }) => {
      this.pageTitle = title;
      document.title = `Admin Pro - ${title}`;
    })
  }

  ngOnDestroy(){
    this.$titleSubscription.unsubscribe();
  }

  getRouteArguments(){
    return this.router.events.pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data ),
    )
  }
}
