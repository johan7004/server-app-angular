import { Component, Input, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.css']
})
export class ServerDetailsComponent implements OnInit {

  @Input() serverDetails:{name:string,memory:string,cpu:string,status:string,id:string};
  @Output() updateServer= new EventEmitter<{
    name:string,
    memory:string,
    cpu:string,
    status:string,
    id:string
    
  }>();
  

  serverName;
  serverMemory;
  serverCpu;
  serverStatus;

  
  
    
  serverAdded(){

    console.log(this.serverDetails.id)
    this.updateServer.emit(
      {
        name:this.serverName,
        memory:this.serverMemory,
        cpu:this.serverCpu,
        status:this.serverStatus,
        id:this.serverDetails.id
        

      }
    )
  }

  constructor() { }

  ngOnInit() {
    this.serverName=this.serverDetails.name
    this.serverMemory=this.serverDetails.memory
    this.serverCpu=this.serverDetails.cpu
    this.serverStatus=this.serverDetails.status
  }

}
