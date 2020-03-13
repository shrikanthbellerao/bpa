import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor() { }
  /* to hide the collapsed nav on clicking a nav item */
  ngOnInit() { $('.trigger').click(function(){
    $('.navbar-collapse').collapse('hide');
  });}
 
}
