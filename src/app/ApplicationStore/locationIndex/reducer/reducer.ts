import { createReducer, on } from '@ngrx/store';
import {
  getAllLocationsFail,
  getAllLocationsSuccess,
} from '../actions/actions';
import { ILocation } from '../../../models/Location';

export interface ILocationIndexState {
  locations: ILocation[];
  errorMessage: string;
}

const initState: ILocationIndexState = {
  locations: [],
  errorMessage: '',
};

export const locationIndexReducer = createReducer(
  initState,
  on(getAllLocationsSuccess, (state, action) => ({
    ...state,
    locations: action.locations,
  })),
  on(getAllLocationsFail, (state, action) => ({
    ...state,
    errorMessage: action.error.message,
  }))
);
