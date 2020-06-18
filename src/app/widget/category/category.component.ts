import { Component, OnInit, Input, Output,OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
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
    this.departmentCat;
    this.chartData();
  }

  chartData() {

    this.chartOptions ={
      chart: {
        type: 'column'
      },
      title: {
        text: localStorage.getItem("matric")+' by Category and Department'
      },
      xAxis: {
        type: 'category',
        title:{
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
      credits:{
        enabled:false
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
          [this.departmentCat[0].category, this.departmentCat[0].matric],
          [this.departmentCat[1].category, this.departmentCat[1].matric],
          [this.departmentCat[2].category, this.departmentCat[2].matric],
          [this.departmentCat[3].category, this.departmentCat[3].matric],
          [this.departmentCat[4].category, this.departmentCat[4].matric],
          [this.departmentCat[5].category, this.departmentCat[5].matric],
          [this.departmentCat[6].category, this.departmentCat[6].matric],
          [this.departmentCat[7].category, this.departmentCat[7].matric],
          [this.departmentCat[8].category, this.departmentCat[8].matric],
          [this.departmentCat[9].category, this.departmentCat[9].matric],
          [this.departmentCat[10].category, this.departmentCat[10].matric],
          [this.departmentCat[11].category, this.departmentCat[11].matric],
          [this.departmentCat[12].category, this.departmentCat[12].matric],
          [this.departmentCat[13].category, this.departmentCat[13].matric],
          [this.departmentCat[14].category, this.departmentCat[15].matric],
          [this.departmentCat[15].category, this.departmentCat[15].matric],
          [this.departmentCat[16].category, this.departmentCat[16].matric]
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