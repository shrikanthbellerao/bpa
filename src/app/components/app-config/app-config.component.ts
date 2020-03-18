import { Component, OnInit } from '@angular/core';
import { BpaService } from 'src/app/service/bpa.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-app-config',
  templateUrl: './app-config.component.html',
  styleUrls: ['./app-config.component.css']
})
export class ApplicationConfigComponent implements OnInit {

  broadcastMessage: string;

  constructor(private bpaService: BpaService) { }

  startSpinner: boolean;
  cardConfig = {
    header: 'Broadcast Message',
    headerColor: '#f1f7fc',
    body: 'Hi',
    btnArray: [{
      color: 'success',
      btext: 'Update',
    }]
  };

  ngOnInit() {

    this.bpaService.fnFetchBroadcastMessage().subscribe(res => {
      console.log('Broadcast message fetched from bpa-backed:', res);
      this.broadcastMessage = res['broadcastMessage'];
      this.cardConfig.body = this.broadcastMessage;
    }, err => console.log('Error:', err));
  }

  fnSaveBroadcastMessage(formData) {

    console.log('Inside fnSaveBroadcastMessage: ', formData);

    this.startSpinner = true;
    this.bpaService.fnUpdateBroadcastMessage(formData.value.broadcastMessage).subscribe(res => {
      this.startSpinner = false;
      console.log('Broadcast message Updated in bpa-backed:', res);
      this.broadcastMessage = res['broadcastMessage'];
      this.cardConfig.body = this.broadcastMessage;
    }, err => {
      this.startSpinner = false;
      console.log('Error:', err);
    });
  }
}
