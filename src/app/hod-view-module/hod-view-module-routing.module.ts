import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HodViewModulePage } from './hod-view-module.page';

const routes: Routes = [
  {
    path: '',
    component: HodViewModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HodViewModulePageRoutingModule {}
