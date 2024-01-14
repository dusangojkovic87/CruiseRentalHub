import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getCarTypesData,
  getCarTypesDataSuccess,
  getCarTypesFail,
} from '../actions/carTypesActions';
import { catchError, map, of, switchMap } from 'rxjs';
import { CarTypeService } from '../../../pages/home/services/car-type.service';
import { CarType } from '../../../models/CarType';

@Injectable()
export class CarTypesEffect {
  constructor(
    private actions$: Actions,
    private popularCarTypesService: CarTypeService
  ) {}

  getCarTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCarTypesData),
      switchMap(() => {
        return this.popularCarTypesService.getCarTypesCountData();
      }),
      map((carTypes: CarType[]) => {
        return getCarTypesDataSuccess({ carTypes: carTypes });
      }),
      catchError((err) => {
        return of(getCarTypesFail({ err: err }));
      })
    )
  );
}
