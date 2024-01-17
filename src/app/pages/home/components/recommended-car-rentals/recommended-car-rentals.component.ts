import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../../ApplicationStore/appStore';
import { getRecommendedCarDeals } from '../../../../ApplicationStore/recommended-car-deals/actions/recommended-car-deals.action';
import { Observable } from 'rxjs';
import { Car } from '../../../../models/Car';
import { selectRecommendedCars } from '../../../../ApplicationStore/recommended-car-deals/selectors/carDeals-selector';
import { AsyncPipe } from '@angular/common';
import { CarListItemComponent } from '../../../../Shared/components/car-list-item/car-list-item.component';
import { DragScrollComponent, DragScrollItemDirective } from 'ngx-drag-scroll';

@Component({
  selector: 'app-recommended-car-rentals',
  standalone: true,
  imports: [
    AsyncPipe,
    CarListItemComponent,
    DragScrollComponent,
    DragScrollItemDirective,
  ],
  templateUrl: './recommended-car-rentals.component.html',
  styleUrl: './recommended-car-rentals.component.scss',
})
export class RecommendedCarRentalsComponent implements OnInit {
  private store = inject(Store<State>);

  cars: Observable<Car[]> = this.store.select(selectRecommendedCars);

  ngOnInit(): void {
    this.store.dispatch(getRecommendedCarDeals());
  }
}
