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

  chartdata:any = [{
    "name": "Services",
    "color": "#D6EAF8",    
    "children": [
     {
       "name": "Collaboration",
       "color":"#A569BD",
       "children": [
       {"name": "Refresh Cisco IP Phone","color":"#A569BD", "value":1}
      ]
     },
     {
       "name": "Enterprise",
       "color":"#EC7063",
       "children": [
       {"name": "Enterprise IDE Switch Provisioning","color":"#EC7063", "value":1}
      ]
     },
     {
        "name": "Branch",
        "color":"#5DADE2",
        "children": [
         {"name": "Branch Router Provisioning","color":"#5DADE2", "value":1},
         {"name": "Branch New Switch Provision","color":"#5DADE2", "value":1},
         {"name": "Branch Modify Switch Configuration","color":"#5DADE2", "value":94},
         {"name": "cccc","color":"#5DADE2", "value":10}
        ]
     },
     {
        "name": "DMZ",
        "color":"#138D75",
        "children": [
         {"name": "B2B PSK Rotation","color":"#138D75", "value":1} 
        ]
     },
     {
        "name": "Core",
        "color":"#48C9B0",
        "children": [
         {"name": "Link Route Away/Restore Management","color":"#48C9B0", "value":1},
         {"name": "Node Route Away/Restore Management","color":"#48C9B0", "value":1},
         {"name": "MACSec Enable Disable Service","color":"#48C9B0", "value":1},
         {"name": "L3VPN Service","color":"#48C9B0", "value":1},
         {"name": "Core Lockdown & Network Management Configuration","color":"#48C9B0", "value":1},
         {"name": "MACSec Security Key Rotation","color":"#48C9B0", "value":1},
         {"name": "Core - Circuit Bundle","color":"#48C9B0", "value":1}
        ]
     },
     {
        "name": "Common",
        "color":"#F4D03F",
        "children": [
         {"name": "Common Service - Global Configuration","color":"#F4D03F", "value":2},
         {"name": "EPS Global Configuration","color":"#F4D03F", "value":1},
         {"name": "Generic NCF","color":"#F4D03F", "value":1},
         {"name": "Common Service CEWA","color":"#F4D03F", "value":41},
         {"name": "ee-CMS-P Site Commissioning Service Request","color":"#F4D03F", "value":4}
        ]
     },
     {
        "name": "Data Center",
        "color":"#EB984E",
        "children": [
         {"name": "Data Center Modify Switch Config","color":"#EB984E", "value":4},
         {"name": "Data Center-Leaf Switch Provisioning","color":"#EB984E", "value":1}
        ]
     }
   ]
}]

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
