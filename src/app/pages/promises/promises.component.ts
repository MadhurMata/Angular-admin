import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsers().then(users => {
      console.log(users);
    })
    // const promise = new Promise( (resolve, reject) => {

    //   //resolve('in promise');

    //   reject('error message')

    // });

    // promise.then( (message) => {
    //   console.log('finished', message)
    // }).catch(error => console.log('Fail', error))
    // console.log('end onInit');

  }

  getUsers() {

    return new Promise(resolve => {
      
      fetch('https://reqres.in/api/users')
        .then( (response) => response.json())
        .then( body => resolve(body.data));
    });
  }


}
