import { Component, OnInit, Input } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  @Input() state;
  matric;
  constructor() {
    this.matric= localStorage.getItem("matric");
   }

  ngOnInit(): void {
    // console.log("state")
    this.chart()
  }

  chart() {
    // console.log(this.state)
    // Create map instance
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    
    // Set map definition
    chart.geodata = am4geodata_usaLow;

    // Set projection
    chart.projection = new am4maps.projections.AlbersUsa();

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // console.log(chart.colors)
    //Set min/max fill color for each area
    // console.log(localStorage.getItem('matric'))
    if(localStorage.getItem('matric')==='Sales' || localStorage.getItem('matric')==='Unit Price'){
      console.log("inside"+localStorage.getItem('matric'))
      polygonSeries.heatRules.push({
        property: "fill",
        target: polygonSeries.mapPolygons.template,
        min: am4core.color("#17fc03").lighten(0.3),
        max: am4core.color("green").brighten(-0.3),
        minValue:1000,
        maxValue:10000
      });
    }
    else if(localStorage.getItem('matric')==='Order Quantity'){
      console.log("inside"+localStorage.getItem('matric'))
      polygonSeries.heatRules.push({
        property: "fill",
        target: polygonSeries.mapPolygons.template,
        min: am4core.color("#17fc03").lighten(0.3),
        max: am4core.color("green").brighten(-0.3),
        minValue:100,
        maxValue:1000
      });
    }
    else{
      polygonSeries.heatRules.push({
        property: "fill",
        target: polygonSeries.mapPolygons.template,
        min: am4core.color("red").brighten(0.3),
        max: am4core.color("green").lighten(-0.3),
        minValue:0,
        maxValue:1
      });
    }
    // polygonSeries.heatRules.push({
    //   property: "fill",
    //   target: polygonSeries.mapPolygons.template,
    //   min: am4core.color("red").brighten(1),
    //   max: am4core.color("green").brighten(-0.3),
    //   minValue:0,
    //   maxValue:1
    // });

    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;

    // Set heatmap values for each state
    polygonSeries.data = this.state;
  
    // Set up heat legend
    // let heatLegend = chart.createChild(am4maps.HeatLegend);
    // heatLegend.series = polygonSeries;
    // heatLegend.align = "right";
    // heatLegend.valign = "bottom";
    // heatLegend.width = am4core.percent(20);
    // heatLegend.marginRight = am4core.percent(4);
    // heatLegend.minValue = 0;
    // heatLegend.maxValue = 40000000;

    // Set up custom heat map legend labels using axis ranges
    // let minRange = heatLegend.valueAxis.axisRanges.create();
    // minRange.value = heatLegend.minValue;
    // minRange.label.text = "Little";
    // let maxRange = heatLegend.valueAxis.axisRanges.create();
    // maxRange.value = heatLegend.maxValue;
    // maxRange.label.text = "A lot!";

    // Blank out internal heat legend value axis labels
    // heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
    //   return "";
    // });

    // Configure series tooltip
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#3c5bdc");
  }

}
