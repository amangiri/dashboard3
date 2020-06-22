import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { TempComponent } from './widget/temp/temp.component';


const routes: Routes = [
  {path:'',component:LayoutComponent},
  {path:'temp', component: TempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
