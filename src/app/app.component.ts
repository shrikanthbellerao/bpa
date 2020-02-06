import { Component } from '@angular/core';
import { BpaService } from './service/bpa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  userName: string = '';
  password: string = '';
  accessToken: string;

  constructor(private bpaService: BpaService) { }

  ngOnInit() {
    console.log('Inside ngOnInit');
  }

  // Method to invoke a function in Service to validate whether the user is a valid user or not
  fnValidateCredential(formData) {

    console.log('Inside fnValidateCredential', formData.value);

    const base64Credential: string = btoa(formData.value.userName + ":" + formData.value.password);
    console.log(base64Credential);

    this.bpaService.fnValidateLogin(base64Credential).subscribe((response) => {
      console.log('Fetched data from Service: ', response);
      this.accessToken = response['access_token'];
    });
  }
}
