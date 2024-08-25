import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {EmployeeComponent} from "./employee/employee.component";

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'employee',component:EmployeeComponent},
];
