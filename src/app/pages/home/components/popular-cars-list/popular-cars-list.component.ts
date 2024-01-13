import { selectPopularCars } from './../../../../ApplicationStore/most-popular-cars/selectors/popular-cars.selector';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CarListItemComponent } from '../../../../Shared/components/car-list-item/car-list-item.component';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../../../ApplicationStore/appStore';
import {
  getAudiCars,
  getBmwCars,
  getTeslaCars,
  getVolkswagenCars,
} from '../../../../ApplicationStore/most-popular-cars/actions/popularCars.actions';
import { Observable } from 'rxjs';
import { PopularCarsEffect } from '../../../../ApplicationStore/most-popular-cars/effects/popular-cars-effect';
import { PopularCarsService } from '../../services/popular-cars.service';
import { AsyncPipe } from '@angular/common';
import { Car } from '../../../../models/Car';
('angular-star-rating');

@Component({
  selector: 'app-popular-cars-list',
  standalone: true,
  imports: [CarListItemComponent, CarListItemComponent, AsyncPipe],
  templateUrl: './popular-cars-list.component.html',
  styleUrl: './popular-cars-list.component.scss',
  providers: [PopularCarsEffect, PopularCarsService],
})
export class PopularCarsListComponent implements OnInit {
  cars: Observable<Car[]> = this.store.select(selectPopularCars);
  constructor(private route: ActivatedRoute, private store: Store<State>) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const model = params['model'];

      switch (model) {
        case 'bmw':
          this.store.dispatch(getBmwCars());
          break;
        case 'audi':
          this.store.dispatch(getAudiCars());
          break;
        case 'volkswagen':
          this.store.dispatch(getVolkswagenCars());
          break;
        case 'tesla':
          this.store.dispatch(getTeslaCars());
          break;
        default:
          this.store.dispatch(getBmwCars());
      }
    });
  }
}
