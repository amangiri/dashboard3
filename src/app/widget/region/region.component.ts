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
  catString='';
  // @Input() subCategory;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.region)
    this.region.forEach(element => {
      // console.log(element)
      this.catString= this.catString+'<br>'+element.name
    });
    // console.log(this.catString)
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
            format: localStorage.getItem("matric")==='Discount'?'{point.y:.0f}%':'{point.y:.0f}'
          }
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{point.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">Matric</span>: <b>{point.y:,.2f}<br/>'
      },
      title: {
        text: localStorage.getItem("matric")+' by Region'
      },
      subtitle: {
        // text: 'Region'
    },
      xAxis: {
        categories: [this.catString],
          
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
          name: this.region[0].name,
          data: [this.region[0].data],
          color: 'blue'
        },
        {
          name: this.region[1].name,
          data: [this.region[1].data],
          color: 'orange'
        },
        {
          name: this.region[2].name,
          data: [this.region[2].data],
          color: 'red'
        },
        {
          name: this.region[3].name,
          data: [this.region[3].data],
          color: '#c01fed'
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