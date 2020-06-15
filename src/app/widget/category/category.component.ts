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
  // @Input() profitData;
  // @Input() subCategory;
  constructor() { }

  ngOnInit(): void {
    this.chartData();
  }

  chartData() {

    this.chartOptions ={
      title: {
          text: 'Combination chart'
      },
      xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
      },
      credits:{
        enabled:false
      },
      // labels: {
      //     items: [{
      //         html: 'Total fruit consumption',
      //         style: {
      //             left: '50px',
      //             top: '18px',
      //             // color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
      //         }
      //     }]
      // },
      series: [{
          type: 'column',
          name: 'Jane',
          data: [3, 2, 1, 3, 4]
      }, {
          type: 'column',
          name: 'John',
          data: [2, 3, 5, 7, 6]
      }, {
          type: 'column',
          name: 'Joe',
          data: [4, 3, 3, 9, 0]
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
    // this.profitData= changes.profitData.currentValue;
    // this.subCategory= changes.subCategory.currentValue;
    if(changes.profitData.firstChange=true){
    this.chartData();
    }
  }

}