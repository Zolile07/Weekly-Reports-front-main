import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registerLecture(body: any){
    return this.http.post('http://localhost:4041/register/lecture', body, {
      observe: 'body'
    });
  }

  getModules(id){
    return this.http.get('http://localhost:4041/register/deptModules/' + id);
  }

  getDepartments(){
    return this.http.get('http://localhost:4041/register/department');
  }
}
