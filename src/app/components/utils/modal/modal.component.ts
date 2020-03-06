/* Sample modalConfig Object:

  modalConfig = {
    title:"Login",
    body:"Login Content",
    buttonList:[{
      buttonLabel: "Ok"
    },{
      buttonLabel: "Submit"
    },{
      ....
    }]
  };
*/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent implements OnInit {

  @Input() displayModal: boolean;

  @Input() modalConfig: any;

  @Output() closeModal = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  hideModal() {
    this.closeModal.emit()
  }
}
