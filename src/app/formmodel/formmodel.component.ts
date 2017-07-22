import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formmodel',
  templateUrl: './formmodel.component.html',
  styleUrls: ['./formmodel.component.css']
})
export class FormmodelComponent implements OnInit {

  name : string = "pratap Kumar";
  constructor() { }

  ngOnInit() {
  }

}
