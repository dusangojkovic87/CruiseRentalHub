import { createAction, props } from '@ngrx/store';
import { locationIndexActionTypes } from '../actionTypes/actionTypes';
import { Location } from '../../../models/Location';
import { ErrorResponse } from '../../../models/Error/ErrorResponse';

export const getAllLocations = createAction(
  locationIndexActionTypes.GET_LOCATIONS
);

export const getAllLocationsSuccess = createAction(
  locationIndexActionTypes.GET_LOCATIONS_SUCCESS,
  props<{ locations: Location[] }>()
);

export const getAllLocationsFail = createAction(
  locationIndexActionTypes.GET_ALL_LOCATIONS_FAIL,
  props<{ error: ErrorResponse }>()
);
