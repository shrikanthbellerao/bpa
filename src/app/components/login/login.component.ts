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
  constructor(private bpaService: BpaService,private router: Router) { }

  ngOnInit() {
    console.log('Inside ngOnInit');
  }

  // Method to invoke a function in Service to validate whether the user is a valid user or not
  fnValidateCredential(formData) {
  this.startSpinner = true;
    console.log('Inside fnValidateCredential', formData.value);

    const base64Credential: string = btoa(formData.value.userName + ":" + formData.value.password);
    console.log(base64Credential);

    this.bpaService.fnValidateLogin(base64Credential).subscribe((response) => {
      console.log('Fetched data from Service: ', response);
      this.accessToken = response['access_token'];
      /* Toaster code this.bpaService.showSuccess('Login Successful!')*/
      this.apiError = false;
      this.startSpinner = false;
      this.router.navigate(['/dashboard']);
    }, err =>  {  /* Toaster code this.bpaService.showError('Invalid Credentials')
    this.bpaService.showWarning('Maximum Attempts Allowed is 5')
  this.apiError = true; this.startSpinner = false;*/} );
  }

  forGetPassword() {
    console.log('forget password....')
    /* Toaster code this.bpaService.showInfo('Remember Next time')*/
  }
}