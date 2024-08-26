import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployeeModel} from "./employee.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public httpClient: HttpClient) { }


  api:string = "http://localhost:8080";

  public saveEmployee(employee:EmployeeModel) : Observable<EmployeeModel>{
    return this.httpClient.post<EmployeeModel>(`${this.api}/save/employee`, employee);
  }

}
