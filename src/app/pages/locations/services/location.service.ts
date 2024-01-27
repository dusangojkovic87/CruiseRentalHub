import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocation } from '../../../models/Location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private http = inject(HttpClient);

  getAllLocations(): Observable<ILocation[]> {
    return this.http.get<ILocation[]>(
      '/assets/fakeBackend/locations/locations.json'
    );
  }
}
