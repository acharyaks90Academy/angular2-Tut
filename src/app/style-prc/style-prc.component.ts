import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-prc',
  templateUrl: './style-prc.component.html',
  styles : [`
    fcolor{
      color:white;
    }
  `]
})
export class StylePrcComponent implements OnInit {

  status:boolean= true;
  constructor() { }

  ngOnInit() {
  }

  getColor(){
   return this.status == true? 'red':'green';
  }

}
