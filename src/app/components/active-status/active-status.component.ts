import { Component, OnInit } from '@angular/core';
import { BpaService } from 'src/app/service/bpa.service';

@Component({
  selector: 'app-active-status',
  templateUrl: './active-status.component.html',
  styleUrls: ['./active-status.component.css']
})
export class ActiveStatusComponent implements OnInit {

 
  constructor(private dcService: BpaService) { }
  showSelectedData;
  ngOnInit() {
    this.showSelectedData = this.dcService.getStatus();
  }

}
