import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceManagerComponent } from './device-manager.component';
import { AgGridModule } from 'ag-grid-angular';
import { ModalComponent } from '../utils/modal/modal.component';
import { BpaService } from 'src/app/service/bpa.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UserActionsDownloadCsvComponent } from '../utils/user-actions-download-csv/user-actions-download-csv.component';
import { DeviceManagerIconComponent } from '../utils/device-manager-icon/device-manager-icon.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

describe('DeviceManagerComponent', () => {
let component: DeviceManagerComponent;
let fixture: ComponentFixture<DeviceManagerComponent>;
let service: BpaService;
let device = [{
id: '5e7cb01213c1900b70c0cca3',
name: 'Ent-3560',
description: 'physical_WS-C3560G-48TS',
address: '10.122.32.204',
port: '22',
authgroup: 'enterprise_aaa',
ned_id: 'cisco-ios-cli-6.38:cisco-ios-cli-6.38',
protocol: 'ssh',
latitude: '',
longitude: '',
controller_id: 'RTP-Core-1',
sub_controller_id: 'nso5-lsa3-re',
},
{
_id: '5e7cb01313c1900b70c0cca7',
name: 'Ent-6509',
description: 'physical_WS-C6509-E',
address: '10.122.32.71',
port: '22',
authgroup: 'enterprise_local',
ned_id: 'cisco-ios-cli-6.38:cisco-ios-cli-6.38',
protocol: 'ssh',
latitude: '',
longitude: '',
controller_id: 'RTP-Core-1',
sub_controller_id: 'nso5-lsa3-re'
}
];

let rowdata = {
  rowData : {
  _id: '5e7cb01313c1900b70c0cca7',
  name: 'Ent-6509',
  description: 'physical_WS-C6509-E',
  address: '10.122.32.71',
  port: '22',
  authgroup: 'enterprise_local',
  ned_id: 'cisco-ios-cli-6.38:cisco-ios-cli-6.38',
  protocol: 'ssh',
  latitude: '',
  longitude: '',
  controller_id: 'RTP-Core-1',
  sub_controller_id: 'nso5-lsa3-re'
  }
};

let formCheck = {
  _id: '5e7cb01213c1900b70c0cca3',
  name: 'Ent-3560',
  address: '10.122.32.204',
  port: '22',
  protocol: 'ssh',
  controller_id: 'RTP-Core-1',
  authgroup: 'enterprise_aaa'

}

let deviceForm = new FormGroup({
    _id: new FormControl({value: '5e7cb01213c1900b70c0cca3'}),
    name: new FormControl({value: 'Ent-3560'}, Validators.required),
    address: new FormControl({value: '10.122.32.204'},
      [Validators.required,
      Validators.pattern(/^(([1-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.)(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){2}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/)]),
    port: new FormControl({value: '22'}, Validators.required),
    protocol: new FormControl({value: 'ssh'}, Validators.required),
    controller_id: new FormControl({value: 'RTP-Core-1'}, Validators.required),
    authgroup: new FormControl({value: 'enterprise_aaa'}, Validators.required),
  });


let ping = [ {
  pingResponse : `PING 10.122.32.204 (10.122.32.204) 56(84) bytes of data.\\n64 bytes 
  from 10.122.32.204: icmp_seq=1 ttl=254 time=0.373 ms\\n\\n--- 10.122.32.204 ping statistics ---\\n1 packets transmitted,
   1 received, 0% packet loss, time 0ms\\nrtt min/avg/max/mdev = 0.373/0.373/0.373/0.000 ms\\n`
}];
beforeEach(async(() => {
const bpaServiceStub = () => ({
getDeviceList: () => ({ subscribe: f => f({'body': device }) }),
getPingResult : () => ({ subscribe : f => f({'body': ping})}),
editDevice: () => ({subscribe : f=> f({'status': 'Success'})})

});
TestBed.configureTestingModule({

declarations: [DeviceManagerComponent, ModalComponent, UserActionsDownloadCsvComponent, DeviceManagerIconComponent],
imports: [AgGridModule.withComponents([UserActionsDownloadCsvComponent, DeviceManagerIconComponent]),
ReactiveFormsModule, AngularFontAwesomeModule], 
providers: [ { provide: BpaService, useFactory: bpaServiceStub}, HttpClient, HttpHandler]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(DeviceManagerComponent);
component = fixture.componentInstance;
service = TestBed.get(BpaService);
fixture.detectChanges();

});
it('Should Create', () => {
expect(component.ngOnInit).toBeTruthy();
});

it('Grid Ready', () => {
  expect(component.onGridReady).toBeTruthy();
});

it('Should Hide Modal', () => {
  component.hideModal();
  let res = component['displayModal'];
  expect(res).toBe(false);
});

it('Should View Rows', () => {
  component.onViewBtnClick(rowdata);
  expect(component['rowDatafromCell']).not.toBe(undefined);
});

it('Should Open View Device Modal', () => {
  component.onViewBtnClick(rowdata);
  let res = component['displayModal'];
  expect(res).toBe(true);
   });

it('Should Ping Device', () => {
  component.onPingBtnClick(rowdata);
  expect(component['rowDatafromCell']).not.toBe(undefined);
    });

it('Should Open Ping Device Modal', () => {
  component.onPingBtnClick(rowdata);
  let res = component['displayModal'];
  expect(res).toBe(true);
  });

it('Should Edit Rows', () => {
  component.onEditBtnClick(rowdata);
  expect(component['rowDatafromCell']).not.toBe(undefined);
    });

it('Should Open Edit Device Modal', () => {
  component.onEditBtnClick(rowdata);
  let res = component['displayEditModal'];
  expect(res).toBe(true);
   });

it('Should Edit Device', () => {
  component['formCheck'] = formCheck;
  component['deviceForm.value'] = deviceForm.value;
  component.onDeviceFormSubmit();
  expect(component['displayEditModal']).toBe(false);
    });

});
