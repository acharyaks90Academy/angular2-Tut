import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent implements OnInit {
server : string ="Test 3";
servers = ['Test 1', 'Test 2']
  constructor() { }

  ngOnInit() {
  }
  addServer(){
    this.servers.push(this.server);
  }
}
