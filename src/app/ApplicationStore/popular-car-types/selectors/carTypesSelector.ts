import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PopularCarTypesInterface } from '../reducer/carTypesReducer';

export const selectCarTypesState =
  createFeatureSelector<PopularCarTypesInterface>('carTypesState');

export const selectCarTypes = createSelector(
  selectCarTypesState,
  (state: PopularCarTypesInterface) => state.carTypes
);
