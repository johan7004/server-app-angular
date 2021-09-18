import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-fetch-server',
  templateUrl: './fetch-server.component.html',
  styleUrls: ['./fetch-server.component.css']
})
export class FetchServerComponent implements OnInit {
  @Input() elements:{name:string,memory:string,cpu:string,status:string,id:string};

  constructor() { }

  ngOnInit(): void {
  }

}
