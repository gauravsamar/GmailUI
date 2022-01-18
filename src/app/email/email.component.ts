import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  numbers:Array<number>;
  n = 15;
  constructor() {
    this.numbers = Array(this.n).fill(0).map((x,i)=>i);
  }

  ngOnInit(): void {
  }

}
