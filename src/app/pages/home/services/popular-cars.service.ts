import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../../../models/Car';

@Injectable({
  providedIn: 'root',
})
export class PopularCarsService {
  constructor(private http: HttpClient) {}

  getBmwCars(): Observable<Car[]> {
    return this.http.get<Car[]>(
      'http://localhost:4200/assets/fakeBackend/popularCars/bmw/bmw.json'
    );
  }

  getAudiCars(): Observable<Car[]> {
    return this.http.get<Car[]>(
      'http://localhost:4200/assets/fakeBackend/popularCars/audi/audi.json'
    );
  }

  getVolkswagenCars(): Observable<Car[]> {
    return this.http.get<Car[]>(
      'http://localhost:4200/assets/fakeBackend/popularCars/volkswagen/volkswagen.json'
    );
  }

  getTeslaCars(): Observable<Car[]> {
    return this.http.get<Car[]>(
      'http://localhost:4200/assets/fakeBackend/popularCars/tesla/tesla.json'
    );
  }
}
