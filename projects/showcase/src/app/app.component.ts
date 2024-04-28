import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgeDatepickerComponent} from "../../../nge-datepicker/src/lib/nge-datepicker.component";
import {NgFor, NgForOf} from "@angular/common";
import {NgeDatepickerDirective} from "../../../nge-datepicker/src/lib/nge-datepicker.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgeDatepickerComponent,NgFor, NgForOf, NgeDatepickerDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'showcase';
}

