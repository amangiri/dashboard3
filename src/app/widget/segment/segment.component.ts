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
  minHeatRule = 50;
  maxHeatRule = 70;
  constructor() {
    this.matric = localStorage.getItem("matric");
  }

  ngOnInit(): void {
    // console.log(this.segment)
  }

  ngAfterViewInit() {
    let chart = am4core.create("chartdivv", am4charts.XYChart);
    let consumerTextfont;
    let consumerTextX;
    let consumerTextY;
    let consumerMatricfont;
    let consumerMatricX;
    let consumerMatricY;
    let corporateTextfont;
    let corporateTextX;
    let corporateTextY;
    let corporateMatricfont;
    let corporateMatricX;
    let corporateMatricY;
    let homeTextfont;
    let homeTextX;
    let homeTextY;
    let homeMatricfont;
    let homeMatricX;
    let homeMatricY;
    if (localStorage.getItem('matric') === 'Discount') {
      this.minHeatRule = 40;
      this.maxHeatRule = 50;
      corporateTextfont=13;
      corporateTextX=78;
      corporateTextY=65;
      corporateMatricfont=18;
      corporateMatricX=90;
      corporateMatricY=80;
      consumerTextfont=12;
      consumerTextX=225;
      consumerTextY=65;
      consumerMatricfont=18;
      consumerMatricX=235;
      consumerMatricY=80;
      homeTextfont=11;
      homeTextX=385;
      homeTextY=70;
      homeMatricfont=16;
      homeMatricX=400;
      homeMatricY=80;
    }
    else if (localStorage.getItem('matric') === 'Order Quantity') {
      this.minHeatRule = 40;
      this.maxHeatRule = 60;
      corporateTextfont=15;
      corporateTextX=75;
      corporateTextY=65;
      corporateMatricfont=18;
      corporateMatricX=85;
      corporateMatricY=80;
      consumerTextfont=15;
      consumerTextX=225;
      consumerTextY=65;
      consumerMatricfont=18;
      consumerMatricX=235;
      consumerMatricY=80;
      homeTextfont=12;
      homeTextX=380;
      homeTextY=70;
      homeMatricfont=16;
      homeMatricX=395;
      homeMatricY=82;
    }
    else if (localStorage.getItem('matric') === 'Product Based Margin') {
      this.minHeatRule = 40;
      this.maxHeatRule = 70;
      corporateTextfont=17;
      corporateTextX=70;
      corporateTextY=65;
      corporateMatricfont=17;
      corporateMatricX=87;
      corporateMatricY=82;
      consumerTextfont=17;
      consumerTextX=215;
      consumerTextY=65;
      consumerMatricfont=17;
      consumerMatricX=230;
      consumerMatricY=82;
      homeTextfont=12;
      homeTextX=377;
      homeTextY=70;
      homeMatricfont=16;
      homeMatricX=390;
      homeMatricY=82;
    }
    else if (localStorage.getItem('matric') === 'Profit') {
      this.minHeatRule = 45;
      this.maxHeatRule = 70;
      corporateTextfont=17;
      corporateTextX=70;
      corporateTextY=65;
      corporateMatricfont=17;
      corporateMatricX=85;
      corporateMatricY=82;
      consumerTextfont=17;
      consumerTextX=215;
      consumerTextY=65;
      consumerMatricfont=17;
      consumerMatricX=225;
      consumerMatricY=82;
      homeTextfont=14;
      homeTextX=375;
      homeTextY=70;
      homeMatricfont=16;
      homeMatricX=390;
      homeMatricY=82;
    }
    else if (localStorage.getItem('matric') === 'Sales') {
      this.minHeatRule = 55;
      this.maxHeatRule = 80;
      corporateTextfont=17;
      corporateTextX=70;
      corporateTextY=65;
      corporateMatricfont=17;
      corporateMatricX=85;
      corporateMatricY=82;
      consumerTextfont=17;
      consumerTextX=215;
      consumerTextY=65;
      consumerMatricfont=17;
      consumerMatricX=220;
      consumerMatricY=82;
      homeTextfont=14;
      homeTextX=375;
      homeTextY=70;
      homeMatricfont=16;
      homeMatricX=390;
      homeMatricY=82;
    }
    else if (localStorage.getItem('matric') === 'Price') {
      this.minHeatRule = 50;
      this.maxHeatRule = 75;
      corporateTextfont=17;
      corporateTextX=70;
      corporateTextY=65;
      corporateMatricfont=17;
      corporateMatricX=87;
      corporateMatricY=82;
      consumerTextfont=17;
      consumerTextX=215;
      consumerTextY=65;
      consumerMatricfont=17;
      consumerMatricX=230;
      consumerMatricY=82;
      homeTextfont=14;
      homeTextX=375;
      homeTextY=70;
      homeMatricfont=16;
      homeMatricX=390;
      homeMatricY=82;
    }


    //label for Corporate Text
    let labelCr = chart.createChild(am4core.Label);
    labelCr.text = "Corporate";
    labelCr.fontSize = corporateTextfont;
    labelCr.align = "center";
    labelCr.isMeasured = false;
    labelCr.x = corporateTextX;
    labelCr.y = corporateTextY;
    //label for Corporate Matric
    let labelCrMa = chart.createChild(am4core.Label);
    labelCrMa.text = this.segment[1].matric.toString().split('.')[0];
    labelCrMa.fontSize = corporateMatricfont;
    labelCrMa.align = "center";
    labelCrMa.isMeasured = false;
    labelCrMa.x = corporateMatricX;
    labelCrMa.y = corporateMatricY;

    //label for Consumer Text
    let labelCn = chart.createChild(am4core.Label);
    labelCn.text = "Consumer";
    labelCn.fontSize = consumerTextfont;
    labelCn.align = "center";
    labelCn.isMeasured = false;
    labelCn.x = consumerTextX;
    labelCn.y = consumerTextY;

    //label for Consumer Matric
    let labelCnMa = chart.createChild(am4core.Label);
    labelCnMa.text = this.segment[0].matric.toString().split('.')[0];
    labelCnMa.fontSize = consumerMatricfont;
    labelCnMa.align = "center";
    labelCnMa.isMeasured = false;
    labelCnMa.x = consumerMatricX;
    labelCnMa.y = consumerMatricY;

    //label for Home Office Text
    let labelHo = chart.createChild(am4core.Label);
    labelHo.text = "Home Office";
    labelHo.fontSize = homeTextfont;
    labelHo.align = "center";
    labelHo.isMeasured = false;
    labelHo.x = homeTextX;
    labelHo.y = homeTextY;

    //label for Home Office Matric
    let labelHoMa = chart.createChild(am4core.Label);
    labelHoMa.text = this.segment[2].matric.toString().split('.')[0];
    labelHoMa.fontSize = homeMatricfont;
    labelHoMa.align = "center";
    labelHoMa.isMeasured = false;
    labelHoMa.x = homeMatricX;
    labelHoMa.y = homeMatricY;

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

    series.heatRules.push({ target: bullet, min: this.minHeatRule, max: this.maxHeatRule, property: "radius" });

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