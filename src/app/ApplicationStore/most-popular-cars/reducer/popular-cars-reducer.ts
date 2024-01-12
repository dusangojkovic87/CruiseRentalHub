import { createReducer, on } from '@ngrx/store';
import { PopularCarItem } from '../../../models/most-popular-cars/popularCarItem';
import {
  getBmwCarsFail,
  getBmwCarsSuccess,
} from '../actions/popularCars.actions';

export interface PopularCarsStateInterface {
  cars: PopularCarItem[];
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
