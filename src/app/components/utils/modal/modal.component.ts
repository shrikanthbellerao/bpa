import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})

/* Sample modalConfig Object:

  modalConfig = {
    title:"Login",
    body:"Login Content",
    buttonLst:[{
      btnLabel: "Ok"
    },{
      btnLabel: "Submit"
    },{
      ....
    }]
  };

*/

export class ModalComponent implements OnInit {

  @Input()
  modalConfig:any;

  constructor() { }

  ngOnInit() { }
}
