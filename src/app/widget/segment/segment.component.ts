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
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let chart = am4core.create("chartdivv", am4charts.XYChart);

    let valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxisX.renderer.ticks.template.disabled = true;
    valueAxisX.renderer.axisFills.template.disabled = true;

    let valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxisY.renderer.ticks.template.disabled = true;
    valueAxisY.renderer.axisFills.template.disabled = true;

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
    bullet.strokeWidth = 2;
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

    // bullet.events.on("over", function (event) {
    //   let target = event.target;
    //   outline.radius = target.pixelRadius + 2;
    //   outline.x = target.pixelX;
    //   outline.y = target.pixelY;
    //   outline.show();
    // })

    // bullet.events.on("out", function (event) {
    //   outline.hide();
    // })

    let hoverState = bullet.states.create("hover");
    hoverState.properties.fillOpacity = 1;
    hoverState.properties.strokeOpacity = 1;

    series.heatRules.push({ target: bullet, min: 2, max: 60, property: "radius" });

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
        "title": "Corporate",
        "id": "AF",
        "color": "#eea638",
        "continent": "asia",
        "x": 2000,
        "y": 70,
        "value": 105
      },
      {
        "title": "Consumer",
        "id": "AL",
        "color": "#d8854f",
        "continent": "europe",
        "x": 4000,
        "y": 70,
        "value": 105
      },
      {
        "title": "Home Office",
        "id": "DZ",
        "color": "#de4c4f",
        "continent": "africa",
        "x": 6000,
        "y": 70,
        "value": 105
      }
    ];
  }
}