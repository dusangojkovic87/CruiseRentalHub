import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PopularCarsStateInterface } from '../reducer/popular-cars-reducer';

export const selectPopularCarsState =
  createFeatureSelector<PopularCarsStateInterface>('popularCarsState');

export const selectPopularCars = createSelector(
  selectPopularCarsState,
  (state: PopularCarsStateInterface) => state.cars
);
