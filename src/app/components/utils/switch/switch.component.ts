/* 

ngx-ui-switch
Sample Configuration for Switch Component Input from Parent Component

switchInput = {
      size: 'small',
      color: 'rgb(0, 189, 99)',
      switchColor: '#80FFA2',
      checkedLabel: 'on',
      uncheckedLabel: 'off',
      isChecked: 'true',
      switchContent:'fa fa-check'
}

*/


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {


  @Input()
  switchConfig: any;

  constructor() { }

  ngOnInit() {
  }

}

