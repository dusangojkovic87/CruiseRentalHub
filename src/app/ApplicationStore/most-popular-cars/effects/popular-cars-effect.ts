import { Injectable } from '@angular/core';

import { PopularCarsActionTypes } from '../actionTypes/action.types';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { PopularCarsService } from '../../../pages/home/services/popular-cars.service';
import { PopularCarItem } from '../../../models/most-popular-cars/popularCarItem';
import {
  getBmwCars,
  getBmwCarsFail,
  getBmwCarsSuccess,
} from '../actions/popularCars.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class PopularCarsEffect {
  constructor(
    private actions$: Actions,
    private popularCarsService: PopularCarsService
  ) {}

  getBmwCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBmwCars),
      switchMap(() => {
        console.log('effect bmw');

        return this.popularCarsService.getBmwCars();
      }),
      map((data: PopularCarItem[]) => {
        return getBmwCarsSuccess({ cars: data });
      }),

      catchError((err) => {
        return of(getBmwCarsFail({ error: err }));
      })
    )
  );
}
