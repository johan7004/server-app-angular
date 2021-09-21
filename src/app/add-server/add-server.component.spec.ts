import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServerComponent } from './add-server.component';



describe('AddServerComponent', () => {
  let component: AddServerComponent;
  let fixture: ComponentFixture<AddServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit on click',()=>{
    const fixture = TestBed.createComponent(AddServerComponent);
    //spy on emiiter
    const addServerComponent = fixture.componentInstance;
    spyOn(addServerComponent.addServer,'emit'); 
    // trigger click

    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button'); //selecting element
    button.dispatchEvent(new Event('click')); // dispactching event on selected element

    fixture.detectChanges();
    expect(addServerComponent.addServer.emit). toHaveBeenCalledWith(Object({ name: '', memory: '', cpu: '', status: '' })) // checks data which is being sent from the from

  })



  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
