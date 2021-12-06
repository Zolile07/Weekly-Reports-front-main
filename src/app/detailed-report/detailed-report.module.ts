import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailedReportPageRoutingModule } from './detailed-report-routing.module';

import { DetailedReportPage } from './detailed-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailedReportPageRoutingModule
  ],
  declarations: [DetailedReportPage]
})
export class DetailedReportPageModule {}
