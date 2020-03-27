import { Component, OnInit } from '@angular/core';
import { BpaService } from 'src/app/service/bpa.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dynamic-loadingc',
  templateUrl: './dynamic-loading.component.html',
  styleUrls: ['./dynamic-loading.component.css']
})
export class DynamicLoadingComponent implements OnInit {
  storeResponse;
  Response;
  show = false;
  show1 = false;
  orderForm: FormGroup;
  modalConfig: any;
  displayModal = false;
  someError = '';
  devices = ['Nexus'];
  actions = ['Add'];
  vltypes = ['Data(Layer 3)'];
  hosts = ['Ent-N93180', 'USNCCLTAA01DRE001-CZ01', 'DC-N3048', 'DC-N5548', 'DC-N93180', 'DC-N9372', 'Robot-N5548'];
  peers = ['USPALTWRR01DRE0135-GZ01', 'USPALTWRR01DRM0001-GZ01', 'USPALTWRR01DRM0002-GZ01', 'USPALTWRR01DRM0135-GZ01', 'USPALTWRR01DRE0135-GZ01', 'USPALTWRR01DRE0135-GZ01', 'USPALTWRR01DRE0135-GZ01', 'USPALTWRR01DRE0135-GZ01'];
  interfnums = ['Ethernet1/11', 'Ethernet1/15', 'Ethernet1/16', 'Ethernet1/17', 'Ethernet1/18', 'Ethernet1/2', 'Ethernet1/23', 'Ethernet1/25', 'Ethernet1/5', 'Ethernet1/9'];
  selectedDropdown;
  actionDropdown;
  vlanDropdown;
  hostDropdown;
  peerDropdown;
  interfaceDropdown;
  data;
  rowData: any = [];

  serviceItem;
  storeData: any = []


  constructor(private bpaService: BpaService, private router: Router) {


  }

  ngOnInit() {
    this.orderForm = new FormGroup({
      'devty': new FormControl('', Validators.required),
      'action': new FormControl('', Validators.required),
      'vlan': new FormControl('', Validators.required),
      'vlanid': new FormControl("", Validators.required),
      'vlannm': new FormControl("", Validators.required),
      'vlandes': new FormControl("", Validators.required),
      'mtu': new FormControl("", Validators.required),
      'ipadd': new FormControl("", [Validators.required, Validators.pattern(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/)]),
      'pipadd': new FormControl("", [Validators.required, Validators.pattern(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/)]),
      'hsrpnum': new FormControl("", Validators.required),
      'hsrpstandip': new FormControl("", [Validators.required, Validators.pattern(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/)]),
      'hostnm': new FormControl('', Validators.required),
      'peers': new FormControl('', Validators.required),
      'dhcpserver': new FormControl("", [Validators.pattern(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/)]),
      'interfnums': new FormControl(""),
    });

    // this.http.get("http://jsonplaceholder.typicode.com/users").
    // map((Response) => Response.json()).
    // subscribe((data) => console.log(data))



  }
  showGrid() {

    console.log(this.orderForm.value);
    // this.orderForm.reset();
    this.selectedDropdown = null;
    this.actionDropdown = null;
    this.vlanDropdown = null;
    this.hostDropdown = null;
    this.interfaceDropdown = null;
    this.peerDropdown = null;
    this.storeData.push(this.orderForm.value);
    // console.log(this.storeData);
    this.orderForm.reset();
    this.rowData = [...this.storeData];


    //   this.rowData=[this.orderForm.value,this.orderForm.value];
    //   console.log(this.rowData);
  }
  getSelectedItem(item) {
    this.selectedDropdown = item;
    this.orderForm.controls.devty.setValue(item);
  }
  getActionItem(item) {
    this.actionDropdown = item;
    this.orderForm.controls.action.setValue(item);
  }
  getVlanItem(item) {
    this.vlanDropdown = item;
    this.orderForm.controls.vlan.setValue(item);
  }
  getHostItem(item) {
    this.hostDropdown = item;
    this.orderForm.controls.hostnm.setValue(item);
  }
  getPeerItem(item) {
    this.peerDropdown = item;
    this.orderForm.controls.peers.setValue(item);
  }
  getInterfaceItem(item) {
    this.interfaceDropdown = item;
    this.orderForm.controls.interfnums.setValue(item);
  }
  showDHCP() {
    this.show = !this.show;
  }
  showVLAN() {
    this.show1 = !this.show1;
  }

  onViewBtnClick(event) {

    const queryData = {};
    queryData["id"] = "";
    queryData["item"] = "Data Center Modify Switch Config";


    // "formData": {
    //   "value": "{\"connectionRow\":[{\"createL2Vlan\":true,\"createL3Vlan\":true,\"hostname\":\"USPALTWRR01DRE0002-PV01\",\"peerHostname\":\"USPALTWRR01DRE0002-PV01\",\"vlanID\":\"213\",\"vlanName\":\"dwq\",\"vlanDescription\":\"ewqewq\",\"mtu\":\"23\",\"ipAddress\":\"2.3.4.5/6\",\"peerIpAddress\":\"3.4.5.6/7\",\"hsrpNbr\":213,\"hsrpStandByIP\":\"3.4.5.6\",\"addIpMulticast\":true,\"addPZVlanToTrunk\":null}],\"operationType\":\"VLAN ADD\",\"vlanType\":\"data\",\"deviceType\":\"Nexus\",\"userId\":\"admin\",\"dataEntryType\":\"Manual\"}"
    // },
    // "item": "Data Center Modify Switch Config",
    // "id": "5e72244ff18da8002805e7d8";
    queryData["formData"] = this.storeData;
    this.bpaService.getOrderId(queryData).subscribe(response => {
      console.log(response);
      this.modalConfig = {
        title: 'Status',
        body: `<div class="container">
        <div class="row">
          <p>Order has been successfully placed !</p>
          <p>Your order ID is ${response['orderNumber']}</p>
          </div></div>`,

        buttonList: []
      };

      this.displayModal = true;
    }), err => console.log('error')
  }
  hideModal() {
    this.displayModal = false;
  }
  myClickFunction(event) {
    this.router.navigate(['/services']);
  }



  columnDefs = [

    { headerName: 'Device', field: 'devty', sortable: true, filter: true, width: 100 },
    { headerName: 'Action', field: 'action', sortable: true, filter: true, width: 100 },
    { headerName: 'VLANType', field: 'vlan', sortable: true, filter: true, width: 133 },
    { headerName: 'VLANID', field: 'vlanid', sortable: true, filter: true, width: 100 },
    { headerName: 'VLANName', field: 'vlannm', sortable: true, filter: true, width: 133 },
    { headerName: 'VLAN Description', field: 'vlandes', sortable: true, filter: true, width: 133 },
    { headerName: 'IP Address', field: 'ipadd', sortable: true, filter: true, width: 100 },
    { headerName: 'Peer IP', field: 'pipadd', sortable: true, filter: true, width: 100 },
    { headerName: 'HSRPNumber', field: 'hsrpnum', sortable: true, filter: true, width: 133 },
    { headerName: 'HSRP IP', field: 'hsrpstandip', sortable: true, filter: true, width: 133 },
    { headerName: 'HostName', field: 'hostnm', sortable: true, filter: true, width: 150 },
    { headerName: 'Peer Host', field: 'peers', sortable: true, filter: true, width: 150 },


    {}

  ];
}


