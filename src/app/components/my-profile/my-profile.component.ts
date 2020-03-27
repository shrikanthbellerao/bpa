import { Component, OnInit } from '@angular/core';
import { BpaService } from 'src/app/service/bpa.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  adminDetails: Object;
  demoDetails: Object;

  constructor(private bpaService: BpaService) { }
  user;
  ngOnInit() {
    this.bpaService.fnFetchAdminDetails().subscribe(res => {
      console.log('Admin User Details fetched from backend', res);
      this.adminDetails = res;      
    }, err => console.log('Error:', err));
  
    this.bpaService.fnFetchDemoDetails().subscribe(res => {
      console.log('Demo User Details fetched from backend', res);
      this.demoDetails = res;
    }, err => console.log('Error:', err));

    this.user = localStorage.getItem("userdata");
  }

}
