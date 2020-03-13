import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-hr-timeline',
  templateUrl: './hr-timeline.component.html',
  styleUrls: ['./hr-timeline.component.css']
})
export class HrTimelineComponent implements OnInit {
  @Input()
  timelineElement: any;
  constructor() { }

  ngOnInit() {
  }

}
