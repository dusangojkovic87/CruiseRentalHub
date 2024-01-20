import { createAction, props } from '@ngrx/store';
import { pricingPlanActionTypes } from '../actionTypes/actionTypes';
import { PricingPlan } from '../../../models/PricingPlan';
import { ErrorResponse } from '../../../models/Error/ErrorResponse';

export const getMonthlyPricingPlan = createAction(
  pricingPlanActionTypes.GET_MONTHLY_PRICING_PLAN
);
export const getYearlyPricingPlan = createAction(
  pricingPlanActionTypes.GET_YEARLY_PRICING_PLAN
);
export const getYearlyPricingPlanSuccess = createAction(
  pricingPlanActionTypes.GET_YEARLY_PRICING_PLAN_SUCCESS,
  props<{ plan: PricingPlan }>()
);
export const getMonthlyPricingPlanSuccess = createAction(
  pricingPlanActionTypes.GET_MONTHLY_PRICING_PLAN_SUCCESS,
  props<{ plan: PricingPlan }>()
);
export const getYearlyPricingPlanFail = createAction(
  pricingPlanActionTypes.GET_YEARLY_PRICING_PLAN_FAIL,
  props<{ error: ErrorResponse }>()
);
export const getMonthlyPricingPlanFail = createAction(
  pricingPlanActionTypes.GET_MONTHLY_PRICING_PLAN_FAIL,
  props<{ error: ErrorResponse }>()
);
