import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { LectureService } from '../lecture.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  modules: any;
  temp: any;

  constructor(private router: Router, private lectureService: LectureService, private route: ActivatedRoute ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.temp = this.router.getCurrentNavigation().extras.state.myReports;
        console.log('my reports:', this.temp);
      }
    });
  }

  

  ngOnInit() {
    this.displayModReports();
  }

  displayModReports(){
    this.lectureService.getMyReport(this.temp)
    .subscribe(data => {
      this.modules = data;
      console.log(this.modules);
    });
  }

  getModule(repNo){
    console.log(repNo);
    this.lectureService.getDetailedReport(repNo)
    .subscribe(data => {

      const detailed: NavigationExtras = {
        state: {
          detailed: data
        }
      };

      this.router.navigate(['/lec-detailed-report'], detailed);
    });

    
  }

  //////////////////////

  getReport(repNo){
    console.log(repNo);
    this.lectureService.getDetailedReport(repNo)
    .subscribe(data => {

      const detailed: NavigationExtras = {
        state: {
          detailed: data
        }
      };

      this.router.navigate(['/lecturer-report'], detailed);
    });

    
  }
  ////////////////////////


}
