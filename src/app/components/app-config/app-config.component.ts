import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-config',
  templateUrl: './app-config.component.html',
  styleUrls: ['./app-config.component.css']
})
export class ApplicationConfigComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  cardConfig = {
    header: "Broadcast Message",
    headerColor: "lightblue",
    body: "Site Under Construction",
    btnArray:[{
      color: "success",
      btext: "Update",
      // fnName: this.okFun
    },//{
    //   color: "danger",
    //   btext: "cancel",
    //   fnName: this.cancelfn
      //}
    ]
    };

  // okFun() {
  //   alert("ok")
  // }
  // cancelfn() {
  //   alert("cancel")
  // }
  
}
