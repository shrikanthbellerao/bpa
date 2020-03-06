import { Component, OnInit } from '@angular/core';
import { BpaService } from 'src/app/service/bpa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = '';
  password: string = '';
  accessToken: string;
  apiError = false;
  startSpinner = false;
  count=0;


  modalConfig = { 
  }
   


  constructor(private bpaService: BpaService,private router: Router) { }

  ngOnInit() {
    console.log('Inside ngOnInit');
  }

  // Method to invoke a function in Service to validate whether the user is a valid user or not
  fnValidateCredential(formData,flag) {
    if(flag) this.count=0;


  this.startSpinner = true;
    console.log('Inside fnValidateCredential', formData.value);

    const base64Credential: string = btoa(formData.value.userName + ":" + formData.value.password);
    console.log(base64Credential);

    this.bpaService.fnValidateLogin(base64Credential,flag).subscribe((response) => {
      console.log('Fetched data from Service: ', response);
      this.accessToken = response['access_token'];
      localStorage.setItem('accessToken',this.accessToken);
      this.apiError = false;
      this.startSpinner = false;
      this.router.navigate(['/dashboard']);
      }, err => { this.apiError = true; this.startSpinner = false;
        this.count++;
       if(this.count<=1){
           this.fnValidateCredential(formData,false);
        }
        else{
            alert("The APIs are not working");
        }
        
      } );
      }
      forGetPassword() {
      console.log('forget password....')
      }
      
      // localStorage.setItem('accessToken', this.accessToken);
      // this.apiError = false;
      // this.startSpinner = false;
      // this.router.navigate(['/dashboard']);
      // err =>  {  this.apiError = true; this.startSpinner = false;}


  // forGetPassword() 
  // {
  //   console.log('forget password....')
  // }

  newRegister()
  {
    this.router.navigate(['/signup']);
  }
  contactus()
  {
  this.modalConfig = {
    title:"LoginComponent",
    body:"Login Content",
    show: true
  }
  }
  questions()
  {
  this.modalConfig = {
    title:"LoginComponent",
    body:"Login Content"
  }

}}


