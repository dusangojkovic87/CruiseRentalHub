import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPricingPlanState } from '../reducer/reducer';

export const selectPricingPlanState =
  createFeatureSelector<IPricingPlanState>('pricingPlanState');

export const selectPricingPlan = createSelector(
  selectPricingPlanState,
  (state) => state.plan
);
