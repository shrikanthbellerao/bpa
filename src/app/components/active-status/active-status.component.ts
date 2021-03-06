import { Component, OnInit, Input } from '@angular/core';
import { BpaService } from 'src/app/service/bpa.service';

@Component({
  selector: 'app-active-status',
  templateUrl: './active-status.component.html'
})
export class ActiveStatusComponent implements OnInit {

  @Input() timelineElement: any
  constructor(private dcService: BpaService) { }
  showSelectedData;
  ngOnInit() {
    this.showSelectedData = this.dcService.getServiceOrderStatus();
  }

}
