import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifprac',
  templateUrl: './ngifprac.component.html',
  styleUrls: ['./ngifprac.component.css']
})
export class NgifpracComponent implements OnInit {
  flag : boolean = false;
  constructor() { }

  ngOnInit() {
  }
  flagUp(){
    this.flag = !this.flag;
  }

}
