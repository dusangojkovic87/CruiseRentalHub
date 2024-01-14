import { createAction, props } from '@ngrx/store';
import { carTypesActionTypes } from '../actionTypes/carTypesActions';
import { CarType } from '../../../models/CarType';
import { ErrorResponse } from '../../../models/Error/ErrorResponse';

export const getCarTypesData = createAction(
  carTypesActionTypes.GET_CAR_TYPES_DATA
);
export const getCarTypesDataSuccess = createAction(
  carTypesActionTypes.GET_CAR_TYPES_SUCCESS,
  props<{ carTypes: CarType[] }>()
);

export const getCarTypesFail = createAction(
  carTypesActionTypes.GET_CAR_TYPES_DATA_FAIL,
  props<{ err: ErrorResponse }>()
);
