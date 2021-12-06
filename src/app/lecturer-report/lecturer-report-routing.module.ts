import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturerReportPage } from './lecturer-report.page';

const routes: Routes = [
  {
    path: '',
    component: LecturerReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturerReportPageRoutingModule {}
