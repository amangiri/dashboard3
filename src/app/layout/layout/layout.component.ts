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
  selMatric1="quantity";
  selMatric2="discount";
  // matric1Data;
  // matric2Data;
  monthData=[];
  constructor(
    private dashboardService: DashboardService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getData();
    this.findBySegemnt(this.metric);
  }


  findBySegemnt(matric) {
    localStorage.setItem("matric",this.findMatric(matric));
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
      this.departmentCat.push(data);
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

  getMatric(matric,value){
    matric==='Matric1'?this.selMatric1=value:this.selMatric2=value;
    console.log(this.selMatric1,this.selMatric2)
    this.getData();
  }

  getData(){
    this.monthData=[]
    localStorage.setItem('matric1', this.findMatric(this.selMatric1));
    localStorage.setItem('matric2', this.findMatric(this.selMatric2));
      this.dashboardService.getMatric1(this.selMatric1).subscribe((data:any)=>{
          // console.log(data)
          // this.matric1Data=data;
          this.monthData.push({"matric1Data":data});
          this.getMatric2();
      });
    

  }


  getMatric2(){
    this.dashboardService.getMatric2(this.selMatric2).subscribe((data:any)=>{
      // console.log(data)
      // this.matric2Data=data;
      this.monthData.push({"matric2Data":data})
  });
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
        mat = "Unit Price"
        break;
      default:
        break;
    }
return mat;
    
  }

}

