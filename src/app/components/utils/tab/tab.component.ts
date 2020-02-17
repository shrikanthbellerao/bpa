import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() nav;

  showContent;

  constructor() { }

  show(res) {
    this.showContent = res;
  }
  ngOnInit() {
    this.show(this.nav[0].content)
  }

}

