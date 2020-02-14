import { Component, OnInit } from '@angular/core';
import {ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

}
