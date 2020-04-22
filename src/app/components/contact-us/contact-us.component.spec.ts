import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 


describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsComponent ],
      imports:[FormsModule, ReactiveFormsModule,HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.formdata.valid).toBeFalsy();
  });





  // it('should', async(() => {
  //   spyOn(component, 'onClickSubmit');
  
  //   let button = fixture.debugElement.nativeElement.querySelector('button');
  //   button.click();
  
  //   fixture.whenStable().then(() => {
  //     expect(component.onClickSubmit).toHaveBeenCalled();
  //   });
  // }));
});
