import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.css']
})
export class ServerDetailsComponent implements OnInit {

  @Input() serverDetails:{name:string,memory:string,cpu:string,status:string,id:string};

  

  constructor() { }

  ngOnInit() {
  }

}
