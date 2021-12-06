import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HodReportPage } from './hod-report.page';

const routes: Routes = [
  {
    path: '',
    component: HodReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HodReportPageRoutingModule {}
