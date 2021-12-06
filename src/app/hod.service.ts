import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HodService {

  constructor(private http: HttpClient) { }
  getSubject(Id){
    return this.http.get('http://localhost:4041/hod/selectedModule/' + Id);
  }
  
  getReports(id){
    return this.http.get('http://localhost:4041/hod/hodReport/' + id);
  }

  hodDash(id){
    return this.http.get('http://localhost:4041/hod/hodDashboard/' + id);
  }

  /*hodDashMod(id){
    return this.http.get('http://localhost:4041/hod/subjectCode/' + id);
  }*/

  getModules(depId){
	  return this.http.get(`http://localhost:4041/hod/deptModules/` + depId);
   } 

   getReportsById(moduleCode: string, depId : string): Observable<any>{
	  return this.http.get(`http://localhost:4041/hod/reports/reportById/${moduleCode}/${depId}`);
   }

   searchReport(reportDate: any, moduleCode: any, depId: any): Observable<any>{
	  return this.http.get(`http://localhost:4041/hod/search/report/${reportDate}/${moduleCode}/${depId}`);
   }

   searchAllReports(reportDate: any, depId: any): Observable<any>{
	  return this.http.get(`http://localhost:4041/hod/search/report/${reportDate}/${depId}`);
   }
   searchByDateAndCode(reportDate: any, depId: any): Observable<any>{
	  return this.http.get(`http://localhost:4041/hod/hodReport/Search/byDate/${reportDate}/${depId}`);
   }

   getDetailedReport(reportId: any): Observable<any>{
	  return this.http.get('http://localhost:4041/hod/hodReport/'+ reportId );
   }

   getReportSummary(depId: any): Observable<any>{
    return this.http.get(`http://localhost:4041/hod/reports/${depId}`);
  }

  createReport(body: any){
    return this.http.post('http://localhost:4041/hod/report', body, {observe: 'body'});
  }

  getMyReports(id){
    return this.http.get('http://localhost:4041/hod/reports/' + id);
  }
  //hod-view-module
  getMyReportz(id){
    return this.http.get('http://localhost:4041/hod/reportzz/' + id);
  }

  getAllReports(id){
    return this.http.get('http://localhost:4041/hod/reports/' + id);
  }
}
