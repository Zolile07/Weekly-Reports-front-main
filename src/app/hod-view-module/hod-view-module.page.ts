import { Component, OnInit } from '@angular/core';
import { HodService } from '../hod.service';
import {DatePipe} from '@angular/common';
//import {Router, ActivatedRoute} from '@angular/router';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-hod-view-module',
  templateUrl: './hod-view-module.page.html',
  styleUrls: ['./hod-view-module.page.scss'],
})
export class HodViewModulePage implements OnInit {
	
  reports: any [] = [];
  repo:any ;
  moduleCode: any;
  errorMsg: any;
  formatDate: any;
  reportDate: any;
  codeId: any;
  deptId: any;
  temp: any;
  modules: any;
  subjName = '';
  subjCode = '';
  deptCode = '';
  deptName = '';
  deptNum = '';
  hodName = '';
  hodNum = '';
  email = '';


  constructor(private router: Router, private hodService: HodService, private route: ActivatedRoute ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.temp = this.router.getCurrentNavigation().extras.state.detailed;
        console.log('my reports:', this.temp);
        this.formatDate = this.temp[0].date;
        this.subjName = this.temp[0].subjName;
        this.subjCode = this.temp[0].subjCode;
        this.deptCode = this.temp[0].depCode;
        this.deptName = this.temp[0].deptName;
        this.deptNum = this.temp[0].depCode;
        this.hodName = this.temp[0].headName;
        this.hodNum = this.temp[0].headNum;
        this.email = this.temp[0].email;

        

        
      }
    });
    
  }
  datePipe: any = new DatePipe('en-ZA');

  ngOnInit(){

    //this.DisplayModules();
        //this.ReportsInfoHod();

        {
          /*
	this.moduleCode = this.router.getCurrentNavigation().extras.state.modules;
  this.deptId = this.router.getCurrentNavigation().extras.state.deptId;    
	
	this.hodService.getReportsById(this.moduleCode, this.deptId).subscribe(data => {
	console.log(data.message);
	console.log(data);
  console.log('reports array',this.reports);
  this.reports = data.data;
  this.moduleCode[0].subjCode = this.reports[0].subjCode;
  this.deptId[0].depCode = this.reports[0].depCode;
	
	console.log(this.reports);
	  
	}, error => console.log(error));
  */
        }

        console.log(this.subjCode);

        this.hodService.getMyReportz(this.deptCode)
      .subscribe(data => {
      this.modules = data;
      console.log('display all', this.modules);
      },
        error => {
          console.log('couldnt');
        });

  }
  
  /*
  search(){
	  
    this.formatDate = this.datePipe.transform(this.reportDate, 'yyyy-MM-dd');
    
    if(this.formatDate == null)  {
       alert("Invalid date selected"); 
    }else{
      this.hodService.searchReport(this.formatDate, this.moduleCode, this.deptId).subscribe(data => {
      
        console.log(data);
      console.log(this.reports);
      this.reports = data;
      console.log(this.reports);

      this.moduleCode[0].subjCode = this.reports[0].subjCode;
      this.deptId[0].deptCode = this.reports[0].depCode;	
      
      
    }, error => console.log(error));
    }
    
  }
*/
  hodReport(){
    const detailed: NavigationExtras = {
      state: {
        detailed: this.repo
      }
    };
    console.log('move to reports', detailed)
    this.router.navigate(['reports'],detailed)
  }

   hodViewModulez(){
    const detailed: NavigationExtras = {
      state: {
        detailed: this.repo
      }
    };
    console.log('move to hod viw modules', detailed)
    this.router.navigate(['/hod-view-module'],detailed)
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

  DisplayModules() {

    this.hodService.getMyReports(this.deptCode)
      .subscribe(data => {
      this.modules = data;
      console.log('display', this.modules);
      this.deptName = this.modules[0].deptName;
      this.email = this.modules[0].email;
      this.deptCode = this.modules[0].depCode;
      this.subjCode = this.modules[0].subjCode;
      
      
      },
        error => { 
          console.log('couldnt');
        });
    }

    search(){
	
      this.formatDate = this.datePipe.transform(this.reportDate, 'yyyy-MM-dd');
      
      if(this.formatDate == null)  {
         alert("Invalid date selected"); 
      }else{
        this.hodService.searchByDateAndCode(this.formatDate, "NDIT12").subscribe(data => {
     
        this.modules = data;
        console.log(this.modules);
        this.DisplayModules();
    
      }, error => console.log(error));
      }
      
      }

    ReportsInfoHod() {

    this.hodService.getAllReports(this.subjCode)
      .subscribe(data => {
      this.repo = data;
      console.log('reports info', this.repo);
      this.deptName = this.repo[0].deptName;
      this.email = this.repo[0].email;
      this.deptCode = this.repo[0].depCode;
      this.subjCode = this.repo[0].subjCode;
      this.formatDate = this.repo[0].date;
      this.subjName = this.repo[0].subjName;
      this.hodName = this.repo[0].headName;
      this.hodNum = this.repo[0].headNum;
      this.email = this.repo[0].email;
      
      
      },
        error => { 
          console.log('couldnt do reports info ')
        });
    }

    ViewReportsInfoHod(subjectCode){
      console.log(subjectCode);
      this.hodService.getMyReports(subjectCode)
      .subscribe(data => {
  
        const detailed: NavigationExtras = {
          state: {
            detailed: data
          }
        };
  
        this.router.navigate(['/hod-report'], detailed);
      });
    } 


/*
    Report() {

      this.hodService.getReportsById(this.moduleCode, this.deptId).subscribe(data => {
        console.log(data.message);
        console.log(data);
        console.log('reports array',this.reports);
        this.reports = data;
        this.moduleCode = this.reports[0].subjCode;
        this.deptId = this.reports[0].depCode;
        
        console.log(this.reports);
          
        }, error => console.log(error));
      
    
    }
*/
}


