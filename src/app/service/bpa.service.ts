import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BpaService {

  vmIPAddress = '';
  nsoInstance = '';

  bacVmIPAddress = '10.81.59.208:9091'; // BAC
  bacNsoInstance = 'RTP-LSA,nso5-lsa4-rd'; // BAC
  attVmIPAddress = '10.83.34.65'; // ATT-M
  attNsoInstance = 'All'; // ATT-M

  constructor( private httpClient: HttpClient, private toastr: ToastrService) {}

  fnValidateLogin(base64Credential, flag) {
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Basic ' + base64Credential
      })
    };
    if (flag) {
      this.vmIPAddress = this.bacVmIPAddress;
      this.nsoInstance = this.bacNsoInstance;
    } else {
      this.vmIPAddress = this.attVmIPAddress;
      this.nsoInstance = this.attNsoInstance;
    }
    const url = `https://${this.vmIPAddress}/bpa/api/v1.0/login`;
    const requestBody = {};

    return this.httpClient.post(url, requestBody, httpHeaders);

  }
  getActiveServices() {
    const getToken = localStorage.getItem('accessToken');
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${getToken}`
      })
    };


    const urlActive =
      `https://${this.vmIPAddress}/bpa/api/v1.0/service-catalog/service-orders`;

    return this.httpClient.get(urlActive, httpHeaders);
  }
  getServiceorders() {
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

  getServiceItems() {
    const getToken = localStorage.getItem('accessToken');
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${getToken}`
      })
    };


    const urlActive =
      `https://${this.vmIPAddress}/bpa/api/v1.0/service-catalog/service-items?_page=1&_limit=20&status=Active&order=asc`;

    return this.httpClient.get(urlActive, httpHeaders);
  }
  getServiceCategory() {
    const getToken = localStorage.getItem('accessToken');
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${getToken}`
      })
    };

    const url =
      `https://${this.vmIPAddress}/bpa/api/v1.0/service-catalog/service-categories/service-items?_page=1&_limit=20&status=Active&order=asc`;

    return this.httpClient.get(url, httpHeaders);
  }

  getDeviceList() {
    const getToken = localStorage.getItem('accessToken');
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${getToken}`
      })
    };

    const urlDevices =
      `https://${this.vmIPAddress}/bpa/api/v1.0/device-manager/devices?limit=5000&page=1&nsoInstance=${this.nsoInstance}`;

    return this.httpClient.get(urlDevices, httpHeaders);
  }
   // Method to read data present in CSV file
   fnReadCSV(fileName) {

    console.log('Inside fnReadCSV: ', fileName);
    return this.httpClient.get(fileName, { responseType: 'text' });
   }

getPingResult(pingDeviceInfo) {
    const getToken = localStorage.getItem('accessToken');
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${getToken}`,

      })
    };
    const body = pingDeviceInfo;
    const urlPing = 'https://10.81.59.208:9091/bpa/api/v1.0/device-manager/devices/ping?nsoInstance=RTP-LSA,nso5-lsa4-rd';
    return this.httpClient.post(urlPing, body, httpHeaders);


  }

    nodeJsCheck() {
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json'
      })
    };

    const nodeUrl = 'http://localhost:8080';
    return this.httpClient.get(nodeUrl, httpHeaders);
  }
}

