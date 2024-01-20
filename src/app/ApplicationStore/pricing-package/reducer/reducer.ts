import {
  getMonthlyPricingPlanFail,
  getYearlyPricingPlanFail,
  getYearlyPricingPlanSuccess,
} from './../actions/actions';
import { createReducer, on } from '@ngrx/store';
import { PricingPlan } from '../../../models/PricingPlan';
import { getMonthlyPricingPlanSuccess } from '../actions/actions';

export interface IPricingPlanState {
  plan: PricingPlan;
  errorMessage: string;
}

const PricingPlanInitState: IPricingPlanState = {
  plan: {
    essential: 0,
    recommended: 0,
    pro: 0,
  },
  errorMessage: '',
};

export const pricingPlanReducer = createReducer(
  PricingPlanInitState,
  on(getMonthlyPricingPlanSuccess, (state, action) => ({
    ...state,
    plan: action.plan,
  })),
  on(getMonthlyPricingPlanFail, (state, action) => ({
    ...state,
    errorMessage: action.error.message,
  })),
  on(getYearlyPricingPlanSuccess, (state, action) => ({
    ...state,
    plan: action.plan,
  })),
  on(getYearlyPricingPlanFail, (state, action) => ({
    ...state,
    errorMessage: action.error.message,
  }))
);
