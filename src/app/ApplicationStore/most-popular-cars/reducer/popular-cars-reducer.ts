import { createReducer, on } from '@ngrx/store';
import {
  getAudiCarsFail,
  getAudiCarsSuccess,
  getBmwCarsFail,
  getBmwCarsSuccess,
  getTeslaCarsFail,
  getTeslaCarsSuccess,
  getVolkswagenCars,
  getVolkswagenCarsFail,
  getVolkswagenCarsSuccess,
} from '../actions/popularCars.actions';
import { Car } from '../../../models/Car';

export interface PopularCarsStateInterface {
  cars: Car[];
  errorMessage: string;
}

const PopularCarsState: PopularCarsStateInterface = {
  cars: [],
  errorMessage: '',
};

export const popularCarsReducer = createReducer(
  PopularCarsState,
  on(getBmwCarsSuccess, (state: PopularCarsStateInterface, action) => ({
    ...state,
    cars: action.cars,
  })),
  on(getBmwCarsFail, (state: PopularCarsStateInterface, action) => ({
    ...state,
    errorMessage: action.error.message,
  })),
  on(getAudiCarsSuccess, (state: PopularCarsStateInterface, action) => ({
    ...state,
    cars: action.cars,
  })),
  on(getAudiCarsFail, (state: PopularCarsStateInterface, action) => ({
    ...state,
    errorMessage: action.error.message,
  })),
  on(getVolkswagenCarsSuccess, (state: PopularCarsStateInterface, action) => ({
    ...state,
    cars: action.cars,
  })),
  on(getVolkswagenCarsFail, (state: PopularCarsStateInterface, action) => ({
    ...state,
    errorMessage: action.err.message,
  })),
  on(getTeslaCarsSuccess, (state: PopularCarsStateInterface, action) => ({
    ...state,
    cars: action.cars,
  })),
  on(getTeslaCarsFail, (state: PopularCarsStateInterface, action) => ({
    ...state,
    errorMessage: action.err.message,
  }))
);
