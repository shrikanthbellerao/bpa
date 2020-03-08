import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor() { }

  ngOnInit() { $('.trigger').click(function(){
    $('.navbar-collapse').collapse('hide');
  });}
 
}
