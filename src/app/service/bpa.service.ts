import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class BpaService {

  vmIPAddress: string = localStorage.getItem('vm');
  nsoInstance: string = localStorage.getItem('nso');
 
  bacVmIPAddress: string = '10.81.59.208:9091'; // BAC
  bacNsoInstance: string = 'RTP-Core,nso5-lsa4-re'; // BAC
  attVmIPAddress: string = '10.83.34.65'; // ATT-M
  attNsoInstance: string = 'All'; // ATT-M

  constructor (private httpClient: HttpClient, private toastr: ToastrService) { }

  fnValidateLogin (base64Credential, flag) {
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Basic ' + base64Credential
      })
    };

  if(flag) {
    this.vmIPAddress = this.bacVmIPAddress;
    localStorage.setItem('vm', this.bacVmIPAddress)
    this.nsoInstance = this.bacNsoInstance;
    localStorage.setItem('nso', this.bacVmIPAddress)
  }
 else{
  this.vmIPAddress = this.attVmIPAddress;
  localStorage.setItem('vm', this.attVmIPAddress)
  this.nsoInstance = this.attNsoInstance;
  localStorage.setItem('nso', this.attNsoInstance)
}
    const url: string = `https://${this.vmIPAddress}/bpa/api/v1.0/login`;
    const requestBody = {};

    return this.httpClient.post(url, requestBody, httpHeaders)
    
  }
  
  getActiveServices() {
    const getToken = localStorage.getItem('accessToken');
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${getToken}`
      })
    };
    
    const urlActive: string =
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

    const urlActive: string =
    `https://${this.vmIPAddress}/bpa/api/v1.0/service-catalog/service-orders`;

  return this.httpClient.get(urlActive, httpHeaders);
}

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

getServiceItems() {
  const getToken = localStorage.getItem('accessToken');
  const httpHeaders = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${getToken}`
    })
  };

  const urlActive: string = `https://${this.vmIPAddress}/bpa/api/v1.0/service-catalog/service-items?_page=1&_limit=20&status=Active&order=asc`
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

  const url: string =
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

  const urlDevices: string =
    `https://${this.vmIPAddress}/bpa/api/v1.0/device-manager/devices?limit=5000&page=1&nsoInstance=${this.nsoInstance}`;

  return this.httpClient.get(urlDevices, httpHeaders);
}
// Method to read data present in CSV file
fnReadCSV(fileName) {

  console.log('Inside fnReadCSV: ', fileName);

  return this.httpClient.get(fileName, { responseType: 'text' });
}

nodeJScheck() {
  const httpHeaders = {
    headers: new HttpHeaders({
      Accept: 'application/text'
    })
  };

  const nodeUrl = 'http://localhost:8080';
  return this.httpClient.get(nodeUrl, httpHeaders);
}

}
