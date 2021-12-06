import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { HodService } from '../hod.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-hod-dashboard',
  templateUrl: './hod-dashboard.page.html',
  styleUrls: ['./hod-dashboard.page.scss'],
})
export class HodDashboardPage implements OnInit {
  temp: any;
  deptNum;
  dashboard: any;
  dashboardMod: any;
  hodName;
  email;
  deptName;
  deptCode;
  modules: any[] = [];
  hodNum;


  constructor(private hodService: HodService, 
              private router: Router, 
              private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.temp = this.router.getCurrentNavigation().extras.state.dash;
        console.log('ekse',this.temp);
        this.hodNum = this.temp[0].headNum;
        this.deptNum = this.temp[0].depCode;
        this.hodName = this.temp[0].title + ' ' + this.temp[0].headName + ' ' + this.temp[0].headSurname;
        this.email = this.temp[0].email;
        this.deptName = this.temp[0].deptName;
        this.deptCode = this.temp[0].depCode;
        console.log('depCode', this.deptNum);
        console.log('dept name', this.deptName);
        console.log('email', this.email);
        console.log('id', this.hodNum);
        console.log('hodName', this.hodName);
        
        this.Display();

        this.hodService.hodDash(this.deptNum)
        .subscribe(data => {
        this.dashboard = data;
        this.deptName = this.dashboard[0].deptName;
        this.hodName = this.dashboard[0].title + ' ' + this.dashboard[0].headName + ' ' + this.dashboard[0].headSurname;
        this.email = this.dashboard[0].email;
        this.deptNum = this.dashboard[0].depCode;
        this.hodNum = this.dashboard[0].headNum;
  
        console.log('holer', this.dashboard);
        },
          error => { });

          
      }
     
    });
  
  }

  ngOnInit() {
    
  }
  
  Display() {

    this.hodService.getModules(this.deptNum)
      .subscribe(data => {
      this.dashboardMod = data;
      console.log('display', this.dashboardMod);
      this.deptName = this.dashboardMod[0].deptName;
      this.hodNum = this.dashboardMod[0].title + ' ' + this.dashboardMod[0].headName + ' ' + this.dashboardMod[0].headSurname;
      this.email = this.dashboardMod[0].email;
      this.deptNum = this.dashboardMod[0].depCode;

      
      },
        error => { });
  }




  

  getModule(id) {
    console.log('get dash', this.dashboard);
    this.hodService.getSubject(id)
      .subscribe(data => {
        id = this.dashboard[0].depCode;
        const myModules: NavigationExtras = {
          state: {
            dashboard: id
          }
        };
        console.log(myModules);
        this.router.navigate(['/hod-view-module'], myModules);
      },
        error => { console.log('cant'); });
  }

  getModulez(id) {
    console.log('for hod detailed report', this.dashboard);
    this.hodService.getDetailedReport(id)
      .subscribe(data => {
        const detailed: NavigationExtras = {
          state: {
            detailed: data
          }
        };
        console.log('detailed went through',detailed)
        this.router.navigate(['/detailed-report'], detailed);
      },
        error => { console.log('cant'); });
  }
  
  summary(){

    const mySummary: NavigationExtras = {
      state: {
        mySummary: this.dashboard
      }
    };
    console.log('hod', mySummary);

    this.router.navigate(['/hod-report'], mySummary);
  }
  hodViewModulez(){
    const detailed: NavigationExtras = {
      state: {
        detailed: this.dashboardMod
      }
    };
    console.log('move to hod viw modules', detailed)
    this.router.navigate(['/hod-view-module'],detailed)
  }

  detailedReport(){
    const detailed: NavigationExtras = {
      state: {
        detailed: this.deptNum
      }
    };
    console.log('move to detailed', detailed)
    this.router.navigate(['/detailed-report'],detailed)
  }

  reports(){
    console.log(this.deptNum);
    const myReports: NavigationExtras = {
      state: {
        myReports: this.dashboard
      }
    };
    console.log('move to hod reports', myReports);
    this.router.navigate(['/hod-report'], myReports);
  }

  viewModule(modelCode: any){
	  this.router.navigateByUrl('/hod-view-module', {state:{module:modelCode, depId:this.deptNum}});
  }
}
