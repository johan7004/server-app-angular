import { Component } from '@angular/core';
import { ServerData } from './shared/data.model';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularServer';
  baseUrl = 'https://serverdetails-74ff8-default-rtdb.firebaseio.com/server.json'
  serverDetails: ServerData[]=[];
  error=null;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts()
   
  }

  onServerAdded(serverData:ServerData){

    // send htpp request 

    this.http.post(this.baseUrl, serverData) .subscribe(
      responseData =>{
        console.log(responseData);
        
        this.fetchPosts()
      },
      error =>{
        this.error.next(error.message)
      }
    )

      console.log(serverData)
      
      

    


    
  }

  onClearPost(){
    console.log('post clear working')
  }

  fetchPosts(){
this.http.get<{[key:string]:ServerData}>('https://serverdetails-74ff8-default-rtdb.firebaseio.com/server.json').pipe(
  map(responseData=>{

    const postsArray: ServerData[]=[];
    
    for (const key in responseData){
      if(responseData.hasOwnProperty(key)){
        postsArray.push({...responseData[key], id:key});
      }
    }
return postsArray;
  }),
)
.subscribe(
  posts =>{
    this.serverDetails=posts;
  },
  error =>{
    this.error.next(error.message)
  }
)
  }

  deletePost(id:string){
    
    let baseUrl=`https://serverdetails-74ff8-default-rtdb.firebaseio.com/server/${id}.json`

    console.log(baseUrl)
    this.http.delete(baseUrl).subscribe((responseData)=>{

    console.log(responseData)
    this.fetchPosts()
    
      
    
      
    })
  
}

updatedServer(updateData:ServerData){
      // send htpp request 
      let baseUrl=`https://serverdetails-74ff8-default-rtdb.firebaseio.com/server/${updateData.id}.json`

      this.http.patch(baseUrl, updateData) .subscribe(
        responseData =>{
          console.log(responseData);
          
          this.fetchPosts()
        },
        error =>{
          this.error.next(error.message)
        }
      )
  
        

  

}


}
