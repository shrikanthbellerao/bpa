import { Component, OnInit, Input } from '@angular/core';
import { BpaService } from 'src/app/service/bpa.service';
import { Observable, forkJoin } from 'rxjs';
@Component({
  selector: 'app-service-catalog',
  templateUrl: './service-catalog.component.html',
  styleUrls: ['./service-catalog.component.css']
})
export class ServiceCatalogComponent implements OnInit {
  storeResponse;
  cardResponse;
  favResponse;
  Response;
  storeIndex = [];
  favResponseCopy;
  favourite = false;
  constructor(private bpaservice: BpaService) {
    this.bpaservice.getServiceCategory().subscribe(res => {
      this.Response = res['body'];
    }, err => console.log('error..', err))
    this.callApis();
  }
  callApis() {
    this.cardResponse = [];
    this.bpaservice.getServiceItems().subscribe((record) => {
      console.log('res', record);
      this.storeResponse = record['body'];
      this.cardResponse = this.storeResponse;
    })
  }
  ngOnInit() {
  }
  getCheck(index) {
    if (index >= 0) {
      const findIndex = this.storeIndex.findIndex(x => x === index);
      (findIndex >= 0) ? this.storeIndex.splice(findIndex, 1) : this.storeIndex.push(index)
    }
    if (!this.favourite) {
      this.cardResponse = [];
      if (this.storeIndex.length === 0) {
        this.cardResponse = this.storeResponse;
      } else {
        this.storeIndex.forEach((index) => {
          const getResponse = this.storeResponse.filter((check) => check.categoryIds[0]['name'] === this.Response[index].name);
          this.cardResponse.push(...getResponse);
        })
      }
    } 
    else {
      this.cardResponse = this.storeResponse.filter((res) => res.flag === true);
      if (this.storeIndex.length === 0) {
        this.cardResponse = this.cardResponse;
      } else {
        let getResponse = []
        this.storeIndex.forEach((index) => {
          getResponse.push(...this.storeResponse.filter((check) => check.categoryIds[0]['name'] === this.Response[index].name));
        })
        this.cardResponse = this.cardResponse.filter((res) => getResponse.find((fav) => fav._id === res._id));
      }
    }

  }
  getFav(fav) {
    this.favourite = fav;
    this.getCheck(-1)
  }
  selectFavourite(id) {
    this.bpaservice.selectFavourite(id._id).subscribe((res) => this.callApis())
  }
  deleteFavourite(id) {
    // const getID = this.favResponseCopy.find((res) => res['serviceitems'][0]._id === id._id);
    this.bpaservice.deleteFavourite(id._id).subscribe((res) => this.callApis())
  }
}
