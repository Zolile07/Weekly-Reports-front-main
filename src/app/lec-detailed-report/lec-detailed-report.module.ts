import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecDetailedReportPageRoutingModule } from './lec-detailed-report-routing.module';

import { LecDetailedReportPage } from './lec-detailed-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecDetailedReportPageRoutingModule
  ],
  declarations: [LecDetailedReportPage]
})
export class LecDetailedReportPageModule {}
