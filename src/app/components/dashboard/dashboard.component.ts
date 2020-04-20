import { Component, OnInit } from '@angular/core';
import { BpaService } from 'src/app/service/bpa.service';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import { ChartsModule } from 'ng2-charts';
import { color } from 'd3';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  filterlist = [];
  finalCount = [];
  statuslist = ['COMPLETE', 'IN-PROCESS','ROLLBACK'];
  chart1dash:any;
  chartDash:any;
  timelinedash:any = [];
  broadcastMessage: string;

constructor(private bpaservice : BpaService) { }

ngOnInit() {

  this.bpaservice.getServiceorders().subscribe(res => {
    console.log('response of getServiceorders:', res);
    this.chart1dash = res['body'];
    this.timelinedash = res['body'];
    this.fnTimelineTabClick(this.statuslist[1]);
    console.log(this.chart1dash)
  }, err => console.log('Error:', err));

  this.bpaservice.getServiceItems().subscribe(res => {
    console.log('response for service items:', res);
    this.chartDash = res['body'];
    // console.log(this.chartDash);
  }, err => console.log('Error:', err));

  this.bpaservice.fnFetchBroadcastMessage().subscribe(res => {
    console.log('Broadcast message fetched from bpa-backend:', res);
    this.broadcastMessage = res['broadcastMessage'];
  }, err => console.log('Error:', err));

  this.fnd3chart();
 
}

fnd3chart() {
  const counts=[];
  forkJoin([this.bpaservice.getServiceItems(), this.bpaservice.getServiceorders()]).subscribe((itemsdata) => {
    itemsdata[0]['body'].forEach((res) => {
      counts.push({
        'name': res.categoryIds[0].name,
        "color":"#48C9B0",
        'children': [{name: res.name,"color":"#5DADE2",value:1}]
        })
    itemsdata[1]['body'].forEach((itemname) => {
    if(res.name === itemname.item) {
    const ss = counts.findIndex((getdata) => getdata.children[0].name === res.name);
    if(ss >=0) {
    counts[ss].children[0].value = counts[ss].children[0].value + 1;
    } else {
    counts.push({
    'name': res.categoryIds[0].name,"color":"#5DADE2",'children': [{name: res.name,"color":"#138D75",value:1}]
    })
    } 
    }
    })
    })
    counts.forEach((ss) => {
    const duplicate = this.finalCount.findIndex((k) => k.name === ss.name)
    if(duplicate >=0) {
    this.finalCount[duplicate].children.push(ss.children[0])
    } else {
    this.finalCount.push(ss)
    }
    })

    JSON.stringify(this.finalCount)
    console.log('count', this.finalCount)
    }) 
  }

fnTimelineTabClick(tabName) {
  console.log('Inside fnTimelineTabClick', tabName);
    this.filterlist = [];
    this.timelinedash.filter((res) => {
    if(res.status.toLowerCase() === tabName.toLowerCase()) {
        this.filterlist.push({
        header: `Order ID: ${res.orderNumber}, ${(res.formData && res.formData.crq) ? res.formData.crq : 'CRQ123456789000'}`,
        time: res.createdAt
       })
    }
  })
  console.log('filterlist:',this.filterlist)
 }
  
}
