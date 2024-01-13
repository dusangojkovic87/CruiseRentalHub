import {
  getTeslaCars,
  getTeslaCarsSuccess,
  getVolkswagenCarsFail,
} from './../actions/popularCars.actions';
import { Injectable } from '@angular/core';

import { PopularCarsActionTypes } from '../actionTypes/action.types';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { PopularCarsService } from '../../../pages/home/services/popular-cars.service';
import {
  getAudiCars,
  getAudiCarsFail,
  getAudiCarsSuccess,
  getBmwCars,
  getBmwCarsFail,
  getBmwCarsSuccess,
  getVolkswagenCars,
  getVolkswagenCarsSuccess,
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

  getAudiCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAudiCars),
      switchMap(() => {
        return this.popularCarsService.getAudiCars();
      }),
      map((cars: Car[]) => {
        return getAudiCarsSuccess({ cars: cars });
      }),
      catchError((err) => {
        return of(getAudiCarsFail({ error: err }));
      })
    )
  );

  getVolkswagenCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getVolkswagenCars),
      switchMap(() => {
        return this.popularCarsService.getVolkswagenCars();
      }),
      map((cars: Car[]) => {
        return getVolkswagenCarsSuccess({ cars: cars });
      }),
      catchError((err) => {
        return of(getVolkswagenCarsFail({ err: err }));
      })
    )
  );

  getTeslaCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTeslaCars),
      switchMap(() => {
        return this.popularCarsService.getTeslaCars();
      }),
      map((cars: Car[]) => {
        return getTeslaCarsSuccess({ cars: cars });
      }),
      catchError((err) => {
        return of(getVolkswagenCarsFail({ err: err }));
      })
    )
  );
}
