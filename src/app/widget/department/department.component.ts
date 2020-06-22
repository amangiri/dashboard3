import { OnInit, Input, ViewChild, ElementRef, VERSION } from '@angular/core';
import { Component } from '@angular/core';
import * as  Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions: any = {};
  @Input() departmentCat;
  // @Input() subCategory;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.departmentCat);
    this.changeData(this.departmentCat);
    // this.chartData();
  }

  changeData(departmentCatData) {
    // console.log(departmentCatData)
    let tempData = [];
    departmentCatData.forEach(department => {
      // console.log(department.furniture)
      let avgFurVal = 0;
      let avgOfficeVal = 0;
      let avgTechVal = 0;
      department.furniture.forEach(element => {
        // console.log(element)
        avgFurVal = avgFurVal + element.matric;
        // console.log(avgFurVal)
      });
      department.office.forEach(element => {
        // console.log(element)
        avgOfficeVal = avgOfficeVal + element.matric;
      });
      department.technology.forEach(element => {
        // console.log(element)
        avgTechVal = avgTechVal + element.matric;
      });
      tempData.push({ name: "Furniture", y: avgFurVal / 4, drilldown: "Furniture" })
      tempData.push({ name: "Technology", y: avgTechVal / 4, drilldown: "Technology" })
      tempData.push({ name: "Office Supply", y: avgOfficeVal / 9, drilldown: "Office Supply" })
    });

    tempData.sort(function (a, b) {
      // console.log(a.y, '   ',b.y)
      return a.y - b.y;
    });
    // console.log(tempData)
    this.chartData(tempData)
  }

  chartData(tempData) {
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: localStorage.getItem("matric") + ' by Category and Department'
      },
      subtitle: {
        // text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
      },
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Metric'
        }

      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.0f}'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b><br/>'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: "Category",
          colorByPoint: true,
          data: tempData
        }
      ],
      drilldown: {
        drillUpButton: {
          position: {
            verticalAlign: 'bottom',
            align: 'left',
            x: 500,
            y: -270,
          }
        },
        series: [
          {
            name: "Furniture",
            id: "Furniture",
            data: [
              [
                this.departmentCat[0].furniture[0].category,
                this.departmentCat[0].furniture[0].matric
              ],
              [
                this.departmentCat[0].furniture[1].category,
                this.departmentCat[0].furniture[1].matric
              ],
              [
                this.departmentCat[0].furniture[2].category,
                this.departmentCat[0].furniture[2].matric
              ],
              [
                this.departmentCat[0].furniture[3].category,
                this.departmentCat[0].furniture[3].matric
              ]
            ]
          },
          {
            name: "Technology",
            id: "Technology",
            data: [
              [
                this.departmentCat[0].technology[0].category,
                this.departmentCat[0].technology[0].matric
              ],
              [
                this.departmentCat[0].technology[1].category,
                this.departmentCat[0].technology[1].matric
              ],
              [
                this.departmentCat[0].technology[2].category,
                this.departmentCat[0].technology[2].matric
              ],
              [
                this.departmentCat[0].technology[3].category,
                this.departmentCat[0].technology[3].matric
              ]
            ]
          },
          {
            name: "Office Supply",
            id: "Office Supply",
            data: [
              [
                this.departmentCat[0].office[0].category,
                this.departmentCat[0].office[0].matric
              ],
              [
                this.departmentCat[0].office[1].category,
                this.departmentCat[0].office[1].matric
              ],
              [
                this.departmentCat[0].office[2].category,
                this.departmentCat[0].office[2].matric
              ],
              [
                this.departmentCat[0].office[3].category,
                this.departmentCat[0].office[3].matric
              ],
              [
                this.departmentCat[0].office[4].category,
                this.departmentCat[0].office[4].matric
              ],
              [
                this.departmentCat[0].office[5].category,
                this.departmentCat[0].office[5].matric
              ],
              [
                this.departmentCat[0].office[6].category,
                this.departmentCat[0].office[6].matric
              ],
              [
                this.departmentCat[0].office[7].category,
                this.departmentCat[0].office[7].matric
              ],
              [
                this.departmentCat[0].office[8].category,
                this.departmentCat[0].office[8].matric
              ]
            ]
          }
        ]
      }
    };
    // HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300)
  }

}
