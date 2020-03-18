import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActionsIconDeviceManagerComponent } from './user-actions-icon-device-manager.component';

describe('UserActionsIconDeviceManagerComponent', () => {
  let component: UserActionsIconDeviceManagerComponent;
  let fixture: ComponentFixture<UserActionsIconDeviceManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserActionsIconDeviceManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActionsIconDeviceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
