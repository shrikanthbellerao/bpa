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
  count = 0;
  modalConfig = {};

  constructor(private bpaService: BpaService, private router: Router) { }

  ngOnInit() {
    console.log('Inside ngOnInit of LoginComponent');
    this.bpaService.fnTestNodeApp().subscribe(response => {
      console.log('Message:', response);
    });
  }

  // Method to invoke a function in Service to validate whether the user is a valid user or not
  fnValidateCredential(formData, flag) {

    if (flag) {
      this.count = 0;
    }

    this.startSpinner = true;
    console.log('Inside fnValidateCredential', formData.value);
    const base64Credential: string = btoa(`${formData.value.userName}:${formData.value.password}`);
    console.log(base64Credential);

    this.bpaService.fnValidateLogin(base64Credential, flag).subscribe((response) => {

      console.log('\nFetched data from Service: ');console.log(JSON.stringify(response));
      this.startSpinner = false;
      localStorage.setItem('userdata', formData.value.userName)
      if (response['status'] === 'success') {

        this.accessToken = response['body']['access_token'];
        console.log('accessToken: ', this.accessToken);
        localStorage.setItem('accessToken', this.accessToken);
        this.apiError = false;
        this.router.navigate(['/dashboard']);
      } else {
        this.apiError = true;
        this.count++;

        if (this.count <= 1) {
          this.fnValidateCredential(formData, false);
        } else {
          alert('The APIs are not working');
        }
      }
    }, err => {
      this.apiError = true;
      this.count++;
      if (this.count <= 1) {
        this.fnValidateCredential(formData, false);
      } else {
        alert('The APIs are not working');
      }
    });

  }

  // Method to register a new user
  fnRegisterNewUser() {
    this.router.navigate(['/signup']);
  }
  // Method to display "Contact Us" page
  contactus() {
    this.modalConfig = {
      title: 'LoginComponent',
      body: 'Login Content',
      show: true
    };
  }
  // Method to display "Questions" page
  questions() {
    this.modalConfig = {
      title: 'LoginComponent',
      body: 'Login Content'
    };
  }
}
