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
import { getBmwCars } from '../../../../ApplicationStore/most-popular-cars/actions/popularCars.actions';
import { Subscription } from 'rxjs';
import { EffectsModule } from '@ngrx/effects';
import { PopularCarsEffect } from '../../../../ApplicationStore/most-popular-cars/effects/popular-cars-effect';
import { PopularCarsService } from '../../services/popular-cars.service';
('angular-star-rating');

@Component({
  selector: 'app-popular-cars-list',
  standalone: true,
  imports: [CarListItemComponent, CarListItemComponent],
  templateUrl: './popular-cars-list.component.html',
  styleUrl: './popular-cars-list.component.scss',
  providers: [PopularCarsEffect, PopularCarsService],
})
export class PopularCarsListComponent implements OnInit, OnDestroy {
  storeSub!: Subscription;
  constructor(private route: ActivatedRoute, private store: Store<State>) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const model = params['model'];

      switch (model) {
        case 'bmw':
          console.log('akcija za bmw');

          this.store.dispatch(getBmwCars());

          break;
        case 'audi':
          console.log('akcija za audi');
          break;
        case 'volkswagen':
          console.log('akcija za volksvagen');
          break;
        case 'tesla':
          console.log('akcija za teslu');
          break;
        default:
          console.log('default akcija bmw');
      }

      this.storeSub = this.store
        .select((state) => state.popularCarsState.cars)
        .subscribe((cars) => {
          console.log(cars);
        });
    });
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }
}
