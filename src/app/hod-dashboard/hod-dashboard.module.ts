import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HodDashboardPageRoutingModule } from './hod-dashboard-routing.module';

import { HodDashboardPage } from './hod-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HodDashboardPageRoutingModule
  ],
  declarations: [HodDashboardPage]
})
export class HodDashboardPageModule {}
