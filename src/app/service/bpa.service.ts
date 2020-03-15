import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BpaService {

  vmIPAddress: string = localStorage.getItem('vm');
  nsoInstance: string = localStorage.getItem('nso');

  bac208VmIPAddress: string = '10.81.59.208:9091';
  bac208NsoInstance: string = 'RTP-LSA,nso5-lsa4-rd';
  bac209VmIPAddress: string = '10.81.59.209:9091';
  bac209NsoInstance: string = 'RTP-LSA,nso5-lsa4-rd';

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

  nodeAppUrl: string = 'http://localhost:8080/';
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

    const bpaHttpHeaders: any = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      })
    };
    const urlActive: string = `https://${this.vmIPAddress}/bpa/api/v1.0/service-catalog/service-orders`;
    return this.httpClient.get(urlActive, bpaHttpHeaders);
  }
  //Method to select the Favourite Items from Service Catalog microservice of BPA
  selectFavourite(id) {
    const getToken = localStorage.getItem('accessToken');
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${getToken}`
      })
    };
    const urlActive: string = `https://${this.vmIPAddress}/bpa/api/v1.0/service-catalog/user-favorites`;
    const requestBody = {
      name: id
    };
    return this.httpClient.post(urlActive, requestBody, httpHeaders);
  }

  //Method to get the Favourite Items from Service Catalog microservice of BPA
  getFavItems() {
    const getToken = localStorage.getItem('accessToken');
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${getToken}`
      })
    };
    const urlActive: string = `https://${this.vmIPAddress}/bpa/api/v1.0/service-catalog/user-favorites`;

    return this.httpClient.get(urlActive, httpHeaders);

  }

  //Method to delete the Favourite Items from Service Catalog microservice of BPA
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

  // Method to get the list of Service Orders from Service Catalog microservice of BPA
  getServiceorders() {

    // const bpaHttpHeaders: any = {
    //   headers: new HttpHeaders({
    //     Accept: 'application/json',
    //     Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //   })
    // };
    // const urlActive: string = `https://${this.vmIPAddress}/bpa/api/v1.0/service-catalog/service-orders`;
    // return this.httpClient.get(urlActive, bpaHttpHeaders);

    const requestBody = {
      accessToken: localStorage.getItem('accessToken'),
      vmIPAddress: this.vmIPAddress
    };

    return this.httpClient.post(this.nodeAppUrl + 'service-orders', requestBody, this.nodeJsHttpHeaders);
  }

  // Method to get the list of Service Items from Service Catalog microservice of BPA
  getServiceItems() {

    const bpaHttpHeaders: any = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      })
    };
    const urlActive: string = `https://${this.vmIPAddress}/bpa/api/v1.0/service-catalog/service-items?_page=1&_limit=20&status=Active&order=asc`
    return this.httpClient.get(urlActive, bpaHttpHeaders);
  }

  // Method to get the list of Service Categories from Service Catalog microservice of BPA
  getServiceCategory() {

    const bpaHttpHeaders: any = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      })
    };
    const url: string = `https://${this.vmIPAddress}/bpa/api/v1.0/service-catalog/service-categories/service-items?_page=1&_limit=20&status=Active&order=asc`;
    return this.httpClient.get(url, bpaHttpHeaders);
  }

  // Method to get the list of devices from Device Manager microservice of BPA
  getDeviceList() {

    const bpaHttpHeaders: any = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      })
    };
    const urlDevices: string = `https://${this.vmIPAddress}/bpa/api/v1.0/device-manager/devices?limit=5000&page=1&nsoInstance=${this.nsoInstance}`;
    return this.httpClient.get(urlDevices, bpaHttpHeaders);
  }

  // Method to read data present in CSV file
  fnReadCSV(fileName) {
    console.log('Inside fnReadCSV: ', fileName);
    return this.httpClient.get(fileName, { responseType: 'text' });
  }
}
