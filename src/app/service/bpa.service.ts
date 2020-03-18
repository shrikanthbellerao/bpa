import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BpaService {
  storedata;

  vmIPAddress: string = localStorage.getItem('vm');
  nsoInstance: string = localStorage.getItem('nso');

  bac208VmIPAddress = '10.81.59.208:9091';
  bac208NsoInstance = 'RTP-LSA,nso5-lsa4-rd';
  bac209VmIPAddress = '10.122.32.86:9091';
  bac209NsoInstance = 'All';

  /*
    Use below approach to display Toastr from any component:
    1. In case of Success message: this.toastr.success(msg, 'Success!');
    2. In case of Error message: this.toastr.error(msg, 'Error!');
    3. In case of Warning message: this.toastr.warning(msg, 'Alert!');
    4. In case of Info message: this.toastr.info(msg, 'Info');
    Toaster code this.bpaService.showSuccess('Login Successful!')
    Toaster code this.bpaService.showError('Invalid Credentials')
    this.bpaService.showWarning('Maximum Attempts Allowed is 5')
    Toaster code this.bpaService.showInfo('Remember Next time')
  */

  constructor(
    private httpClient: HttpClient,
    private toastr: ToastrService) {
  }

  nodeAppUrl = 'http://localhost:8080/';
  nodeJsHttpHeaders = {
    headers: new HttpHeaders({
      Accept: 'application/json'
    })
  };

  // Method to check connection with Backend application
  fnTestNodeApp() {
    return this.httpClient.get(this.nodeAppUrl, this.nodeJsHttpHeaders);
  }

  // Method to generate JWT after successful login into BPA
  fnValidateLogin(base64Credential, flag) {

    if (flag) {
      this.vmIPAddress = this.bac208VmIPAddress;
      localStorage.setItem('vm', this.bac208VmIPAddress);
      this.nsoInstance = this.bac208NsoInstance;
      localStorage.setItem('nso', this.bac208VmIPAddress);
    } else {
      this.vmIPAddress = this.bac209VmIPAddress;
      localStorage.setItem('vm', this.bac209VmIPAddress);
      this.nsoInstance = this.bac209NsoInstance;
      localStorage.setItem('nso', this.bac209NsoInstance);
    }

    const requestBody = {
      base64Credential,
      vmIPAddress: this.vmIPAddress
    };

    return this.httpClient.post(this.nodeAppUrl + 'login', requestBody, this.nodeJsHttpHeaders);
  }

  // Method to get the Active Service info from Service Catalog microservice of BPA
  getActiveServices() {

    const getToken = localStorage.getItem('accessToken');
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${getToken}`
      })
    };
    const urlActive = `https://${this.vmIPAddress}/bpa/api/v1.0/service-catalog/service-orders`;

    return this.httpClient.get(urlActive, httpHeaders);
  }

  // Method to set the Order status from Active Service info from Service Catalog microservice of BPA
  setServiceOrderStatus(getData) {
    this.storedata = getData;
  }

  // Method to get the Order status from Active Service and display that information from Service Catalog microservice of BPA
  getServiceOrderStatus() {
    return this.storedata;
  }

  // Method to get the Timeline from Active Service info from Service Catalog microservice of BPA
  getActions(id) {
    const bpaHttpHeaders: any = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      })
    }; const urlActive = `https://${this.vmIPAddress}/bpa/api/v1.0/milestones/?objectType=service-catalog-order&objectReference=${id}`;
    return this.httpClient.get(urlActive, bpaHttpHeaders);
  }

  // Method to select the Favourite Items from Service Catalog microservice of BPA
  selectFavourite(id) {
    const getToken = localStorage.getItem('accessToken');
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${getToken}`
      })
    };
    const urlActive = `https://${this.vmIPAddress}/bpa/api/v1.0/service-catalog/user-favorites`;
    const requestBody = {
      name: id
    };
    return this.httpClient.post(urlActive, requestBody, httpHeaders);
  }

  // Method to get the Favourite Items from Service Catalog microservice of BPA
  getFavItems() {
    const getToken = localStorage.getItem('accessToken');
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${getToken}`
      })
    };
    const urlActive = `https://${this.vmIPAddress}/bpa/api/v1.0/service-catalog/user-favorites`;

    return this.httpClient.get(urlActive, httpHeaders);

  }

  // Method to delete the Favourite Items from Service Catalog microservice of BPA
  deleteFavourite(id) {
    const getToken = localStorage.getItem('accessToken');
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${getToken}`
      })
    };
    return this.httpClient.delete(`https://${this.vmIPAddress}/bpa/api/v1.0/service-catalog/user-favorites/${id}`, httpHeaders);
  }

  // Method to make REST API call to fetch the list of Service Orders from BPA
  getServiceorders() {

    const requestBody = {
      accessToken: localStorage.getItem('accessToken'),
      vmIPAddress: this.vmIPAddress
    };

    return this.httpClient.post(this.nodeAppUrl + 'service-orders', requestBody, this.nodeJsHttpHeaders);
  }

  // Method to get the list of Service Items from Service Catalog microservice of BPA
  getServiceItems() {

       const requestBody = {
         accessToken: localStorage.getItem('accessToken'),
         vmIPAddress: this.vmIPAddress
      };

      return this.httpClient.post(this.nodeAppUrl + 'service-items', requestBody, this.nodeJsHttpHeaders);
    // const bpaHttpHeaders: any = {
    //   headers: new HttpHeaders({
    //     Accept: 'application/json',
    //     Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //   })
    // };
    // const urlActive = `https://${this.vmIPAddress}/bpa/api/v1.0/service-catalog/service-items?_page=1&_limit=20&status=Active&order=asc`;
    // return this.httpClient.get(urlActive, bpaHttpHeaders);
  }

  // Method to get the list of Service Categories from Service Catalog microservice of BPA
  getServiceCategory() {

    const bpaHttpHeaders: any = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      })
    };
    const url = `https://${this.vmIPAddress}/bpa/api/v1.0/service-catalog/service-categories/service-items?_page=1&_limit=20&status=Active&order=asc`;
    return this.httpClient.get(url, bpaHttpHeaders);
  }

  // Method to get the list of devices from Device Manager microservice of BPA
  getDeviceList() {

    // const bpaHttpHeaders: any = {
    //   headers: new HttpHeaders({
    //     Accept: 'application/json',
    //     Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //   })
    // };
    // const urlDevices = `https://${this.vmIPAddress}/bpa/api/v1.0/device-manager/devices?limit=5000&page=1&nsoInstance=${this.nsoInstance}`;
    // return this.httpClient.get(urlDevices, bpaHttpHeaders);

    const requestBody = {
      accessToken: localStorage.getItem('accessToken'),
      vmIPAddress: this.vmIPAddress,
      nsoInstance: this.nsoInstance,
    };

    return this.httpClient.post(this.nodeAppUrl + 'device-manager', requestBody, this.nodeJsHttpHeaders);
  }

  // Method to read data present in CSV file
  fnReadCSV(fileName) {
    console.log('Inside fnReadCSV: ', fileName);
    return this.httpClient.get(fileName, { responseType: 'text' });
  }

  // Method to display the date and time in a proper format 
  fnFormatDate(inputDate) {
    return inputDate.substring(5, 7) + '/' +
      inputDate.substring(8, 10) + '/' +
      inputDate.substring(0, 4) + ' ' +
      inputDate.substring(11, 16);
  }


  // Method to Ping Device from Device Manager
  getPingResult(pingDeviceInfo) {

    // const getToken = localStorage.getItem('accessToken');
    // const httpHeaders = {
    //   headers: new HttpHeaders({
    //     Accept: 'application/json',
    //     Authorization: `Bearer ${getToken}`,

    //   })
    // };
    // const body = pingDeviceInfo;
    // const urlPing = `https://${this.vmIPAddress}/bpa/api/v1.0/device-manager/devices/ping?nsoInstance=${this.nsoInstance}`;
    // return this.httpClient.post(urlPing, body, httpHeaders);

    const requestBody = {
      accessToken: localStorage.getItem('accessToken'),
      vmIPAddress: this.vmIPAddress,
      nsoInstance: this.nsoInstance,
      pingDeviceInfo
    };

    return this.httpClient.post(this.nodeAppUrl + 'ping-device', requestBody, this.nodeJsHttpHeaders);
  }

  // REST Api to fetch the broadcast message from bpa-backend application
  fnFetchBroadcastMessage() {
    return this.httpClient.get(this.nodeAppUrl + 'broadcast-message');
  }

  // REST Api to update the broadcast message in bpa-backend application
  fnUpdateBroadcastMessage(broadcastMessage) {

    const requestBody = {
      accessToken: localStorage.getItem('accessToken'),
      vmIPAddress: this.vmIPAddress,
      broadcastMessage
    };
    return this.httpClient.put(this.nodeAppUrl + 'broadcast-message', requestBody, this.nodeJsHttpHeaders);

  }
}
