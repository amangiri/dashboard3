import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { SupplierComponent } from './widget/supplier/supplier.component';
import { SegmentComponent } from './widget/segment/segment.component';
import { CategoryComponent } from './widget/category/category.component';
import { StateComponent } from './widget/state/state.component';
import { RegionComponent } from './widget/region/region.component';
import { MonthComponent } from './widget/month/month.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './widget/department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SupplierComponent,
    SegmentComponent,
    CategoryComponent,
    StateComponent,
    RegionComponent,
    MonthComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
