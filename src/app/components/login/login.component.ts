import { Component, OnInit } from '@angular/core';
import { BpaService } from 'src/app/service/bpa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private bpaService: BpaService,private router: Router) { }

  ngOnInit() {
    console.log('Inside ngOnInit');
  }

  // Method to invoke a function in Service to validate whether the user is a valid user or not
  fnFetchAccessToken() {
    this.bpaService.fnValidateLogin().subscribe((response) => {
      console.log('Fetched data from Service: ', response);
      this.router.navigate(['/dashboard']);
    }, err =>   alert('api fail'));
  }
}
