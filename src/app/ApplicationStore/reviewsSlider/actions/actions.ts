import { createAction, props } from '@ngrx/store';
import { reviewsActionTypes } from '../actionTypes/actionTypes';
import { Review } from '../../../models/Review';
import { ErrorResponse } from '../../../models/Error/ErrorResponse';

export const getReviews = createAction(reviewsActionTypes.GET_REVIEWS);
export const getReviewsSuccess = createAction(
  reviewsActionTypes.GET_REVIEWS_SUCCESS,
  props<{ reviews: Review[] }>()
);

export const getReviewsFail = createAction(
  reviewsActionTypes.GET_REVIEWS_FAIL,
  props<{ errors: ErrorResponse }>()
);
