import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getAllLocations,
  getAllLocationsFail,
  getAllLocationsSuccess,
} from '../actions/actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { LocationService } from '../../../pages/locations/services/location.service';
import { ILocation } from '../../../models/Location';

@Injectable()
export class LocationIndexEffect {
  private actions$ = inject(Actions);
  private locationService = inject(LocationService);

  getAllLocations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllLocations),
      switchMap(() => {
        return this.locationService.getAllLocations();
      }),
      map((locations: ILocation[]) => {
        return getAllLocationsSuccess({ locations: locations });
      }),
      catchError((err) => {
        return of(getAllLocationsFail({ error: err }));
      })
    )
  );
}
