import { createReducer, on } from '@ngrx/store';
import {
  getBmwCarsFail,
  getBmwCarsSuccess,
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
  }))
);
