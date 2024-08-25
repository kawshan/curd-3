import { Component } from '@angular/core';
import {MatGridTile} from "@angular/material/grid-list";
import {MatGridListModule} from '@angular/material/grid-list';
import {DataRowOutlet} from "@angular/cdk/table";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatGridTile,
    MatGridListModule,
    DataRowOutlet,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
