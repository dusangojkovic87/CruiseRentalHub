import {
  filterVehiclesByDestFail,
  getAllVehiclesFail,
} from './../actions/actions';
import { Injectable, inject } from '@angular/core';
import { CarsService } from '../../../Shared/services/cars.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  filterVehiclesByDest,
  filterVehiclesByDestSuccess,
  getAllVehicles,
  getAllVehiclesSuccess,
} from '../actions/actions';
import { catchError, concatMap, filter, map, of, switchMap } from 'rxjs';
import { Car } from '../../../models/Car';
@Injectable()
export class CarsEffect {
  private carsService = inject(CarsService);
  private actions$ = inject(Actions);

  getCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllVehicles),
      concatMap(() => {
        return this.carsService.getCars();
      }),
      map((cars) => {
        return getAllVehiclesSuccess({ vehicles: cars });
      }),
      catchError((err) => {
        return of(getAllVehiclesFail({ error: err }));
      })
    )
  );

  filterCarsByDest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(filterVehiclesByDest),
      switchMap((data) => {
        return this.carsService
          .getCars()
          .pipe(
            map((cars) =>
              cars.filter(
                (c) =>
                  c.destination.toLowerCase() === data.destination.toLowerCase()
              )
            )
          );
      }),
      map((cars) => {
        return filterVehiclesByDestSuccess({ vehicles: cars });
      }),
      catchError((err) => {
        return of(filterVehiclesByDestFail({ err: err }));
      })
    )
  );
}
