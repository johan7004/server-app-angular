import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';







@Component({
  selector: 'app-fetch-server',
  templateUrl: './fetch-server.component.html',
  styleUrls: ['./fetch-server.component.css']
})

export class FetchServerComponent implements OnInit {
  @Input() elements:{name:string,memory:string,cpu:string,status:string,id:string};

  

  
@Output() delete= new EventEmitter();
detailsView=true
  

  constructor(private http:HttpClient) { }
  
    
  deletePost(){

    this.delete.emit(this.elements.id)
    console.log(this.elements.id)

  }

  detailView(){
    this.detailsView=!this.detailsView;

  }
  

  ngOnInit(): void {
  }

}
