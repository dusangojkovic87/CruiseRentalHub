import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILocationIndexState } from '../reducer/reducer';

export const selectLocationIndexState =
  createFeatureSelector<ILocationIndexState>('locationIndexState');

export const selectLocations = createSelector(
  selectLocationIndexState,
  (state) => state.locations
);
