import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {ServerData} from './shared/data.model'
import{HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'



describe('AppComponent and Http Calls', () => {
 
  let httpClient:HttpClient
  let httpMock: HttpTestingController
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[
        HttpClient
      ]
    }).compileComponents();
    httpMock = TestBed.get(HttpTestingController)
  });
it('should throw error', ()=>{
  
  expect(()=>httpMock.expectOne('https://serverdetails-74ff8-default-rtdb.firebaseio.com/server.json')).toThrow();
})
  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  
});



describe('Server Data class test',()=>{
  let data: ServerData = null;
  beforeEach(()=>{
    data = new ServerData('');
  })

  it('should have a valid constructor', () =>{
    expect(data).not.toBeNull();
  })

  it('Should set name Through constructor', ()=>{
    data = new ServerData('Jaine');
    expect(data.name).toEqual('Jaine')
  })

  it('Should get and set name',()=>{
    data.name= 'Jaine';
    expect(data.name).toEqual('Jaine')
  })

  afterEach(()=>{
    data = null
  })
})

describe('Addserver Component test', ()=>{
  let addServerComponent: ServerData = null
  beforeEach(()=>{
    addServerComponent = new ServerData('')
  });

  it('Should Set Instance', ()=>{
    expect(addServerComponent).not.toBeNull();
  })

  it('should not have data if there is no Data',()=>{
    expect(addServerComponent.name.length).toBe(0)
  })

  it('should have if there is any data', ()=>{
    const newServer : ServerData ={
      memory:'16',
      status:'Runnning',
      cpu:'Intel',
      name:'Test Server'


    };
    const serverList : Array<ServerData> =[newServer];
    
    expect(serverList.length).toBe(1)
    
  })
})
