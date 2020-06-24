import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: any = {};
  @Input() departmentCat;
  // @Input() subCategory;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.departmentCat);
    this.chartData();
  }

  chartData() {

    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: localStorage.getItem("matric") + ' by Category and Department'
      },
      xAxis: {
        type: 'category',
        title: {
          // text:'dsda'
        },
        labels: {
          rotation: -90,
          // style: {
          //   fontSize: '10px',
          //   fontFamily: 'Verdana, sans-serif'
          // }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Metric'
        }
      },
      plotOptions: {
        column: {
            dataLabels: {
                enabled: true,
                crop: false,
                verticalAlign: 'top',
                overflow: 'none',
                // x:0,
                // y:-10
            }
        }
    },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: 'Metric: <b>{point.y:.1f} </b>'
      },
      series: [{
        name: 'Metric',
        data: [
          [this.departmentCat[0].technology[0].category, this.departmentCat[0].technology[0].matric],
          [this.departmentCat[0].technology[1].category, this.departmentCat[0].technology[1].matric],
          [this.departmentCat[0].technology[2].category, this.departmentCat[0].technology[2].matric],
          [this.departmentCat[0].technology[3].category, this.departmentCat[0].technology[3].matric],
          [this.departmentCat[0].furniture[0].category, this.departmentCat[0].furniture[0].matric],
          [this.departmentCat[0].furniture[1].category, this.departmentCat[0].furniture[1].matric],
          [this.departmentCat[0].furniture[2].category, this.departmentCat[0].furniture[2].matric],
          [this.departmentCat[0].furniture[3].category, this.departmentCat[0].furniture[3].matric],
          [this.departmentCat[0].office[0].category, this.departmentCat[0].office[0].matric],
          [this.departmentCat[0].office[1].category, this.departmentCat[0].office[1].matric],
          [this.departmentCat[0].office[2].category, this.departmentCat[0].office[2].matric],
          [this.departmentCat[0].office[3].category, this.departmentCat[0].office[3].matric],
          [this.departmentCat[0].office[4].category, this.departmentCat[0].office[4].matric],
          [this.departmentCat[0].office[5].category, this.departmentCat[0].office[5].matric],
          [this.departmentCat[0].office[6].category, this.departmentCat[0].office[6].matric],
          [this.departmentCat[0].office[7].category, this.departmentCat[0].office[7].matric],
          [this.departmentCat[0].office[8].category, this.departmentCat[0].office[8].matric]
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          // color: '#FFFFFF',
          // align: 'right',
          format: '{point.y:.0f}', // one decimal
          // y: 2, // 10 pixels down from the top
          // style: {
          //   fontSize: '3px',
          //   fontFamily: 'Verdana, sans-serif'
          // }
        }
      }]
    };;
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300)

  }

}