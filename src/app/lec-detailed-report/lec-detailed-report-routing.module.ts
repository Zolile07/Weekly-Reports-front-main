import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecDetailedReportPage } from './lec-detailed-report.page';

const routes: Routes = [
  {
    path: '',
    component: LecDetailedReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecDetailedReportPageRoutingModule {}
