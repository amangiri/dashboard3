import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  
  @Input() cityList;
  matric;

  constructor() {
    this.matric= localStorage.getItem("matric");
   }

  ngOnInit(): void {
    // console.log(this.cityList)
  }

}
