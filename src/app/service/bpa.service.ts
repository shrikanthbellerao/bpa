import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BpaService {

  constructor(private httpClient: HttpClient, private toastr: ToastrService) { }

  fnValidateLogin(base64Credential) {

    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Basic ' + base64Credential
      })
    };

    const url  = 'https://10.81.59.209:9091/bpa/api/v1.0/login';
    const requestBody = {};

    return this.httpClient.post(url, requestBody, httpHeaders);
  }


  getDeviceList() {
    const getToken = localStorage.getItem('accessToken');
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${getToken}`
      })
    };

    const urlDevices = 'https://10.81.59.209:9091/bpa/api/v1.0/device-manager/devices?limit=5000&page=1&nsoInstance=RTP-LSA,nso5-lsa4-re';

    return this.httpClient.get(urlDevices, httpHeaders);
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



    const urlPing = 'https://10.81.59.209:9091/bpa/api/v1.0/device-manager/devices/ping?nsoInstance=RTP-LSA,nso5-lsa4-re';
    return this.httpClient.post(urlPing, body, httpHeaders);


  }
}

