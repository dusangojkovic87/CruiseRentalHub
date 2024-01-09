import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeaderStateInterface } from '../reducer/header.reducer';

export const selectHeaderState =
  createFeatureSelector<HeaderStateInterface>('headerState');

export const selectOpenNavbar = createSelector(
  selectHeaderState,
  (state: HeaderStateInterface) => state.opennavbar
);
