import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IVehiclesState } from '../reducer/reducer';

export const selectVehicleState =
  createFeatureSelector<IVehiclesState>('vehiclesState');

export const selectCarsByDest = createSelector(
  selectVehicleState,
  (state) => state.filteredCarsByDest
);
