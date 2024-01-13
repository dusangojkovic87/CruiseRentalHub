import { Injectable } from '@angular/core';

import { PopularCarsActionTypes } from '../actionTypes/action.types';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { PopularCarsService } from '../../../pages/home/services/popular-cars.service';
import {
  getBmwCars,
  getBmwCarsFail,
  getBmwCarsSuccess,
} from '../actions/popularCars.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Car } from '../../../models/Car';

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
        return this.popularCarsService.getBmwCars();
      }),
      map((data: Car[]) => {
        return getBmwCarsSuccess({ cars: data });
      }),

      catchError((err) => {
        return of(getBmwCarsFail({ error: err }));
      })
    )
  );
}
