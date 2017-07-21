import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputevent',
  templateUrl: './inputevent.component.html',
  styleUrls: ['./inputevent.component.css']
})
export class InputeventComponent implements OnInit {
  myname : string = "fist";
  constructor() { }

  ngOnInit() {
  }
  updateValue(event:Event){
this.myname = (<HTMLInputElement>event.target).value;
  }

  
}
