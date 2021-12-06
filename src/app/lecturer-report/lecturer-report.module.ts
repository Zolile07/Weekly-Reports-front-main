import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturerReportPageRoutingModule } from './lecturer-report-routing.module';

import { LecturerReportPage } from './lecturer-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturerReportPageRoutingModule
  ],
  declarations: [LecturerReportPage]
})
export class LecturerReportPageModule {}
