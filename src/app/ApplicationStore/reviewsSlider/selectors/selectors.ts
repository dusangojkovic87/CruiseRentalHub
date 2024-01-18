import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReviewStateInterface } from '../reducer/reducer';

export const selectReviewState =
  createFeatureSelector<ReviewStateInterface>('reviewState');

export const selectReviews = createSelector(
  selectReviewState,
  (state) => state.reviews
);
