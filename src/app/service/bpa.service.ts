import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BpaService {

  constructor(private httpClient: HttpClient) { }

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
}
