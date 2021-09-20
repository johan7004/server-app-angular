import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {
  @Output() addServer= new EventEmitter<{
    name:string,
    memory:string,
    cpu:string,
    status:string,
    
  }>();

  serverName='';
  serverMemory='';
  serverCpu='';
  serverStatus='';
  
  
    
  serverAdded(){
    this.addServer.emit(
      {
        name:this.serverName,
        memory:this.serverMemory,
        cpu:this.serverCpu,
        status:this.serverStatus,
        

      }
    )
  }
  constructor() { }

  ngOnInit(): void {
  }

}
