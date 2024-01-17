import {
  getRecommendedCarDealsFail,
  getRecommendedCarDealsSuccess,
} from './../actions/recommended-car-deals.action';
import { createReducer, on } from '@ngrx/store';
import { Car } from '../../../models/Car';

export interface CarDealsStateInterface {
  cars: Car[];
  errorMessage: string;
}

const CarDealsInitialState: CarDealsStateInterface = {
  cars: [],
  errorMessage: '',
};

export const carDealsReducer = createReducer(
  CarDealsInitialState,
  on(getRecommendedCarDealsSuccess, (state, action) => ({
    ...state,
    cars: action.cars,
  })),
  on(getRecommendedCarDealsFail, (state, action) => ({
    ...state,
    errorMessage: action.error.message,
  }))
);
