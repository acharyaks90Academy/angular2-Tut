import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-cls',
  templateUrl: './cls.component.html',
  styleUrls: ['./cls.component.css']
})
export class ClsComponent implements OnInit {

  constructor() { }
  ngStatus : number = 1;
   myname : string = "Anil Suryavanshi";
   allows : boolean = false;
   getStatus(){
     return this.ngStatus;
   }
   onChangeStatus(){
     this.ngStatus = 2;
   }
  ngOnInit() {
  }

}
