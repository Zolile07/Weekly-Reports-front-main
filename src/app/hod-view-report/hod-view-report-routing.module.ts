import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HodViewReportPage } from './hod-view-report.page';

const routes: Routes = [
  {
    path: '',
    component: HodViewReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HodViewReportPageRoutingModule {}
