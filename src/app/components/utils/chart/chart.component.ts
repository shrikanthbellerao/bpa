import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  // chartElements:any = [{categoryIds: {name: "Collaboration Services" }},
  // {categoryIds: {name: "MVP Service Catalog Refresh #2" }},
  // {categoryIds: {name: "Collaboration Services" }},
  // {categoryIds: {name: "Enterprise Services" }} ,
  // {categoryIds: {name: "Collaboration Services" }},
  // {categoryIds: {name: "Core Services" }}];

  constructor() { }

  // collabCount = 0;
  // mvpCount = 0;
  // enterpriseCount = 0;
  // coreCount = 0;
  // dmzCount = 0;
  // branchCount = 0;
  // commonCount = 0;
  // datacenterCount = 0;

  ngOnInit() {
  
    // console.log(this.chartElements);

    // this.chartElements.forEach((data) => {
    //   if(data.categoryIds.name === "Collaboration Services")
    //    this.collabCount++;
     
    //   if(data.categoryIds.name === 'MVP Service Catalog Refresh #2')
    //    this.mvpCount++;
  
    //   if(data.categoryIds.name === 'Enterprise Services')
    //    this.enterpriseCount++;
  
    //   if(data.categoryIds.name === 'Core Services')
    //    this.coreCount++;
  
    //   if(data.categoryIds.name === 'Branch Services')
    //    this.branchCount++;
  
    //   if(data.categoryIds.name === 'DMZ Services')
    //    this.dmzCount++;
  
    //   if(data.categoryIds.name === 'Common Services')
    //    this.commonCount++;
  
    //   if(data.categoryIds.name === 'Data Center Services')
    //    this.datacenterCount++;
    //  })
  
    //  console.log('collab items',this.collabCount);
  
    // var data1:any[] = [{
    //   "serviceName" : "Collaboration",
    //   "serviceItems" : this.collabCount,
    // }, {
    //   "serviceName" : "Enterprise",
    //   "serviceItems" : this.enterpriseCount,
    // }, {
    //   "serviceName" : "Core",
    //   "serviceItems" : this.coreCount,
    // }, {
    //   "serviceName" : "DMZ",
    //   "serviceItems" : this.dmzCount,
    // }, {
    //   "serviceName" : "Branch",
    //   "serviceItems" : this.branchCount,
    // }, {
    //   "serviceName" : "Common",
    //   "serviceItems" : this.commonCount,
    // }, {
    //   "serviceName" : "MVP",
    //   "serviceItems" : this.mvpCount,
    // }, {
    //   "serviceName" : "Data Center",
    //   "serviceItems" : this.datacenterCount,
    // }];
   
  // var svg = d3.select("svg"),
  // width = +svg.attr("width"),
  // height = +svg.attr("height"),
  // innerRadius = 100,
  // outerRadius = Math.min(width,height)/2.5,
  // g=svg.append("g").attr("transform","translate(" + width/2 + "," + height/2 + ")" );
  
  // var xScaleOffset = Math.PI * 75/180;
  // var x = d3.scaleBand().range([xScaleOffset, 2* Math.PI + xScaleOffset]).align(0);
  // var y = d3.scaleLinear().range([innerRadius,outerRadius]);
  // var z = d3.scaleOrdinal<string>().range(["#a1d76a", "#91bfdb"]);
  // var zClasses = ['Non-Admin'];

  // // var meanAccidents = d3.mean(data1, function(d) { return d3.sum(keys, function(key) { return d[key]; }); })
  // var meanAccidents = d3.mean(data1, function(d) { return data1.length })
  // var keys = [];
  // var key:any;

  // // for (key in data1){
  // //   if (key != "serviceName")
  // //     keys.push(key['serviceName']);
  // // }

  // this.chartElements.forEach(function(d){
  //   d.total = 0;
  //   keys.forEach(function(k){
  //     d.total += d[k];
  //   })
  // });
  
  // x.domain(data1.map(function(d) {
  //   return d.serviceName;
  // }));
  // y.domain([0, d3.max(data1, function(d) {
  //   return d.serviceItems;})]).nice();
  // z.domain(keys);
  
  // g.append('g')
  //     .selectAll("g")
  //   .data(d3.stack().keys(keys)(data1))
  //   .enter().append("g")
  //     .attr("fill", function(d) { return z(d.key); })
  //   .selectAll("path")
  //   .data(function(d) { return d; })
  //   .enter().append("path")
  //     .attr("d", <any>d3.arc()
  //         .innerRadius(function(d) { return y(d[0]); })
  //         .outerRadius(function(d) { return y(d[1]); })
  //         .startAngle(function(d:any) { return x(d.data1.serviceName); })
  //         .endAngle(function(d:any) { return x(d.data1.serviceName) + x.bandwidth(); })
  //         .padAngle(0.01)
  //         .padRadius(innerRadius));
  
  //         var yAxis = g.append("g")
  //         .attr("text-anchor", "middle");
    
  //     var yTicksValues = d3.ticks(0, 40, 4);
    
  //     console.log('Mean: ', meanAccidents);

  // var yMeanTick = yAxis
  //   .append("g")
  //   .datum([meanAccidents]);

  // yMeanTick.append("circle")
  //     .attr("fill", "none")
  //     .attr("stroke", "#C0625E")
  //     .attr("stroke-dasharray", "5 3")
  //     .attr("r", 'y');

  // var yTick = yAxis
  //   .selectAll("g")
  //   .data(yTicksValues)
  //   .enter().append("g");

  // yTick.append("circle")
  //     .attr("fill", "none")
  //     .attr("stroke", "#ccdcea")
  //     .attr("r", y);

  // yTick.append("text")
  //     .attr("y", function(d) { return -y(d); })
  //     .attr("dy", "0.35em")
  //     .attr("fill", "none")
  //     .attr("stroke", "#fff")
  //     .attr("stroke-width", 5)
  //     .text(y.tickFormat(5, "s"));

  // yTick.append("text")
  //     .attr("y", function(d) { return -y(d); })
  //     .attr("dy", "0.35em")
  //     .text(y.tickFormat(5, "s"));

  // yAxis.append("text")
  //     .attr("y", function(d) { return -y(yTicksValues.pop()); })
  //     .attr("dy", "-2em")
  //     .text("Requests");

  //     var label = g.append("g")
  //     .selectAll("g")
  //     .data(data1)
  //     .enter().append("g")
  //       .attr("text-anchor", "middle")
  //       .attr("transform", function(d) { return "rotate(" + ((x(d.serviceName) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")translate(" + innerRadius + ",0)"; });
  
  //   label.append("line")
  //       .attr("x2", function(d) { return (((d.serviceName % 5) == 0) || (d.serviceName == '1')) ? -7 : -4 })
  //       .attr("stroke", "#000");
  
  //   label.append("text")
  //       .attr("transform", function(d) { return (x(d.serviceName) + x.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI ? "rotate(90)translate(0,16)" : "rotate(-90)translate(0,-9)"; })
  //       .text(function(d) { 
  //         var xlabel = (((d.serviceName % 5) == 0) || (d.serviceName == '1')) ? d.serviceName : '';
  //         return xlabel; });

  //   var legend = g.append("g")
  //     .selectAll("g")
  //     .data(zClasses)
  //     .enter().append("g")
  //       .attr("transform", function(d, i) { return "translate(-50," + (i - (zClasses.length - 1) / 2) * 25+ ")"; });
  
  //   legend.append("circle")
  //       .attr("r", 8)
  //       .attr("fill", z);
  
  //   legend.append("text")
  //       .attr("x", 15)
  //       .attr("y", 0)
  //       .attr("dy", "0.35em")
  //       .text(function(d) { return d; });

  
  
  }
}

