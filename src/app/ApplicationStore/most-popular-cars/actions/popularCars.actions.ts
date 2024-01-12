import { createAction, props } from '@ngrx/store';
import { PopularCarsActionTypes } from '../actionTypes/action.types';
import { PopularCarItem } from '../../../models/most-popular-cars/popularCarItem';
import { ErrorResponse } from '../../../models/Error/ErrorResponse';

export const getBmwCars = createAction(PopularCarsActionTypes.GET_BMW_CARS);

export const getBmwCarsFail = createAction(
  PopularCarsActionTypes.GET_BMW_CARS_FAIL,
  props<{ error: ErrorResponse }>()
);

export const getBmwCarsSuccess = createAction(
  PopularCarsActionTypes.GET_BMW_CARS_SUCCESS,
  props<{ cars: PopularCarItem[] }>()
);
