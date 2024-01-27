import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../../ApplicationStore/appStore';
import { getAllLocations } from '../../../../ApplicationStore/locationIndex/actions/actions';
import { ActivatedRoute } from '@angular/router';
import { selectLocations } from '../../../../ApplicationStore/locationIndex/selectors/selectors';
import { ILocation } from '../../../../models/Location';
import { Destination } from '../../../../models/Destination';
import { filter, flatMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-destination-details',
  standalone: true,
  imports: [],
  templateUrl: './destination-details.component.html',
  styleUrl: './destination-details.component.scss',
})
export class DestinationDetailsComponent implements OnInit {
  private store = inject(Store<State>);
  private route = inject(ActivatedRoute);
  destination: Destination | null = null;

  ngOnInit(): void {
    this.store.dispatch(getAllLocations());

    this.route.params.subscribe((params) => {
      this.store
        .select(selectLocations)
        .pipe(
          map((locations: ILocation[]) =>
            locations
              .filter((item) => Boolean(item.destinations))
              .map((location) => location.destinations)
              .flat()
          ),

          map((destinations: Destination[]) =>
            destinations.find((item) => item.id === +params['id'])
          )
        )
        .subscribe((currentDestination) => {
          if (currentDestination) this.destination = currentDestination;
        });
    });
  }
}
