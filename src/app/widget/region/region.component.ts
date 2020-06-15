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
  @Input() region;
  // @Input() subCategory;
  constructor() { }

  ngOnInit(): void {
    console.log(this.region)
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
          name: this.region[2].regionName,
          data: [this.region[2].matric],
          color: 'blue'
        },
        {
          name: this.region[3].regionName,
          data: [this.region[3].matric],
          color: 'orange'
        },
        {
          name: this.region[0].regionName,
          data: [this.region[0].matric],
          color: 'red'
        },
        {
          name: this.region[1].regionName,
          data: [this.region[1].matric],
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
    // if(changes.profitData.firstChange=true){
    // this.chartData();
    // }
  }

}