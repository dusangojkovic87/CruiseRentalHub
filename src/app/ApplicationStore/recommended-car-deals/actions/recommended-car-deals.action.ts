import { createAction, props } from '@ngrx/store';
import { carDealsActionTypes } from '../actionTypes/carDealsActionTypes';
import { Car } from '../../../models/Car';
import { ErrorResponse } from '../../../models/Error/ErrorResponse';

export const getRecommendedCarDeals = createAction(
  carDealsActionTypes.GET_RECOMMENDED_CARS
);

export const getRecommendedCarDealsSuccess = createAction(
  carDealsActionTypes.GET_RECOMMENDED_CARS_SUCCESS,
  props<{ cars: Car[] }>()
);

export const getRecommendedCarDealsFail = createAction(
  carDealsActionTypes.GET_RECOMMENDED_CARS_FAIL,
  props<{ error: ErrorResponse }>()
);
