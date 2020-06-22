import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { DashboardService } from 'src/app/dashboard.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-month',
    templateUrl: './month.component.html',
    styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {
    Highcharts = Highcharts;
    chartOptions: any = {};
    @Input() monthData;
    @Input() subCategory;
    constructor(
        private dashboardService: DashboardService,
        private spinner: NgxSpinnerService
    ) { }

    ngOnInit(): void {
        // this.spinner.show();
        // setTimeout(() => {
        //     this.spinner.hide();
        // }, 2000);
        console.log(this.monthData)
        this.chartData();
    }



    chartData() {
        // this.spinner.hide();
        // console.log(this.matric1Data)
        // console.log(this.matric2Data)
        this.chartOptions = {
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: "Discount" + ' vs ' + "this.selMatric2" + ' by Month'
            },
            subtitle: {
                // text: 'Source: WorldClimate.com'
            },
            credits: {
                enabled: false
            },
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
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
                enabled: false,
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
                data: this.monthData[1].matric2Data.allYearData,
                tooltip: {
                    // valueSuffix: ' mm'
                }

            }, {
                name: 'Metric 1',
                type: 'spline',
                data: this.monthData[0].matric1Data.allYearData,
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


    //   ngOnChanges(changes: SimpleChanges) {
    //     // console.log(changes)
    //     this.profitData= changes.profitData.currentValue;
    //     this.subCategory= changes.subCategory.currentValue;
    //     if(changes.profitData.firstChange=true){
    //     this.chartData();
    //     }
    //   }

}