// /*
//    Sample cardConfig Object:
//      cardConfig = {
//      header: "Warning",
//      headerColor: "lightblue",
//      body: "Password is Incorrect",
//      btnArray:[{
//        color: "success",
//        btext: "ok",
//        fnName: this.okFun
//      },{
//        color: "danger",
//        btext: "cancel",
//        fnName: this.cancelfn
//       }]
//      };

//    okFun() {
//      alert("ok")
//    }
//    cancelfn() {
//      alert("cancel")
//    }*/
// import { Component, OnInit, Input } from '@angular/core';
// import { Router } from '@angular/router';
// import { BpaService } from 'src/app/service/bpa.service';
// import { Observable} from 'rxjs';

// @Component({
//   selector: 'app-cards',
//   templateUrl: './cards.component.html',
//   styleUrls: ['./cards.component.css']
// })
// export class CardsComponent implements OnInit {
//   storeResponse;
//   cardResponse;
//   favResponse;
//   Response;
//   storeIndex = [];
//   favResponseCopy;
//   favourite = false;
//   @Input()
//   inputToCard: any;
//   constructor(private route: Router, private bpaservice: BpaService) {
//    }
//   ngOnInit() {
//   }
//   order(item) {
//     this.route.navigate(['/dashboard']);
//   }
  
//   selectFavourite(id) {
//     this.bpaservice.selectFavourite(id._id).subscribe((res) =>  this.callFavCheck())
//   }
//   deleteFavourite(id) {
//     const getID = this.favResponseCopy.find((res) => res['serviceitems'][0]._id === id._id);
//     this.bpaservice.deleteFavourite(getID._id).subscribe((res) => this.callFavCheck())
//   }

//   callFavCheck() {
//     this.bpaservice.getFavItems().subscribe((record) => {
//       this.favResponse = record['data'];
//       this.favResponseCopy = record['data'];
//       this.cardResponse = this.storeResponse;
//       this.cardResponse.map((res) => {
//         const findFav = this.favResponseCopy.find((fav) => fav['serviceitems'][0]._id === res._id);
//         return res['flag'] = findFav ? true : false;
//       });
//     })
//   }
// }
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
selector: 'app-cards',
templateUrl: './cards.component.html',
styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit { 
@Input()
inputToCard: any;
@Output() deleteFav = new EventEmitter();
@Output() addFav = new EventEmitter();
constructor(private route: Router) {
}
ngOnInit() {
}
order(item) {
this.route.navigate(['/dashboard']);
}

selectFavourite(id) {
this.addFav.emit(id)
}
deleteFavourite(id) {
this.deleteFav.emit(id);
}
}