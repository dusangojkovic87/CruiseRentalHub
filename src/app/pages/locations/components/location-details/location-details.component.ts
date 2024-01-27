import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../../../ApplicationStore/appStore';
import { selectLocations } from '../../../../ApplicationStore/locationIndex/selectors/selectors';
import { Subscription, map } from 'rxjs';
import { ILocation } from '../../../../models/Location';
import { getAllLocations } from '../../../../ApplicationStore/locationIndex/actions/actions';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-location-details',
  standalone: true,
  imports: [RouterModule, NgxPaginationModule],
  templateUrl: './location-details.component.html',
  styleUrl: './location-details.component.scss',
})
export class LocationDetailsComponent implements OnInit, OnDestroy {
  p: number = 1;
  private route = inject(ActivatedRoute);
  private store = inject(Store<State>);
  private storeSub!: Subscription;

  filteredLocation: ILocation | null = null;

  ngOnInit(): void {
    this.store.dispatch(getAllLocations());

    this.route.params.subscribe((params: Params) => {
      this.filterLocations(+params['id']);
    });
  }

  filterLocations(id: number) {
    this.storeSub = this.store
      .select(selectLocations)
      .pipe(
        map((locations: ILocation[]) =>
          locations.find((location) => location.id === id)
        )
      )
      .subscribe((filterdLocation) => {
        if (filterdLocation) {
          this.filteredLocation = filterdLocation;
        }
      });
  }

  ngOnDestroy(): void {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }
}
