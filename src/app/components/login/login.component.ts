import { Component, OnInit } from '@angular/core';
import { BpaService } from 'src/app/service/bpa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string  = '';
  password: string  = '';
  accessToken: string;
  apiError          = false;
  startSpinner      = false;
  count             = 0;
  modalConfig       = {};

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

      console.log('Fetched data from Service: ', response);

      this.startSpinner = false;

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
<<<<<<< HEAD
        
      } );
      this.bpaService.nodeJsCheck().subscribe(response => {
        console.log('Message :' , response);
      })
=======
>>>>>>> 540fc3ea2eb8971735b51d439bc55f5b22835404
      }
    }, err => {
      this.apiError = true;
      this.count++;

      if (this.count <= 1) {
        this.fnValidateCredential(formData, false);
      } else {
        alert('The APIs are not working');
      }
<<<<<<< HEAD

      
  newRegister() {
=======
    });
  }

  // Method to register a new user
  fnRegisterNewUser() {
>>>>>>> 540fc3ea2eb8971735b51d439bc55f5b22835404
    this.router.navigate(['/signup']);
  }

  // Method to display "Contact Us" page
  contactus() {
    this.modalConfig = {
      title: "LoginComponent",
      body: "Login Content",
      show: true
    };
  }

  // Method to display "Questions" page
  questions() {
    this.modalConfig = {
      title: "LoginComponent",
      body: "Login Content"
    };
  }

}