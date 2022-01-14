import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { EMPTY, Subscription } from 'rxjs';
import { subscribeOn } from 'rxjs-compat/operator/subscribeOn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  
  secondes : number = 0;
  counterSubscription ?: Subscription;

  ngOnInit(){
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occured! : ' +error);
      },
      () => {
        console.log('Observable complete!');
      }
    )
  }

  ngOnDestroy(): void {
      this.counterSubscription?.unsubscribe();
  }

}
