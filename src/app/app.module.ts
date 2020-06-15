import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { SupplierComponent } from './widget/supplier/supplier.component';
import { SegmentComponent } from './widget/segment/segment.component';
import { CategoryComponent } from './widget/category/category.component';
import { StateComponent } from './widget/state/state.component';
import { RegionComponent } from './widget/region/region.component';
import { MonthComponent } from './widget/month/month.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SupplierComponent,
    SegmentComponent,
    CategoryComponent,
    StateComponent,
    RegionComponent,
    MonthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
