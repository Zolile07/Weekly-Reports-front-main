import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HodReportPageRoutingModule } from './hod-report-routing.module';

import { HodReportPage } from './hod-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HodReportPageRoutingModule
  ],
  declarations: [HodReportPage]
})
export class HodReportPageModule {}
