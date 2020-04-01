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
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  @Input() displayModal: boolean;
  @Input() modalConfig: any;
  @Output() closeModal = new EventEmitter();
  buttonListLength = 0;

  constructor() { }

  ngOnInit() {
    if (this.modalConfig) {
      this.buttonListLength = this.modalConfig.buttonList.length;
    }
  }

  hideModal() {
    this.closeModal.emit();
  }
}
