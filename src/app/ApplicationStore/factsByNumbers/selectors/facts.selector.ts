import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FactsStateInterface } from '../reducer/factsReducer';

export const selectFactsState =
  createFeatureSelector<FactsStateInterface>('factNumbersState');

export const selectFacts = createSelector(
  selectFactsState,
  (state) => state.facts
);
