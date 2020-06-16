import { Component, OnInit, Input, Output,OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: any = {};
  @Input() profitData;
  @Input() subCategory;
  constructor() { }

  ngOnInit(): void {
    this.chartData();
  }

  chartData() {

    this.chartOptions ={
      chart: {
          zoomType: 'xy'
      },
      title: {
          text: 'Order Quantity vs Discount by Month'
      },
      subtitle: {
          // text: 'Source: WorldClimate.com'
      },
      credits:{
        enabled:false
      },
      xAxis: [{
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          crosshair: true
      }],
      yAxis: [{ // Primary yAxis
          labels: {
              format: '{value}',
              style: {
                  color: Highcharts.getOptions().colors[1]
              }
          },
          title: {
              text: 'Metric 1',
              style: {
                  color: Highcharts.getOptions().colors[1]
              }
          }
      }, { // Secondary yAxis
          title: {
              text: 'Metric 2',
              style: {
                  color: Highcharts.getOptions().colors[0]
              }
          },
          labels: {
              format: '{value}',
              style: {
                  color: Highcharts.getOptions().colors[0]
              }
          },
          opposite: true
      }],
      tooltip: {
          shared: true
      },
      legend: {
          enabled:false,
          layout: 'horizontal',
        //   align: 'left',
        //   x: 120,
        //   verticalAlign: 'top',
        //   y: 100,
          floating: false,
          backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || // theme
              'rgba(255,255,255,0.25)'
      },
      series: [{
          name: 'Metric 2',
          type: 'column',
          yAxis: 1,
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
          tooltip: {
              // valueSuffix: ' mm'
          }
  
      }, {
          name: 'Metric 1',
          type: 'spline',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
          tooltip: {
              // valueSuffix: '°C'
          }
      }]
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
    this.profitData= changes.profitData.currentValue;
    this.subCategory= changes.subCategory.currentValue;
    if(changes.profitData.firstChange=true){
    this.chartData();
    }
  }

}