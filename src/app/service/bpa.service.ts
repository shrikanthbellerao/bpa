import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BpaService {
  storedata;

  vmIPAddress: string = localStorage.getItem('vm');
  nsoInstance: string = localStorage.getItem('nso');

  vmOneIPAddress = '10.122.32.86:9091';
  vmOneNsoInstance = 'RTP-Core-1,nso5-lsa3-rd';
  vmTwoIPAddress = '10.81.59.208:9091';
  vmTwoNsoInstance = 'NSO-RTP,nso5-lsa4-rd';


  constructor(
    private httpClient: HttpClient) {}
   
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
      this.vmIPAddress = this.vmOneIPAddress;
      localStorage.setItem('vm', this.vmOneIPAddress);
      this.nsoInstance = this.vmOneNsoInstance;
      localStorage.setItem('nso', this.vmOneNsoInstance);
    } else {
      this.vmIPAddress = this.vmTwoIPAddress;
      localStorage.setItem('vm', this.vmTwoIPAddress);
      this.nsoInstance = this.vmTwoNsoInstance;
      localStorage.setItem('nso', this.vmTwoNsoInstance);
    }

    const requestBody = {
      base64Credential,
      vmIPAddress: this.vmIPAddress
    };

    return this.httpClient.post(this.nodeAppUrl + 'login', requestBody, this.nodeJsHttpHeaders);
  }

  // Method to get the Active Service info from Service Catalog microservice of BPA
  getActiveServices() {

    const requestBody = {
      accessToken: localStorage.getItem('accessToken'),
      vmIPAddress: this.vmIPAddress
    };

    return this.httpClient.post(this.nodeAppUrl + 'service-order', requestBody, this.nodeJsHttpHeaders);
  }

  //Method to obtain the orderdata that is filled in form
  getOrderId(form) {
    const requestBody = {
      accessToken: localStorage.getItem('accessToken'),
      vmIPAddress: this.vmIPAddress,
      id: form['id'],
      item: form['item'],
      formData: form['formData']

    };
    console.log(requestBody);
    return this.httpClient.post(this.nodeAppUrl + 'orders', requestBody, this.nodeJsHttpHeaders);
  }

 //Method to display questions and answers (FAQ)
 getFaq() {
  return this.httpClient.get(this.nodeAppUrl + 'FAQ');
  }

  //Method to get details entered by the user in contactus form
  getcontactUs(data) {
    const requestBody = {
    accessToken: localStorage.getItem('accessToken'),
    formData: data
    };
    return this.httpClient.post(this.nodeAppUrl + 'contactUs', requestBody, this.nodeJsHttpHeaders);
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
    const requestBody = {
      accessToken: localStorage.getItem('accessToken'),
      vmIPAddress: this.vmIPAddress,
      id: id

    };

    return this.httpClient.post(this.nodeAppUrl + 'milestone', requestBody, this.nodeJsHttpHeaders);
  }

  //Method to select the Favourite Items from Service Catalog microservice of BPA
  selectFavourite(id) {
    const requestBody = {
      accessToken: localStorage.getItem('accessToken'),
      vmIPAddress: this.vmIPAddress,
      id: id

    };

    return this.httpClient.post(this.nodeAppUrl + 'select-favourite', requestBody, this.nodeJsHttpHeaders);
  }

  // Method to delete the Favourite Items from Service Catalog microservice of BPA
  deleteFavourite(id) {
    const requestBody = {
      accessToken: localStorage.getItem('accessToken'),
      vmIPAddress: this.vmIPAddress,
      id: id
    };

    return this.httpClient.post(this.nodeAppUrl + 'delete-favourite', requestBody, this.nodeJsHttpHeaders);
  }

  // Method to make REST API call to fetch the list of Service Orders from BPA
  getServiceorders() {

    const requestBody = {
      accessToken: localStorage.getItem('accessToken'),
      vmIPAddress: this.vmIPAddress
    };

    return this.httpClient.post(this.nodeAppUrl + 'service-order', requestBody, this.nodeJsHttpHeaders);
  }

  // Method to get the list of Service Items from Service Catalog microservice of BPA
  getServiceItems() {

    const requestBody = {
      accessToken: localStorage.getItem('accessToken'),
      vmIPAddress: this.vmIPAddress
    };

    return this.httpClient.post(this.nodeAppUrl + 'service-item', requestBody, this.nodeJsHttpHeaders);
  }

  // Method to get the list of Service Categories from Service Catalog microservice of BPA
  getServiceCategory() {
    const requestBody = {
      accessToken: localStorage.getItem('accessToken'),
      vmIPAddress: this.vmIPAddress
    };

    return this.httpClient.post(this.nodeAppUrl + 'category-service', requestBody, this.nodeJsHttpHeaders);
  }

  // Method to get the list of devices from Device Manager microservice of BPA
  getDeviceList() {
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

  fnReadjson(fileName) {
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

    const requestBody = {
      accessToken: localStorage.getItem('accessToken'),
      vmIPAddress: this.vmIPAddress,
      nsoInstance: this.nsoInstance,
      pingDeviceInfo: pingDeviceInfo[0]
    };

    return this.httpClient.post(this.nodeAppUrl + 'ping-device', requestBody, this.nodeJsHttpHeaders);
  }

  // Method to Edit Device Details from Device Manager
  editDevice(deviceDetails) {

    const requestBody = {
      deviceInfo: deviceDetails
    };
    return this.httpClient.post(this.nodeAppUrl + 'edit-device', requestBody, this.nodeJsHttpHeaders);
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
  // REST API to fetch the admin details from bpa-backend application
  fnFetchAdminDetails() {
    return this.httpClient.get(this.nodeAppUrl + 'admin');
  }

  // REST API to fetch the demo user details from bpa-backend application
  fnFetchDemoDetails() {
    return this.httpClient.get(this.nodeAppUrl + 'demo');
  }

    // REST API to fetch the technical support details from bpa-backend application
  fnFetchSupportDetails(){
      return this.httpClient.get(this.nodeAppUrl + 'techSupport');
    }   

}

