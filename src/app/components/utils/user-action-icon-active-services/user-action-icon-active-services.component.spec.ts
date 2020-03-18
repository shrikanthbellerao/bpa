import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActionIconActiveServicesComponent } from './user-action-icon-active-services.component';

describe('UserActionIconActiveServicesComponent', () => {
  let component: UserActionIconActiveServicesComponent;
  let fixture: ComponentFixture<UserActionIconActiveServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserActionIconActiveServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActionIconActiveServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
