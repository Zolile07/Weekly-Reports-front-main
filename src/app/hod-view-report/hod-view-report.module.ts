import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HodViewReportPageRoutingModule } from './hod-view-report-routing.module';

import { HodViewReportPage } from './hod-view-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HodViewReportPageRoutingModule
  ],
  declarations: [HodViewReportPage]
})
export class HodViewReportPageModule {}
