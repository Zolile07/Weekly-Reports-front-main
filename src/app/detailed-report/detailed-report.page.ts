import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { HodService } from '../hod.service';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { AlertController, NavController, Platform } from '@ionic/angular';


import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-detailed-report',
  templateUrl: './detailed-report.page.html',
  styleUrls: ['./detailed-report.page.scss'],
})
export class DetailedReportPage implements OnInit {

  temp: any;
  lecture;
  lectureNumber;
  topics;
  teachMode;
  presentMode;
  resources;
  modules;
  activities;
  assess;
  challRecomm;
  numStudents;
  attendAvg;
  date;
  department;
 

  form2 = {
    assesses: '',
    numStud: '',
    studSub: '',
    numAtt: '',
  };
  pdfObj: any;
  //plt: any;

  sub() {
    console.log(this.form2);
  }

  constructor(private router: Router, 
              private hodService: HodService, 
              private route: ActivatedRoute,
              private plt: Platform,
              private file: File,
              private fileOpener: FileOpener,
              private alertCtrl: AlertController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.temp = this.router.getCurrentNavigation().extras.state.detailed;
        console.log('my report:', this.temp);
        this.lecture = this.temp[0].title + ' ' + this.temp[0].lecName + ' ' + this.temp[0].lecSurname;
        this.lectureNumber = this.temp[0].lecNum;
        this.modules = this.temp[0].subjCode + ' - ' + this.temp[0].subjName;
        this.topics = this.temp[0].topicsCovered;
        this.teachMode = this.temp[0].teachMode;
        this.presentMode = this.temp[0].presentMode;
        this.resources = this.temp[0].resource;
        this.activities = this.temp[0].activities;
        this.assess = this.temp[0].assess;
        this.challRecomm = this.temp[0].challRecomm;
        this.numStudents = this.temp[0].numStudents;
        this.attendAvg = this.temp[0].attendAvg;
        this.date = this.temp[0].date;
        this.department = this.temp[0].deptName;
      }
    });
  }

  ngOnInit() {
  }

  createPdf() {

   //form: NgForm
  //console.log("form", form.value.lecture);
  console.log("it started");
  
  
  const docDefinition = {
    content: [
      { text: 'Lecturer report', style: 'header' },
      { text: new Date().toTimeString(), alignment: 'right' },

      { text: 'Name', style: 'subheader' },
      this.lecture,

      { text: 'Module', style: 'subheader' },
      this.modules,

      { text: 'Department', style: 'subheader' },
      this.department,

      { text: 'Number of Students:', style: 'subheader' },
      this.numStudents,

      { text: 'Week average Attendance', style: 'subheader' },
      this.attendAvg,

      { text: 'Topic(s) covered', style: 'subheader' },
      this.topics,

      { text: 'Mode of Teaching Used', style: 'subheader' },
      this.teachMode,

      { text: 'Mode of Presentation', style: 'subheader' },
      this.presentMode,

      { text: 'Resources Used', style: 'subheader' },
      this.resources,

      { text: 'Activities', style: 'subheader' },
      this.activities,

      { text: 'Assessments', style: 'subheader' },
      this.assess,

      { text: 'Challenges/Recommendations', style: 'subheader' },
      this.challRecomm,
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        fontSize: 14,
        bold: true,
        margin: [0, 15, 0, 0]
      },
      story: {
        italic: true,
        alignment: 'center',
        width: '50%'
      }
    }
  };

 this.pdfObj = pdfMake.createPdf(docDefinition);
 console.log("it ended");
 alert("Successfully Created a pdf"); 


}

downloadPdf() {
  if (this.plt.is('cordova')) {
    alert("Successfully downloaded a pdf");

  } else {
    this.pdfObj.download();
  }
}

}
