import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input()
  modalConfig:any;
    constructor() { }
  ngOnInit() {
  }
  /* Modal app.component.ts code
  modalConfig = {
    title:"Login" ,
    body:"Login Content",
    buttonLst:[
      {btnLabel1: "Ok",
      btnLabel2: "Submit"},
   ]
  };*/
}
