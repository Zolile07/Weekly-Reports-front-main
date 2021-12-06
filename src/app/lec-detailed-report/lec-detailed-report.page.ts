import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { LectureService } from '../lecture.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lec-detailed-report',
  templateUrl: './lec-detailed-report.page.html',
  styleUrls: ['./lec-detailed-report.page.scss'],
})
export class LecDetailedReportPage implements OnInit {

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

  sub() {
    console.log(this.form2);
  }

  constructor(private router: Router, private lectureService: LectureService, private route: ActivatedRoute ) {
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

}
