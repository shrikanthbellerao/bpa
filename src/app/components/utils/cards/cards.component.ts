/*
   Sample cardConfig Object:
     cardConfig = {
     header: "Warning",
     headerColor: "lightblue",
     body: "Password is Incorrect",
     btnArray:[{
       color: "success",
       btext: "ok",
       fnName: this.okFun
     },{
       color: "danger",
       btext: "cancel",
       fnName: this.cancelfn
      }]
     };

   okFun() {
     alert("ok")
   }
   cancelfn() {
     alert("cancel")
   }*/
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
