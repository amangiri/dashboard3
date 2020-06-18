import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  segment = [];
  region = [];
  state = [];
  departmentCat = [];
  cityList=[];
  metric = 'discount';
  constructor(
    private dashboardService: DashboardService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.findBySegemnt(this.metric);
  }


  findBySegemnt(matric) {
    this.findMatric(matric);
    this.departmentCategory(matric);
    this.findByCustomers(matric);
    this.spinner.show();
    this.segment = [];
    this.region = [];
    this.state = [];
    this.dashboardService.findBySegment(matric).subscribe((data: any) => {
      // console.log(data.states)
      this.segment = data.customerSegments;
      this.region = data.regions;
      this.state = data.states;
      this.spinner.hide();
    })
  }

  departmentCategory(matric) {
    this.departmentCat = [];
    this.dashboardService.departmentCategory(matric).subscribe((data: any) => {
      // console.log(data)
      this.departmentCat = data.subCategories;
      // console.log(this.departmentCat)
    })
  }

  findByCustomers(matric){
    this.cityList=[];
    this.dashboardService.findByCustomers(matric).subscribe((data:any)=>{
      // console.log(data)
      this.cityList=data;
    })
  }

  findMatric(matric) {
    let mat = "";
    switch (matric) {
      case 'profit':
        mat = "Profit"
        break;
      case 'discount':
        mat = "Discount"
        break;
      case 'quantity':
        mat = "Order Quantity"
        break;
      case 'margin':
        mat = "Product Based Margin"
        break;
      case 'sales':
        mat = "Sales"
        break;
      case 'price':
        mat = "Price"
        break;

      default:
        break;
    }

    localStorage.setItem("matric",mat);
  }

}

