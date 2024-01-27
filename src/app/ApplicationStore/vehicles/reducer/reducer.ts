import { createReducer, on } from '@ngrx/store';
import { Car } from '../../../models/Car';
import {
  filterVehiclesByDest,
  filterVehiclesByDestFail,
  filterVehiclesByDestReset,
  filterVehiclesByDestSuccess,
  getAllVehiclesSuccess,
} from '../actions/actions';
import { getAllLocationsFail } from '../../locationIndex/actions/actions';

export interface IVehiclesState {
  cars: Car[];
  errorMessage: string;
  filteredCarsByDest: Car[];
}

const initState: IVehiclesState = {
  cars: [],
  errorMessage: '',
  filteredCarsByDest: [],
};

export const vehicleReducer = createReducer(
  initState,
  on(getAllVehiclesSuccess, (state, action) => ({
    ...state,
    cars: action.vehicles,
  })),
  on(getAllLocationsFail, (state, action) => ({
    ...state,
    errorMessage: action.error.message,
  })),
  on(filterVehiclesByDestSuccess, (state, action) => ({
    ...state,
    filteredCarsByDest: action.vehicles,
  })),
  on(filterVehiclesByDestFail, (state, action) => ({
    ...state,
    errorMessage: action.err.message,
  })),
  on(filterVehiclesByDestReset, (state, action) => ({
    ...state,
    filteredCarsByDest: [],
  }))
);
