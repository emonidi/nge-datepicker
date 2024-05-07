import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgeDatepickerComponent, NgeDatepickerDirective} from "@emonidi/nge-datepicker";
import {NgFor, NgForOf} from "@angular/common";

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

