import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { LectureService } from '../lecture.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lecture-dashboard',
  templateUrl: './lecture-dashboard.page.html',
  styleUrls: ['./lecture-dashboard.page.scss'],
})
export class LectureDashboardPage implements OnInit {

  contentLoaded = false;

  modules: any;
  subjName = '';
  subjCode = '';
  lectureInfo: any;
  departmentName;
  email;
  lectureName;
  lecturId;
  Assess;

  constructor(private router: Router,
              private lectureService: LectureService,
              private route: ActivatedRoute,
              private alertCtrl: AlertController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.modules = this.router.getCurrentNavigation().extras.state.dash;
        
        this.lecturId = this.modules[0].lecNum;
        console.log('ma val ', this.modules);


      }
    });

    setTimeout(()=>{
      this.contentLoaded = true;
    }, 3000);

  }

  ngOnInit() {
    this.Display();
  }

  Display() {

    this.lectureService.getSubjects(this.lecturId)
      .subscribe(data => {
      this.lectureInfo = data;
      this.departmentName = this.lectureInfo[0].deptName;
      this.lectureName = this.lectureInfo[0].title + ' ' + this.lectureInfo[0].lecName + ' ' + this.lectureInfo[0].lecSurname;
      this.email = this.lectureInfo[0].email;

      console.log('display', this.lectureInfo);
      },
        error => { });
  }


  getModule(id) {
    console.log('get dash', this.modules);
    this.lectureService.getSubject(id)
      .subscribe(data => {
        const myModules: NavigationExtras = {
          state: {
            modules: data
          }
        };
        console.log(myModules);
        this.router.navigate(['/lecturer-report'], myModules);
      },
        error => { console.log('cant'); });
  }

  reports(){
    console.log(this.lecturId);
    const myReports: NavigationExtras = {
      state: {
        myReports: this.lecturId
      }
    };
    console.log('move to reports', myReports);
    this.router.navigate(['/reports'], myReports);
  }

  async showAlert() {
    await this.alertCtrl.create({
      header: 'Assessment Info',
      inputs: [
        {type: 'text', name: 'assessment', placeholder: 'Assessment'},
        {type: 'number', name: 'attempts', placeholder: 'Attempts'},
        {type: 'number', name: 'submitted', placeholder: 'Submitted'}
      ],
      buttons: [
        {text: 'Apply', handler: (res) => {
          // console.log()this.Assess = res.assessment;
          console.log(res.assessment);
          console.log(res.attempts);
          console.log(res.submitted);
        }
      },
      {
        text: 'Cancel'
      }
      ]
    }).then(res => res.present());
  }

  /*logForm() {
    this.showAlert();
    console.log(this.Assess);
  }*/
}
