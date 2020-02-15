import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BpaService {

  constructor(private httpClient: HttpClient,private toastr: ToastrService) { }

  fnValidateLogin(base64Credential) {

    const httpHeaders = {
      headers : new HttpHeaders({
        Accept : 'application/json',
        Authorization: 'Basic ' + base64Credential
      })
    };

    const url: string = 'https://10.83.34.65/bpa/api/v1.0/login';
    const requestBody = {};

    return this.httpClient.post(url, requestBody, httpHeaders);
  }
  /* Toaster code showSuccess(msg) {
    this.toastr.success(msg, 'Success!');
    }
  showError(msg) {
    this.toastr.error(msg, 'Error!');
    }
  showWarning(msg) {
    this.toastr.warning(msg, 'Alert!');
    }
  showInfo(msg) {
    this.toastr.info(msg, 'Info');
    }*/
}
