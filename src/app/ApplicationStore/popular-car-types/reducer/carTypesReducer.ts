import { createReducer, on } from '@ngrx/store';
import { CarType } from '../../../models/CarType';
import {
  getCarTypesDataSuccess,
  getCarTypesFail,
} from '../actions/carTypesActions';

export interface PopularCarTypesInterface {
  carTypes: CarType[];
  errorMessage: string;
}

const PopularCatTypesState: PopularCarTypesInterface = {
  carTypes: [],
  errorMessage: '',
};

export const carTypesReducer = createReducer(
  PopularCatTypesState,
  on(getCarTypesDataSuccess, (state: PopularCarTypesInterface, action) => ({
    ...state,
    carTypes: action.carTypes,
  })),
  on(getCarTypesFail, (state: PopularCarTypesInterface, action) => ({
    ...state,
    errorMessage: action.err.message,
  }))
);
