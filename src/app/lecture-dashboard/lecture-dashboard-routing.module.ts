import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LectureDashboardPage } from './lecture-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: LectureDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LectureDashboardPageRoutingModule {}
