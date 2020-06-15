import { Component, OnInit, Input, Output,OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: any = {};
  // @Input() profitData;
  // @Input() subCategory;
  constructor() { }

  ngOnInit(): void {
    this.chartData();
  }

  chartData() {

    this.chartOptions = {

      chart: {
        type: 'bar',
      },
      legend: {
        enabled: false,
        layout: 'vertical',
        align: 'middle',
        verticalAlign: 'middle',
        labelFormatter: function () {
          return this.name + " - <span class='total'>" + this.y + "</span>"
        }
      },
      plotOptions: {
        series: {
          // borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.0f}'
          }
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{point.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:,.2f}<br/>'
      },
      title: {
        text: '<h5>Discount by Region</h5>'
      },
      subtitle: {
        // text: 'Region'
    },
      xAxis: {
        categories: ['<br>Central<br>East<br>South<br>West'],
          
        allowDecimals: false,
        title: {
          // text: 'Sub Category'
        }
      },
      yAxis: {
        allowDecimals: false,
        title: {
          text: 'Metric'
        }
      },
      credits: {
        enabled: false,
      },

      series: [
        {
          name: 'Central',
          data: [3.7],
          color: 'blue'
        },
        {
          name: 'East',
          data: [6.31],
          color: 'orange'
        },
        {
          name: 'South',
          data: [9.31],
          color: 'red'
        },
        {
          name: 'West',
          data: [5.31],
          color: '#3188d4'
        }
      ],

    };
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300)

  }


  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes)
    // this.profitData= changes.profitData.currentValue;
    // this.subCategory= changes.subCategory.currentValue;
    if(changes.profitData.firstChange=true){
    this.chartData();
    }
  }

}