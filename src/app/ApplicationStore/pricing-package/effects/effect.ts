import { inject } from '@angular/core';
import { PricingPlanService } from '../../../pages/home/services/pricing-plan.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getMonthlyPricingPlan,
  getYearlyPricingPlan,
  getYearlyPricingPlanFail,
  getYearlyPricingPlanSuccess,
} from '../actions/actions';
import { catchError, map, of, switchMap } from 'rxjs';

export class PricingPlanEffect {
  private pricingServise = inject(PricingPlanService);
  private actions$ = inject(Actions);

  getMonthlyPlan$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMonthlyPricingPlan),
      switchMap(() => {
        return this.pricingServise.getMonthlyPricingPlan();
      }),
      map((plan) => {
        return getYearlyPricingPlanSuccess({ plan: plan });
      }),
      catchError((err) => {
        return of(getYearlyPricingPlanFail({ error: err }));
      })
    )
  );

  getYearlyPlan$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getYearlyPricingPlan),
      switchMap(() => {
        return this.pricingServise.getYearlyPricingPlan();
      }),
      map((plan) => {
        return getYearlyPricingPlanSuccess({ plan: plan });
      }),
      catchError((err) => {
        return of(getYearlyPricingPlanFail({ error: err }));
      })
    )
  );
}
