import { Component, OnInit, Input } from '@angular/core';
//import * as Highcharts from 'highcharts';

declare var require: any;
var Highcharts = require('highcharts'), 
    HighchartsGroupedCategories = require('highcharts-grouped-categories')(Highcharts);

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent implements OnInit {
  name = 'Angular';
@Input() departmentCat;

  public options: any = {
    chart: {
            renderTo: "container",
            type: "column"
        },
        title: {
            useHTML: true,
            x: -10,
            y: 8,
            text: '<span class="chart-title"> Grouped categories <span class="chart-href"> <a href="#" target="_blank"> Black Label </a> </span> <span class="chart-subtitle">plugin by </span></span>'
        },
        series: [{
            data: [11, 14, 18, 5, 6, 5, 14, 15, 18]
        }],
        xAxis: {
            categories: [{
                name: "Fruit",
                categories: ["Apple", "Banana", "Orange"]
            }, {
                name: "Vegetable",
                categories: ["Carrot", "Potato", "Tomato"]
            }, {
                name: "Fish",
                categories: ["Cod", "Salmon", "Tuna"]
            }]
        }
  }

  ngOnInit(){
    console.log(this.departmentCat)
    Highcharts.chart('container', this.options);
    
    // let hchart = new Highcharts.chart('container', this.options);
  }
}
