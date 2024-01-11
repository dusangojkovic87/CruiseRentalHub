import { Component } from '@angular/core';
import { StarRatingModule } from 'angular-star-rating';

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [StarRatingModule],
  templateUrl: './car-list-item.component.html',
  styleUrl: './car-list-item.component.scss',
})
export class CarListItemComponent {}
