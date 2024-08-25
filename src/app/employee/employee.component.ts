import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    MatInputModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

}
