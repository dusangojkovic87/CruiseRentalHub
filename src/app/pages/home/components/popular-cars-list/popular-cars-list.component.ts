import { Component } from '@angular/core';
import { CarListItemComponent } from '../../../../Shared/components/car-list-item/car-list-item.component';
('angular-star-rating');

@Component({
  selector: 'app-popular-cars-list',
  standalone: true,
  imports: [CarListItemComponent, CarListItemComponent],
  templateUrl: './popular-cars-list.component.html',
  styleUrl: './popular-cars-list.component.scss',
  providers: [],
})
export class PopularCarsListComponent {}
