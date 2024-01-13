import { createAction, props } from '@ngrx/store';
import { PopularCarsActionTypes } from '../actionTypes/action.types';
import { ErrorResponse } from '../../../models/Error/ErrorResponse';
import { Car } from '../../../models/Car';

export const getBmwCars = createAction(PopularCarsActionTypes.GET_BMW_CARS);

export const getBmwCarsFail = createAction(
  PopularCarsActionTypes.GET_BMW_CARS_FAIL,
  props<{ error: ErrorResponse }>()
);

export const getBmwCarsSuccess = createAction(
  PopularCarsActionTypes.GET_BMW_CARS_SUCCESS,
  props<{ cars: Car[] }>()
);

export const getAudiCars = createAction(PopularCarsActionTypes.GET_AUDI_CARS);

export const getAudiCarsSuccess = createAction(
  PopularCarsActionTypes.GET_AUDI_CARS_SUCCESS,
  props<{ cars: Car[] }>()
);

export const getAudiCarsFail = createAction(
  PopularCarsActionTypes.GET_AUDI_CARS_FAIL,
  props<{ error: ErrorResponse }>()
);

export const getVolkswagenCars = createAction(
  PopularCarsActionTypes.GET_VOLKSWAGEN_CARS
);
export const getVolkswagenCarsSuccess = createAction(
  PopularCarsActionTypes.GET_AUDI_CARS_SUCCESS,
  props<{ cars: Car[] }>()
);

export const getVolkswagenCarsFail = createAction(
  PopularCarsActionTypes.GET_VOLKSWAGEN_CARS_FAIL,
  props<{ err: ErrorResponse }>()
);

export const getTeslaCars = createAction(PopularCarsActionTypes.GET_TESLA_CARS);

export const getTeslaCarsSuccess = createAction(
  PopularCarsActionTypes.GET_AUDI_CARS_SUCCESS,
  props<{ cars: Car[] }>()
);
export const getTeslaCarsFail = createAction(
  PopularCarsActionTypes.GET_AUDI_CARS_FAIL,
  props<{ err: ErrorResponse }>()
);
