import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FactsByNumbersService } from '../../../pages/home/services/facts-by-numbers.service';
import {
  getFactsStat,
  getFactsStatFail,
  getFactsStatSuccess,
} from '../actions/facts.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class FactsStatusEffect {
  constructor(
    private actions$: Actions,
    private factsServise: FactsByNumbersService
  ) {}

  getFactsStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFactsStat),
      switchMap(() => {
        return this.factsServise.getFactNumberStatistics();
      }),
      map((facts) => {
        return getFactsStatSuccess({ facts: facts });
      }),
      catchError((err) => {
        return of(getFactsStatFail({ err: err }));
      })
    )
  );
}
