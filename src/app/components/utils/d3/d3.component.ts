import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

import { BpaService } from 'src/app/service/bpa.service';

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css']
})
export class D3Component implements OnInit {

  constructor(private bpaservice: BpaService) {}

  ngOnInit() {

    let svg = d3.select('svg');
    let width = window.innerWidth/2;
    let height = width;
    let innerRadius = width * 0.2;
    let outerRadius = width * 0.7;
    let g = svg.append('g').attr('transform', `translate(${width * 0.50},${height * 0.50})`);
    console.log('width: ', width);
    console.log('height: ', height);
    console.log('outerRadius: ', outerRadius);
    console.log('g: ', g);

    let xScaleOffset = Math.PI * 75/180;

    let x = d3.scaleBand()
              .range([xScaleOffset, 2 * Math.PI + xScaleOffset])
              .align(0);

    let y = d3.scaleLinear()
              .range([innerRadius, outerRadius]);

    let z = d3.scaleOrdinal()
              .range(['#a1d76a', '#91bfdb']);

    let zClasses = ['внутренняя сторона', 'внешняя сторона'];

    this.bpaservice.fnReadCSV('assets/simple_stat.csv').subscribe(csvTextData => {

      console.log('Data read from CSV file: ');
      // console.log('csvTextData =>', csvTextData);

      let data = d3.csvParse(csvTextData);
      console.log('csvJsonData =>', data);

      let keys = data.columns.slice(1);
      let meanAccidents = d3.mean(data, function(d) { return d3.sum(keys, function(key) { return parseInt(d[key]); }); });

      x.domain(data.map(function(d) { return d.km; }));
      y.domain([0, parseInt(d3.max(data, function(d) { return (d.left_lane + d.right_lane); }))]);
      z.domain(data.columns.slice(1));
      console.log('keys: ', keys);

      // Accidents
      g.append('g')
        .selectAll('g')
        .data(d3.stack().keys(keys)(data))
        .enter().append('g')
        .attr('fill', function(d) { return z(d['key']); })
        .selectAll('path')
        .data(function(d) { return d; })
        .enter().append('path')
        .attr('d', d3.arc()
          .innerRadius(function(d) { return y(d[0]); })
          .outerRadius(function(d) { return y(d[1]); })
          .startAngle(function(d) { return x(d['data']['km']); })
          .endAngle(function(d) { return x(d['data']['km']) + x.bandwidth(); })
          .padAngle(0.01)
          .padRadius(innerRadius));

      //yAxis and Mean
      let yAxis = g.append('g')
                    .attr('text-anchor', 'middle');

      let yTicksValues = d3.ticks(0, 40, 4);
      console.log('Среднее: ', meanAccidents);

      // Mean value line
      let yMeanTick = yAxis
                        .append('g')
                        .datum([meanAccidents]);

      yMeanTick.append('circle')
                .attr('fill', 'none')
                .attr('stroke', '#C0625E')
                .attr('stroke-dasharray', '5 3')
                .attr('r', y);

      let yTick = yAxis
                    .selectAll('g')
                    .data(yTicksValues)
                    .enter().append('g');

      yTick.append('circle')
            .attr('fill', 'none')
            .attr('stroke', '#ccdcea')
            .attr('r', y);

      yTick.append('text')
            .attr('y', function(d) { return -y(d); })
            .attr('dy', '0.35em')
            .attr('fill', 'none')
            .attr('stroke', '#fff')
            .attr('stroke-width', 5)
            .text(y.tickFormat(5, 's'));

      yTick.append('text')
            .attr('y', function(d) { return -y(d); })
            .attr('dy', '0.35em')
            .text(y.tickFormat(5, 's'));

      yAxis.append('text')
            .attr('y', function(d) { return -y(yTicksValues.pop()); })
            .attr('dy', '-2em')
            .text('МКАД, аварийность');

      // Labels for xAxis
      let label = g.append('g')
                    .selectAll('g')
                    .data(data)
                    .enter().append('g')
                    .attr('text-anchor', 'middle')
                    .attr('transform', function(d) { return 'rotate(' + ((x(d.km) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ')translate(' + innerRadius + ',0)'; });

      label.append('line')
            .attr('x2', function(d) { return (((d.km % 5) === 0) || (d.km === '1')) ? -7 : -4 })
            .attr('stroke', '#000');

      label.append('text')
            .attr('transform', function(d) { return (x(d.km) + x.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI ? 'rotate(90)translate(0,16)' : 'rotate(-90)translate(0,-9)'; })
            .text(function(d) {
              let xlabel = (((d.km % 5) === 0) || (d.km === '1')) ? d.km : '';
              return xlabel;
            });

      // Legend
      let legend = g.append('g')
                    .selectAll('g')
                    .data(zClasses)
                    .enter().append('g')
                    .attr('transform', function(d, i) { return 'translate(-50,' + (i - (zClasses.length - 1) / 2) * 25+ ')'; });

      legend.append('circle')
            .attr('r', 8)
            .attr('fill', z);

      legend.append('text')
            .attr('x', 15)
            .attr('y', 0)
            .attr('dy', '0.35em')
            .text(function(d) { return d; });
    });
  }
}
