import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import Sunburst from 'sunburst-chart';
import { BpaService } from 'src/app/service/bpa.service';

@Component({
  selector: 'app-d3-zoomable-sunburst',
  templateUrl: './d3-zoomable-sunburst.component.html',
  styleUrls: ['./d3-zoomable-sunburst.component.css']
})
export class D3ZoomableSunburstComponent implements OnInit {

  @Input() sunburstElement:any

  constructor(private bpaservice: BpaService) { }

  ngOnInit() {

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    let json = {
      'name': 'Services',
      'color': "#D6EAF8",
      'children': []
    };

    json['children'] = this.sunburstElement;

    console.log('aaaaa',json)
    let obj = JSON.stringify(json);
    let data = JSON.parse(obj);

      Sunburst()
        .width(390)
        .height(400)
        .data(data)
        .label('name')
        .size('value')
        .color('color')
        .tooltipContent((d, node) => `Value: <i>${node.value}</i>`)
        (document.getElementById('chart'));
    // })
  }
}
