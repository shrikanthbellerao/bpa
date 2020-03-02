import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPswdComponent } from './reset-pswd.component';

describe('ResetPswdComponent', () => {
  let component: ResetPswdComponent;
  let fixture: ComponentFixture<ResetPswdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPswdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
