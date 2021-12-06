import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailedReportPage } from './detailed-report.page';

const routes: Routes = [
  {
    path: '',
    component: DetailedReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailedReportPageRoutingModule {}
