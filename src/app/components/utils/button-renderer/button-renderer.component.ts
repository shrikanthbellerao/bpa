import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-renderer',
  templateUrl: './button-renderer.component.html',
  styleUrls: ['./button-renderer.component.css']
})
export class ButtonRendererComponent implements OnInit {

  constructor() { }
  data:any;
  agInit(params){
    this.data=params;
  }

  onAlert()
  {
    console.log(this.data.data);
  }

  ngOnInit() {
  }

}
