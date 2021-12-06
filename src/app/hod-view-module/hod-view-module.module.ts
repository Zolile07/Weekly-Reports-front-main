import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HodViewModulePageRoutingModule } from './hod-view-module-routing.module';

import { HodViewModulePage } from './hod-view-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HodViewModulePageRoutingModule
  ],
  declarations: [HodViewModulePage]
})
export class HodViewModulePageModule {}
