import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FactStatus } from '../../../models/FactStatus';

@Injectable({
  providedIn: 'root',
})
export class FactsByNumbersService {
  private http = inject(HttpClient);

  constructor() {}

  getFactNumberStatistics(): Observable<FactStatus[]> {
    return this.http.get<FactStatus[]>(
      'http://localhost:4200/assets/fakeBackend/factsByNumbers/factsByNumbers.json'
    );
  }
}
