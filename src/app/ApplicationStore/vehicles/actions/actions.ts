import { createAction, props } from '@ngrx/store';
import { vehicleActionTypes } from '../actionTypes/actionTypes';
import { Car } from '../../../models/Car';
import { ErrorResponse } from '../../../models/Error/ErrorResponse';

export const getAllVehicles = createAction(vehicleActionTypes.GET_ALL_VEHICLES);

export const getAllVehiclesSuccess = createAction(
  vehicleActionTypes.GET_ALL_VEHICLES_SUCCESS,
  props<{ vehicles: Car[] }>()
);

export const getAllVehiclesFail = createAction(
  vehicleActionTypes.GET_ALL_VEHICLES_FAIL,
  props<{ error: ErrorResponse }>()
);

export const filterVehiclesByDest = createAction(
  vehicleActionTypes.FILTER_VEHICLES_BY_DESTINATION,
  props<{ destination: string }>()
);

export const filterVehiclesByDestSuccess = createAction(
  vehicleActionTypes.FILTER_VEHICLES_BY_DESTINATION_SUCCESS,
  props<{ vehicles: Car[] }>()
);

export const filterVehiclesByDestFail = createAction(
  vehicleActionTypes.FILTER_VEHICLES_BY_DESTINATION_FAIL,
  props<{ err: ErrorResponse }>()
);

export const filterVehiclesByDestReset = createAction(
  vehicleActionTypes.FILTER_VEHICLES_BY_DESTINATION_RESET
);
