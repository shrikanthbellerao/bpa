import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
 
  // nav:any = [{btn: "Tab 1",
  // content:"Data of tab 1"},
  //  {btn:"Tab 2",
  //   content:"Data of tab 2"},
  //  {btn:"Tab 3",
  //  content:"Data of tab 3"}
  // ];
  @Input()
  timelineElements: any;
  
  constructor() {

   }

  ngOnInit() { }

}
