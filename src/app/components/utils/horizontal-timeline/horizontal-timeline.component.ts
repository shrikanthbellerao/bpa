import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-timeline',
  templateUrl: './horizontal-timeline.component.html',
  styleUrls: ['./horizontal-timeline.component.css']
})
export class HorizontalTimelineComponent implements OnInit {
  @Input()
  timelineElement: any;
  constructor() { }

  ngOnInit() {
  }

}
