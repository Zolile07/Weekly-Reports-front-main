import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LectureService {

  constructor(private http: HttpClient) { }
  getSubjects(lectureId){
    return this.http.get('http://localhost:4041/lecture/lectureDashboard/' + lectureId);
  }

  getDetailedReport(Id){
    return this.http.get('http://localhost:4041/lecture/reportDetails/' + Id);
  }

  getSubject(Id){
    return this.http.get('http://localhost:4041/lecture/selectedModule/' + Id);
  }
  

  getLectuerInfo(){
    return this.http.get('http://localhost:4041/lecture/selectedModule');
    }

  createReport(body: any){
    return this.http.post('http://localhost:4041/lecture/report', body, {observe: 'body'});
  }

  getMyReport(lectureNum){
    return this.http.get('http://localhost:4041/lecture//myReports/' + lectureNum);
  }

  deleteReport(id){
    return this.http.get('http://localhost:4041/lecture/delete/report/' + id);
  }


  
}
