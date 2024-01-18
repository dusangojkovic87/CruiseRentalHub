import { createReducer, on } from '@ngrx/store';
import { Review } from '../../../models/Review';
import { getReviewsFail, getReviewsSuccess } from '../actions/actions';

export interface ReviewStateInterface {
  reviews: Review[];
  errorMessage: string;
}

const reviewState: ReviewStateInterface = {
  reviews: [],
  errorMessage: '',
};

export const reviewsReducer = createReducer(
  reviewState,
  on(getReviewsSuccess, (state, action) => ({
    ...state,
    reviews: action.reviews,
  })),
  on(getReviewsFail, (state, action) => ({
    ...state,
    errorMessage: action.errors.message,
  }))
);
