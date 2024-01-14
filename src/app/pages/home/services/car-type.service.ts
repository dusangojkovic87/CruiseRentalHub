import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CarType } from '../../../models/CarType';

@Injectable({
  providedIn: 'root',
})
export class CarTypeService {
  private http = inject(HttpClient);

  constructor() {}

  getCarTypesCountData(): Observable<CarType[]> {
    return this.http.get<CarType[]>(
      'http://localhost:4200/assets/fakeBackend/popular-car-types/carTypes.json'
    );
  }
}
