import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../../ApplicationStore/appStore';
import { filterVehiclesByDest } from '../../../../ApplicationStore/vehicles/actions/actions';
import { selectCarsByDest } from '../../../../ApplicationStore/vehicles/selectors/selectors';
import { Car } from '../../../../models/Car';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-location-car-list',
  standalone: true,
  imports: [],
  templateUrl: './location-car-list.component.html',
  styleUrl: './location-car-list.component.scss',
})
export class LocationCarListComponent implements OnInit, OnDestroy {
  //filter cars base on destination input
  @Input() destinationName: string = '';
  private store = inject(Store<State>);
  carsByDest: Car[] = [];
  storeSub!: Subscription;

  ngOnInit(): void {
    if (this.destinationName) {
      this.store.dispatch(
        filterVehiclesByDest({ destination: this.destinationName })
      );
    }

    this.storeSub = this.store.select(selectCarsByDest).subscribe((cars) => {
      this.carsByDest = cars;
    });
  }

  ngOnDestroy(): void {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }
}
