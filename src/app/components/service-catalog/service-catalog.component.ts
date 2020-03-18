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
    forkJoin([this.bpaservice.getServiceItems(), this.bpaservice.getFavItems()]).subscribe((record) => {
      this.storeResponse = record[0]['body']['data'];
      this.cardResponse = this.storeResponse;
      this.favResponse = record[1]['body']['data'];
      this.favResponseCopy = record[1]['body']['data'];
      this.cardResponse.map((res) => {
        const findFav = this.favResponseCopy.find((fav) => fav['serviceitems'][0]._id === res._id);
        return res['flag'] = findFav ? true : false;
      });
    })
  }
  ngOnInit() {
  }
  getCheck(index) {
    if (index>=0) {
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
      this.bpaservice.getFavItems().subscribe((record) => {
        this.favResponse = record['body']['data'];
        this.storeResponse.map((res) => {
          const findFav = this.favResponse.find((fav) => fav['serviceitems'][0]._id === res._id);
          return res['flag'] = findFav ? true : false;
        });
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
      })
    }

  }
  getFav(fav) {
    this.favourite = fav;
    this.getCheck(-1)
  }
  selectFavourite(id) {
    this.bpaservice.selectFavourite(id._id).subscribe((res) =>  this.callFavCheck())
  }
  deleteFavourite(id) {
    const getID = this.favResponseCopy.find((res) => res['serviceitems'][0]._id === id._id);
    this.bpaservice.deleteFavourite(getID._id).subscribe((res) => this.callFavCheck())
  }

  callFavCheck() {
    this.bpaservice.getFavItems().subscribe((record) => {
      this.favResponse = record['body']['data'];
      this.favResponseCopy = record['body']['data'];
      this.cardResponse = this.storeResponse;
      this.cardResponse.map((res) => {
        const findFav = this.favResponseCopy.find((fav) => fav['serviceitems'][0]._id === res._id);
        return res['flag'] = findFav ? true : false;
      });
    })
  }
}
