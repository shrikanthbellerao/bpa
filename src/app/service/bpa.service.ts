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

    const url: string = 'https://10.81.59.209:9091/bpa/api/v1.0/login';
    const requestBody = {};

    return this.httpClient.post(url, requestBody, httpHeaders);
  }

  getServiceItems() {
    const getToken = localStorage.getItem('accessToken');
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${getToken}`
      })
    };

    const url2: string = 'https://10.81.59.209:9091/bpa/api/v1.0/service-catalog/service-items?_page=1&_limit=20&status=Active&order=asc';

    return this.httpClient.get(url2, httpHeaders)
  }
  getServiceCategory() {
    const getToken = localStorage.getItem('accessToken');
    const httpHeaders = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${getToken}`
      })
    };

    const url: string = 'https://10.81.59.209:9091/bpa/api/v1.0/service-catalog/service-categories?_page=1&_limit=200000';

    return this.httpClient.get(url, httpHeaders)
  }  

    /* Use below approach to display Toastr from any component:

  1. In case of Success message: this.toastr.success(msg, 'Success!');
  2. In case of Error message: this.toastr.error(msg, 'Error!');
  3. In case of Warning message: this.toastr.warning(msg, 'Alert!');
  4. In case of Info message: this.toastr.info(msg, 'Info');
      /* Toaster code this.bpaService.showSuccess('Login Successful!')*/
  /* Toaster code this.bpaService.showError('Invalid Credentials')
this.bpaService.showWarning('Maximum Attempts Allowed is 5')*/
  /* Toaster code this.bpaService.showInfo('Remember Next time')*/

}
