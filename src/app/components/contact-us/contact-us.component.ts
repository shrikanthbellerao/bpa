import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BpaService } from 'src/app/service/bpa.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  emailid;
  formdata;
  contactUsDetails;
  constructor(private bpaService: BpaService) { }
  ngOnInit() {
    this.formdata = new FormGroup({
      name: new FormControl('', Validators.required),
      emailid: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      message: new FormControl('', Validators.required),
    });
  }

  get formdataControl() {
    return this.formdata.controls;
  }
  onClickSubmit(data) {
    this.bpaService.getcontactUs(data).subscribe((res) => {
      this.formdata.reset()
      //  this.formdata= true;
      // if (this.formdata.valid) {
      alert('Form Submitted succesfully!!!');

    })
  }
}