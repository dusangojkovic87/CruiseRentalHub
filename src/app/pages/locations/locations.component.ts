import { Component } from '@angular/core';
import { SearchLocationsComponent } from './components/search-locations/search-locations.component';
import { LocationIndexComponent } from './components/location-index/location-index.component';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [SearchLocationsComponent, LocationIndexComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent {}
