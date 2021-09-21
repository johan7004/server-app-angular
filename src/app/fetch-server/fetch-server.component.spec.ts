import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';


import { FetchServerComponent } from './fetch-server.component';

describe('FetchServerComponent', () => {
  let component: FetchServerComponent;
  let fixture: ComponentFixture<FetchServerComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      
      declarations: [ FetchServerComponent ]
    })
    .compileComponents();
    
  });

  
  it('should accept Data ',()=>{
    const fixture = TestBed.createComponent(FetchServerComponent);
    const fetchServerComponent = fixture.componentInstance;

    fetchServerComponent.serverName= 'Derrick'
    expect(fetchServerComponent.serverName).toBe('Derrick') // variable server name recieves Data
    
    


  
});
});
