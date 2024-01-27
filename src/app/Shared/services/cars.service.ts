import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../../models/Car';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private http = inject(HttpClient);

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(
      'http://localhost:4200/assets/fakeBackend/cars/cars.json'
    );
  }
}
