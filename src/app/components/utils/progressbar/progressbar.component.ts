import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  @Input() progressBarResponse;
  title = 'progressbar';
  constructor() { }
  

  // ngOnInit() {
  //  for(var i=0; i<=100; i++) {
  //    ((i) => {
  //      setTimeout(() => {
  //     this.progressBarWidth = `${i}%`
  //     }, 100*i);
  //     })(i); 
  ngOnInit()
  {

  }


}
