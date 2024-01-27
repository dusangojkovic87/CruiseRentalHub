import { Component, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../../../ApplicationStore/appStore';
import { selectLocations } from '../../../../ApplicationStore/locationIndex/selectors/selectors';
import { Subscription, filter, map } from 'rxjs';
import { ILocation } from '../../../../models/Location';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-locations',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './search-locations.component.html',
  styleUrl: './search-locations.component.scss',
})
export class SearchLocationsComponent implements OnDestroy {
  searchTerm: string = '';
  filteredLocations: ILocation[] = [];
  locationSub!: Subscription;
  private store = inject(Store<State>);

  filterLocations() {
    if (this.searchTerm === '') {
      this.filteredLocations.length = 0;

      return;
    }
    this.locationSub = this.store
      .select(selectLocations)
      .pipe(
        map((locations: ILocation[]) =>
          locations.filter((location: ILocation) =>
            location.locationName
              .toLowerCase()
              .startsWith(this.searchTerm.toLowerCase())
          )
        )
      )
      .subscribe((filteredData) => {
        this.filteredLocations = filteredData;
      });
  }

  ngOnDestroy(): void {
    if (this.locationSub) {
      this.locationSub.unsubscribe();
    }
  }
}
