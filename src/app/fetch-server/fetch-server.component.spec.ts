import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchServerComponent } from './fetch-server.component';

describe('FetchServerComponent', () => {
  let component: FetchServerComponent;
  let fixture: ComponentFixture<FetchServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
