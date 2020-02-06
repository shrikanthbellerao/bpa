import { Component } from '@angular/core';
import { BpaService } from './service/bpa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private bpaService: BpaService) { }

  ngOnInit() {
    console.log('Inside ngOnInit');
  }

  // Method to invoke a function in Service to validate whether the user is a valid user or not
  fnFetchAccessToken() {

    this.bpaService.fnValidateLogin().subscribe((response) => {
      console.log('Fetched data from Service: ', response);
    });
  }
}
