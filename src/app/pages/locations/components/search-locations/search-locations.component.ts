import { Component, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../../../ApplicationStore/appStore';
import { selectLocations } from '../../../../ApplicationStore/locationIndex/selectors/selectors';
import { Subscription, filter, map } from 'rxjs';
import { Location } from '../../../../models/Location';

@Component({
  selector: 'app-search-locations',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-locations.component.html',
  styleUrl: './search-locations.component.scss',
})
export class SearchLocationsComponent implements OnDestroy {
  searchTerm: string = '';
  filteredLocations: Location[] = [];
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
        map((locations: Location[]) =>
          locations.filter((location: Location) =>
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
