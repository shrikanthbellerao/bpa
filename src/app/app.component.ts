import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bpa app';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    console.log('Inside ngOnInit');

    const httpOptions = {
      headers : new HttpHeaders({
        Accept : 'application/json',
        Authorization: 'Basic YWRtaW46YWRtaW4='
      })
    };

    this.httpClient.post('https://10.83.34.65/bpa/api/v1.0/login', {}, httpOptions).subscribe((responseObj) => {
      console.log('Response: ', responseObj);
    });
  }
}
