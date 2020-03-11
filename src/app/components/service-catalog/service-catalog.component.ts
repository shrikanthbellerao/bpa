import { Component, OnInit, Input } from '@angular/core';
import { BpaService } from 'src/app/service/bpa.service';
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
  

  constructor(private bpaservice: BpaService) {
    this.bpaservice.getServiceItems().subscribe(res => {
      this.storeResponse = res['data'];
      this.cardResponse = this.storeResponse;
      
    }, err => console.log('error.....', err))


    this.bpaservice.getServiceCategory().subscribe(res => {
      this.Response = res['data'];
    }, err => console.log('error..', err))
  }

  ngOnInit() {
  }
  getCheck(i) {
    this.cardResponse = [];
    const findIndex = this.storeIndex.findIndex(x => x === i);
    (findIndex >= 0) ? this.storeIndex.splice(findIndex, 1) : this.storeIndex.push(i)
    if (this.storeIndex.length === 0) {
      this.cardResponse = this.storeResponse;
    } else {
      this.storeIndex.forEach((index) => {
        const getResponse = this.storeResponse.filter((check) => check.categoryIds[0]['name'] === this.Response[index].name);
        this.cardResponse.push(...getResponse)

      })
    }
  }
  getFav(fav) {
    this.cardResponse = [];
    this.favResponse=[];
     console.log('response..', fav)
    if (fav) {
      this.bpaservice.getFavItems().subscribe(res => {
        // this.storeResponse = res['data'];
        res['data'].forEach((card) => {
          this.favResponse.push(card.serviceitems[0])
          this.favResponse.forEach((res) => this.cardResponse.push( this.storeResponse.find((result ) => result._id === res._id )));
        })
        console.log(this.favResponse);

      }, err => console.log('error..', err))
    } else {
      this.bpaservice.getServiceItems().subscribe(res => {
        this.storeResponse = res['data'];
        this.cardResponse = this.storeResponse;
      }, err => console.log('error.....', err))

    }
  }


  selectFavourite(id) {
    console.log('id', id)
    this.bpaservice.selectFavourite(id._id).subscribe((res) => {
      console.log('response:', res);
    })
  }
  deleteFavourite(id) {
    console.log('id', id)
    this.bpaservice.deleteFavourite(id._id).subscribe((res) => {
      console.log('response:', res);
      
    })
  }
  checkItem(item)
  {
    console.log(this.favResponse);
    if(this.favResponse.find(item))
      return true;
     else
      return false; 
  }
}