import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CarDealsStateInterface } from '../reducer/carDealsReducer';

export const selectCarDealsState =
  createFeatureSelector<CarDealsStateInterface>('carDealsState');

export const selectRecommendedCars = createSelector(
  selectCarDealsState,
  (state) => state.cars
);
