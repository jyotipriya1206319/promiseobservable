import 'zone.js/dist/zone';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
  `,
})
export class App implements OnInit, OnDestroy {
  name = 'Angular';
  myObse!: Subscription;
  // myPromise = new Promise((resolve, reject) => {
  //   resolve(() => {
  //     return fetch('https://jsonplaceholder.typicode.com/posts/1');
  //   });
  // }).then(data => console.log(data));
  constructor() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        // console.log(response.json())
        return response.json();
      })
      .then((data: any) => {
        console.log(data);
        return data;
      });
  }

  ngOnInit() {
    const myPromise = new Promise((resolve, reject) => {
      console.log('promise is calling');
      resolve('promise emitting');
      resolve('promise emitting 1');
      resolve('promise emitting 2');
    });
    myPromise.then((vl) => console.log(vl));

    const myObse1 = new Observable((observer) => {
      console.log('observble is calling');
      let count = 0;
      setInterval(() => {
        count++;
        observer.next(count);
      }, 1000);
    });

    // this.myObse = myObse1.subscribe((val) => {
    //   console.log(val);
    // });
  }

  ngOnDestroy() {
    this.myObse.unsubscribe();
  }
}

bootstrapApplication(App);
