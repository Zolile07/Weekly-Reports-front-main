import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HodApiService {

  private baseUrl = 'http://localhost:4041/hod';  

   constructor(private http: HttpClient) { }
  
   getReports(): Observable<any> {
	  return this.http.get(`${this.baseUrl}`);
   }
   
   getModules(): Observable<any> {
	  return this.http.get(`${this.baseUrl}/modules/list`);
   }
   
   getReportsById(moduleCode: string): Observable<any>{
	  return this.http.get(`${this.baseUrl}/${moduleCode}`);
   }
   
   getViewReportById(reportId: any): Observable<any>{
	  return this.http.get(`${this.baseUrl}/fetchById/${reportId}`);
   }
   
   searchAllReports(reportDate: any): Observable<any>{
	  return this.http.get(`${this.baseUrl}/search/all/reports/${reportDate}`);
   }
   
   searchReport(reportDate: any, moduleCode: string): Observable<any>{
	  return this.http.get(`${this.baseUrl}/search/report/${reportDate}/${moduleCode}`);
   }

   hodLogin(username: any, user_password: string): Observable<any>{
	  return this.http.get(`${this.baseUrl}/login/${username}/${user_password}`);
   }
}
