import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.findBySegemnt();
  }

  findBySegemnt(){
    this.dashboardService.findBySegment('sales').subscribe(data=>{
      console.log(data)
    })
  }

}
