import { Component, OnInit } from '@angular/core';
import { BpaService } from 'src/app/service/bpa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  filterlist = [];
  statuslist = ['Complete', 'IN-PROCESS','ROLLBACK-IN-PROCESS']
  chart1dash:any;
  chartDash:any;
  timelinedash:any = []

constructor(private bpaservice : BpaService) { }

ngOnInit() {

  this.bpaservice.getServiceorders().subscribe(res => {

    console.log('response of getServiceorders:', res);
    this.chart1dash = res['body']['data'];
    this.timelinedash = res['body']['data'];
    this.fnTimelineTabClick(this.statuslist[0]);
  }, err => console.log('Error:', err));

  this.bpaservice.getServiceItems().subscribe(res => {
    console.log('response:', res);
    this.chartDash = res['data'];
    console.log(this.chartDash);
  }, err => console.log('Error:', err));
}

fnTimelineTabClick(tabName) {
  console.log('Inside fnTimelineTabClick', tabName);
     this.filterlist = [];
    this.timelinedash.filter((res) => {
    if(res.status.toLowerCase() === tabName.toLowerCase()) {
        this.filterlist.push({
        header: `Order ID: ${res.orderNumber}`,
        crq: res.formData.crq,
        time: res.createdAt
       })
    }
  })

  console.log('newTimeLineList', this.filterlist)
}

}
