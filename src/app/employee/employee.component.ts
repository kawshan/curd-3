import {Component, OnInit} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatOption, MatSelect} from "@angular/material/select";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatDivider} from "@angular/material/divider";
import {MatAnchor, MatButton} from "@angular/material/button";
import {EmployeeService} from "../employee.service";
import {EmployeeModel} from "../employee.model";
import {FormsModule, NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelect,
    MatOption,
    MatRadioGroup,
    MatRadioButton,
    MatCheckbox,
    MatDivider,
    MatButton,
    MatAnchor,
    FormsModule,
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  employee:EmployeeModel={
  employeeAddress: "",
  employeeContactNUmber: "",
  employeeDepartment: "",
  employeeGender: "",
  employeeId: 0,
  employeeName: "",
  employeeSkills: ""
}

skills:string[] = [];


  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
  }




  onSkillsChange(event:any):void{
    console.log(event);
    if(event.checked){
      this.skills.push(event.source.value);
    }else {
      this.skills.forEach((item,index)=>{
        if (item==event.source.value){
          this.skills.splice(index,1);
        }
      });
    }
    this.employee.employeeSkills=this.skills.toString();
  }




  saveEmployee(employeeForm:NgForm):void{
    this.employeeService.saveEmployee(this.employee).subscribe(
      {
        next:(res:EmployeeModel)=>{
          console.log(res);
          employeeForm.reset();
          this.employee.employeeGender="";
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err)
        }
      }
    );
  }

}
