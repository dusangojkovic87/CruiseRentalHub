import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../../../models/Location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private http = inject(HttpClient);

  getAllLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(
      '/assets/fakeBackend/locations/locations.json'
    );
  }
}
