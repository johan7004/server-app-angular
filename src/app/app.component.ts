import { Component } from '@angular/core';
import { ServerData } from './shared/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularServer';
  serverDetails: ServerData[]=[
    new ServerData("Server 1","16gb","Intel 8hgz", "Running", "123456"),
    new ServerData("Server 2","16gb","AMD 8hgz", "Running", "123456"),
    
  ];
}
