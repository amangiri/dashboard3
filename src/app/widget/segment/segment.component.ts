import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss']
})
export class SegmentComponent implements OnInit {
  @Input() segment;
  matric;
  constructor() {
    this.matric = localStorage.getItem("matric");
  }

  ngOnInit(): void {
    // console.log(this.segment)
  }

  ngAfterViewInit() {
    let chart = am4core.create("chartdivv", am4charts.XYChart);
  //label for Corporate Text
    let labelCr = chart.createChild(am4core.Label);
    labelCr.text = "Corporate";
    labelCr.fontSize = 15;
    labelCr.align = "center";
    labelCr.isMeasured = false;
    labelCr.x = 70;
    labelCr.y = 55;
  //label for Corporate Matric
    let labelCrMa = chart.createChild(am4core.Label);
    labelCrMa.text = this.segment[1].matric.toString().split('.')[0];
    labelCrMa.fontSize = 20;
    labelCrMa.align = "center";
    labelCrMa.isMeasured = false;
    if(this.segment[1].matric.toString().split('.')[0].length ===3){
    labelCrMa.x = 80;
    labelCrMa.y = 75;
    }else{
      labelCrMa.x = 80;
    labelCrMa.y = 75;
    }

    //label for Consumer Text
    let labelCn = chart.createChild(am4core.Label);
    labelCn.text = "Consumer";
    labelCn.fontSize = 15;
    labelCn.align = "center";
    labelCn.isMeasured = false;
    labelCn.x = 220;
    labelCn.y = 55;

    //label for Consumer Matric
    let labelCnMa = chart.createChild(am4core.Label);
    labelCnMa.text = this.segment[0].matric.toString().split('.')[0];
    labelCnMa.fontSize = 20;
    labelCnMa.align = "center";
    labelCnMa.isMeasured = false;
    if(this.segment[0].matric.toString().split('.')[0].length ===3){
      labelCnMa.x = 230;
      labelCnMa.y = 75;
    }else{
    labelCnMa.x = 220;
    labelCnMa.y = 75;
    }

    //label for Home Office Text
    let labelHo = chart.createChild(am4core.Label);
    labelHo.text = "Home Office";
    labelHo.fontSize = 15;
    labelHo.align = "center";
    labelHo.isMeasured = false;
    labelHo.x = 370;
    labelHo.y = 65;

    //label for Home Office Matric
    let labelHoMa = chart.createChild(am4core.Label);
    labelHoMa.text = this.segment[2].matric.toString().split('.')[0];
    labelHoMa.fontSize = 20;
    labelHoMa.align = "center";
    labelHoMa.isMeasured = false;
    if(this.segment[2].matric.toString().split('.')[0].length ===3){
      labelHoMa.x = 385;
      labelHoMa.y = 85;
    }else{
      labelHoMa.x = 380;
      labelHoMa.y = 85;
    }

    let valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxisX.renderer.ticks.template.disabled = true;
    valueAxisX.renderer.axisFills.template.disabled = true;
    // valueAxisX.disabled=true
    valueAxisX.opacity = 0;
    let valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxisY.renderer.ticks.template.disabled = true;
    valueAxisY.renderer.axisFills.template.disabled = true;
    // valueAxisY.disabled=true
    valueAxisY.opacity = 0;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";
    series.dataFields.value = "value";
    series.strokeOpacity = 0;
    series.sequencedInterpolation = true;
    series.tooltip.pointerOrientation = "vertical";

    let bullet = series.bullets.push(new am4core.Circle());
    bullet.fill = am4core.color("#ff0000");
    bullet.propertyFields.fill = "color";
    bullet.strokeOpacity = 0;
    bullet.strokeWidth = 0;
    bullet.fillOpacity = 0.5;
    bullet.stroke = am4core.color("#ffffff");
    bullet.hiddenState.properties.opacity = 0;
    bullet.tooltipText = "[bold]Customer Segment: {title}[/]\nMetric: {value.value}";


    let outline = chart.plotContainer.createChild(am4core.Circle);
    outline.fillOpacity = 0;
    outline.strokeOpacity = 0.8;
    outline.stroke = am4core.color("#ff0000");
    outline.strokeWidth = 2;
    outline.hide(0);

    let blurFilter = new am4core.BlurFilter();
    outline.filters.push(blurFilter);

    bullet.events.on("over", function (event) {
      let target = event.target;
      outline.radius = target.pixelRadius + 2;
      outline.x = target.pixelX;
      outline.y = target.pixelY;
      outline.show();
    })

    bullet.events.on("out", function (event) {
      outline.hide();
    })

    let hoverState = bullet.states.create("hover");
    hoverState.properties.fillOpacity = 1;
    hoverState.properties.strokeOpacity = 1;

    series.heatRules.push({ target: bullet, min: 50, max: 70, property: "radius" });

    bullet.adapter.add("tooltipY", function (tooltipY, target) {
      return -target.radius;
    })

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomXY";
    chart.cursor.snapToSeries = series;

    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarY = new am4core.Scrollbar();

    chart.data = [
      {
        "title": this.segment[1].segmentName,
        "color": "orange",
        "x": 1.2,
        "y": 7,
        "value": this.segment[1].matric
      },
      {
        "title": this.segment[0].segmentName,
        "color": "blue",
        "x": 4,
        "y": 7,
        "value": this.segment[0].matric
      },
      {
        "title": this.segment[2].segmentName,
        "color": "green",
        "x": 7,
        "y": 7,
        "value": this.segment[2].matric
      }
    ];
  }
}