import {
  getRecommendedCarDealsSuccess,
  getRecommendedCarDealsFail,
} from './../actions/recommended-car-deals.action';
import { Injectable, inject } from '@angular/core';
import { RecommendedCarDealsService } from '../../../pages/home/services/recommended-car-deals.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getRecommendedCarDeals } from '../actions/recommended-car-deals.action';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class CarDealsEffect {
  private carDealsService = inject(RecommendedCarDealsService);
  private actions$ = inject(Actions);

  getCarDeals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRecommendedCarDeals),
      switchMap(() => {
        return this.carDealsService.getRecommendedCarDeals();
      }),
      map((cars) => {
        return getRecommendedCarDealsSuccess({ cars: cars });
      }),
      catchError((err) => {
        return of(getRecommendedCarDealsFail({ error: err }));
      })
    )
  );
}
