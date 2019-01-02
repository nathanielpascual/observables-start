import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer,Subscription,interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  numberOnSubscription : Subscription;
  customOnSubscription : Subscription;

  constructor() { }

  ngOnInit() {
    const numbers = interval(1000)
          .pipe(map(
            (data : number) => { return data * 2}
          ));
    this.numberOnSubscription= numbers.subscribe((number:number)=>{
      console.log(number);
    });

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(()=>{
        observer.next('first package');
      },2000);
      setTimeout(()=>{
        observer.next('second package');
      },4000);
      setTimeout(()=>{
        //observer.error('this does not work');
        observer.complete;
      },5000);
      setTimeout(()=>{
        observer.next('third package');
      },6000);
    });

    this.customOnSubscription = myObservable.subscribe(
          (data: string)=> { console.log(data)},
          (error: string)=> { console.log(error)},
          ()=> { console.log('completed')},
      );
  };

  ngOnDestroy() {
    this.numberOnSubscription.unsubscribe();
    this.customOnSubscription.unsubscribe();
  }
}
