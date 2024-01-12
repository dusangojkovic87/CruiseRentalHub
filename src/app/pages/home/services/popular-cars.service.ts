import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularCarItem } from '../../../models/most-popular-cars/popularCarItem';

@Injectable({
  providedIn: 'root',
})
export class PopularCarsService {
  constructor(private http: HttpClient) {}

  getBmwCars(): Observable<PopularCarItem[]> {
    return this.http.get<PopularCarItem[]>(
      'http://localhost:4200/assets/fakeBackend/popularCars/bmw/bmw.json'
    );
  }
}
