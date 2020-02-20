/*

Sample Configuration to build a Form

  this.userForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      gender: [''],
      phone: ['']
    });
    
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm: any;
  accountForm: any;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      gender: [''],
      phone: ['']
    });


    this.accountForm = this.formBuilder.group({
      email: [''],
      userName: [''],
      password: [''],
      confirmPassword: [''],
      role: [''],
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
    console.log(this.accountForm.value);
  }



}

