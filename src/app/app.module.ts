import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { LectureService } from './lecture.service';
import { RegistrationService } from './registration.service';
import { HodService } from './hod.service';
import { LoginService } from './login.service';
import { LecturerReportPage  } from './lecturer-report/lecturer-report.page';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },LectureService,LecturerReportPage,
    RegistrationService,File, FileOpener, HodService,LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
