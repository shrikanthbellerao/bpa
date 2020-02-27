import { Component, OnInit } from '@angular/core';
import { BpaService } from 'src/app/service/bpa.service';

@Component({
  selector: 'app-service-catalog',
  templateUrl: './service-catalog.component.html',
  styleUrls: ['./service-catalog.component.css']
})
export class ServiceCatalogComponent implements OnInit {
  storeResponse;
  cardResponse;
  Response;
  constructor(private bpaservice: BpaService) {
    this.bpaservice.getServiceItems().subscribe(res => {
      console.log('response....', res);
      this.storeResponse = res['data'];
      this.cardResponse = this.storeResponse;
    }, err => console.log('error.....', err))
  
  this.bpaservice.getServiceCategory().subscribe(res => {
    console.log('response....', res);
    this.Response = res['data'];
  }, err => console.log('error.....', err))
}
  
  ngOnInit() {
  }

  getCheck(check) {
    console.log('qqqq',this.storeResponse)
    const ss = this.storeResponse.filter((res) => res.userGroup[0]['group'] === 'enterprise');
    this.cardResponse = ss; 
  }

}
