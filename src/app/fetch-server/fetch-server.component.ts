import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';







@Component({
  selector: 'app-fetch-server',
  templateUrl: './fetch-server.component.html',
  styleUrls: ['./fetch-server.component.css'],
  providers:[HttpClientModule]
})

export class FetchServerComponent implements OnInit {
  @Input() elements:{name:string,memory:string,cpu:string,status:string,id:string};

  serverName;
  serverMemory;
  serverCpu;
  serverStatus;
  serverId

  

  
@Output() delete= new EventEmitter();
detailsView=true;
  

  constructor(private http:HttpClient) { }
  
    
  deletePost(){

    this.delete.emit(this.elements.id)
    

  }

  detailView(){
    this.detailsView=!this.detailsView;

  }
  

  ngOnInit(): void {
    this.serverName = this.elements.name
    this.serverMemory =this.elements.memory
    this.serverCpu = this.elements.cpu
    this.serverStatus= this.elements.status
    this.serverId = this.elements.id
  }

}
