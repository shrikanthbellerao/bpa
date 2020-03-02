import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceManagerComponent } from './device-manager.component';

describe('DeviceManagerComponent', () => {
  let component: DeviceManagerComponent;
  let fixture: ComponentFixture<DeviceManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
