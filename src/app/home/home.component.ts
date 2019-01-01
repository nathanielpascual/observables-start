import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const numbers = interval(1000);
    numbers.subscribe((number:number)=>{
      console.log(number);
    });
  }

}
