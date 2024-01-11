import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-most-popular-cars',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './most-popular-cars.component.html',
  styleUrl: './most-popular-cars.component.scss',
})
export class MostPopularCarsComponent {}
