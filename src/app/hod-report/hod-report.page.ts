import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { HodService } from '../hod.service';
import {DatePipe} from '@angular/common';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-hod-report',
  templateUrl: './hod-report.page.html',
  styleUrls: ['./hod-report.page.scss'],
})
export class HodReportPage implements OnInit {

  modz:any;

  deptId: any;
  reports: any[] = [];
  reportDate:any;
  formatDate: any;
  temp: any;
  repo: any;
  modules: any;
  subjName = '';
  subjCode = '';
  deptCode = '';
  deptName = '';
  deptNum = '';
  hodName = '';
  hodNum = '';
  email = '';
  title = '';
  lectureName = '';
  lectureSurName = '';
  lecSubId ='';
  reportNum ='';

  teachModes = [];

  topics;
  teachMode;
  presentMode;
  resources;
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

  sub() {
    console.log(this.form2);
  }



  constructor(private hodService: HodService,
              private router: Router,
              private plt: Platform,
              private file: File,
              private fileOpener: FileOpener,
              private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.temp = this.router.getCurrentNavigation().extras.state.myReports;
        console.log('my reports',this.temp);
        //this.formatDate = this.temp[0].date;
        this.subjName = this.temp[0].subjName;
        this.subjCode = this.temp[0].subjCode;
        this.deptCode = this.temp[0].depCode;
        this.deptName = this.temp[0].deptName;
        this.deptNum = this.temp[0].depCode;
        this.hodName = this.temp[0].headName;
        this.lectureName = this.temp[0].title + ' ' + this.temp[0].lecName + ' ' + this.temp[0].lecSurname;
        this.hodNum = this.temp[0].headNum;
        this.email = this.temp[0].email;
        this.lecSubId = this.temp[0].lecSubId;

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
        this.reportNum = this.temp[0].reportNum;


        //this.DisplayModules();
        //this.Summary();


      }
    });
  }

  datePipe: any = new DatePipe('en-ZA');



  //Date = Date();

  myMessage = '';

  pdfObj = null;

  ngOnInit() {
    //this.DisplayModules();
       // this.Summary();
       this.hodService.getMyReportz(this.deptCode)
       .subscribe(data => {
       this.modules = data;
       console.log('display all reports', this.modules);

           //this.modules = data;



       },
         error => {
           console.log('Not Working')
          });

  }

  search(){

    this.formatDate = this.datePipe.transform(this.reportDate, 'yyyy-MM-dd');

    if(this.formatDate == null)  {
       alert("Invalid date selected");
    }else{
      this.hodService.searchByDateAndCode(this.formatDate, "NDIT12").subscribe(data => {

      this.modules = data;
      console.log('Search by date',this.modules);
      
      //this.DisplayModules();
     

    }, error => console.log(error));
    }

    }
/*
        displayModReports(){
          this.hodService.getMyReports(this.deptId)
          .subscribe(data => {
            this.modules = data;
            console.log(this.modules);
          });
        }
*/
  Summary(){

    this.hodService.getReportSummary(this.deptId).subscribe(data => {
      console.log(data.message);
        console.log(data);
        console.log(this.reports);
        this.reports = data;
        console.log(this.reports);

      }, error => console.log(error));

  }

  hodViewModulez(){
    const myReports: NavigationExtras = {
      state: {
        myReports: this.repo
      }
    };
    console.log('move to hod reports', myReports)
    this.router.navigate(['/hod-report'],myReports)
  }

  DisplayModules() {

      this.hodService.getMyReports(this.deptCode)
        .subscribe(data => {
        this.modules = data;
        console.log('display', this.modules);

        //this.modules=data;
        },
          error => {
            console.log('Not Working')
           });
  }

  getModule(repNo){
      console.log(repNo);
      this.hodService.getDetailedReport(repNo)
      .subscribe(data => {
  
        const detailed: NavigationExtras = {
          state: {
            detailed: data
          }
        };

        this.router.navigate(['/detailed-report'], detailed);
      });
  }

  ////////////////////////////////////////////////////



    ///////////////////////////////////////

    createPdf() {

      console.log('raw',this.modz[0].lecSubId);
      var id ;
      var tot = 0;

      var i, r;
      //this.modz = this.modules;



          for(id= 0; id != this.modz.length; id++){
            if(this.modz[id].lecSubId = this.modz[0].lecSubId){
              this.lecSubId = this.modz[id].lecSubId
              tot = id;
              i = this.modz[tot].lecSubId;
            }else{
              console.log("not there");
            }


        
          }

           //console.log(this.modules[id]);
            console.log(i);
            console.log(tot);

          

      //console.log(this.modz);
    const docDefinition = {
      content: [
        { text: 'Lecturer report', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },

        { text: 'Name', style: 'subheader' },
        this.modz[tot].lecName,

        { text: 'Module', style: 'subheader' },
        this.modz[tot].subjCode,

        { text: 'Department', style: 'subheader' },
        this.modz[tot].deptName,

        { text: 'Number of Students:', style: 'subheader' },
        this.modz[tot].numStudents,

        { text: 'Week average Attendance', style: 'subheader' },
        this.modz[tot].attendAvg,

        { text: 'Topic(s) covered', style: 'subheader' },
        this.modz[tot].topics,

        { text: 'Mode of Teaching Used', style: 'subheader' },
        this.modz[tot].teachMode,

        { text: 'Mode of Presentation', style: 'subheader' },
        this.modz[tot].presentMode,

        { text: 'Resources Used', style: 'subheader' },
        this.modz[tot].resources,

        { text: 'Activities', style: 'subheader' },
        this.modz[tot].activities,

        { text: 'Assessments', style: 'subheader' },
        this.modz[tot].assess,

        { text: 'Challenges/Recommendations', style: 'subheader' },
        this.modz[tot].challRecomm,
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

  }




  downloadPdf() {
    if (this.plt.is('cordova')) {

    } else {
      this.pdfObj.download();
    }
  }
}

