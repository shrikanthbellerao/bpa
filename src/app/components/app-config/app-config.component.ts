import { Component, OnInit } from '@angular/core';
import { BpaService } from 'src/app/service/bpa.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-app-config',
  templateUrl: './app-config.component.html',
  styleUrls: ['./app-config.component.css']
})
export class ApplicationConfigComponent implements OnInit {

  constructor(private bpaService: BpaService) { }
  ngOnInit() {
    this.bpaService.BackendUpdate().subscribe(response => {
      console.log(response);
    });
    
  }
  cardConfig = {
    header: "Broadcast Message",
    headerColor: "lightblue",
    body: "Site Under Construction!",
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
