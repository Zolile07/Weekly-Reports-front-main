import { Component, OnInit } from '@angular/core';
import { HodService } from '../hod.service';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { LecturerReportPage  } from '../lecturer-report/lecturer-report.page';

import { Report } from '../report';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Platform } from '@ionic/angular';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-hod-report',
  templateUrl: './hod-report.page.html',
  styleUrls: ['./hod-report.page.scss'],
})
export class HodReportPage implements OnInit {
  constructor(private hodService: HodService, private router: Router, private route: ActivatedRoute, private lecRPort: LecturerReportPage) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.deptId = this.router.getCurrentNavigation().extras.state.mySummary;
        console.log('department ID',this.deptId);

      }
    });
  }

  hod: any;
  activities = ' ';
  assess = ' ';
  challRecomm = ' ';
  subjCode = ' ';
  temp: any;
  deptId;
  reports: Report[] = [];

  pdfObj: any;

  create() {
    this.lecRPort.createPdf();
  }

  download() {
    this.lecRPort.downloadPdf();
  }


  ngOnInit() {
    this.displaySummary();
  }

  displayModReports(){
    this.hodService.getReports(this.temp)
    .subscribe(data => {
      this.hod = data;
      console.log(this.hod);
    });
  }


  displaySummary() {

    this.hodService.getReports(this.deptId).subscribe(data => {
      this.hod = data;
      console.log(data);
      console.log(this.hod);
    }, error => console.log(error));

    }
}

