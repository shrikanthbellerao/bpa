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
<<<<<<< HEAD
  templateUrl: './modal.component.html'
=======
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
>>>>>>> 9f89de9d390c9896ada73ed6c06759e148c970f7
})

export class ModalComponent implements OnInit {

  @Input() displayModal: boolean;

  @Input() modalConfig: any;

<<<<<<< HEAD
=======

  @Input() timelineElement: any
  @Input() timelineElements: any
>>>>>>> 9f89de9d390c9896ada73ed6c06759e148c970f7
  @Output() closeModal = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  hideModal() {
<<<<<<< HEAD
    this.modalConfig.show=false;
    this.closeModal.emit()
=======
    this.closeModal.emit();
>>>>>>> 9f89de9d390c9896ada73ed6c06759e148c970f7
  }
}
