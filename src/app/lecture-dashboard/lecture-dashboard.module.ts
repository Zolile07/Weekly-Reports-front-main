import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LectureDashboardPageRoutingModule } from './lecture-dashboard-routing.module';

import { LectureDashboardPage } from './lecture-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LectureDashboardPageRoutingModule
  ],
  declarations: [LectureDashboardPage]
})
export class LectureDashboardPageModule {}
