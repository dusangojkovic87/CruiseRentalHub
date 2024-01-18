import { Injectable, inject } from '@angular/core';
import { ReviewService } from '../../../pages/home/services/review.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getReviews,
  getReviewsFail,
  getReviewsSuccess,
} from '../actions/actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { Review } from '../../../models/Review';

@Injectable()
export class ReviewsEffect {
  private reviewsServise = inject(ReviewService);
  private actions$ = inject(Actions);

  getReviews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getReviews),
      switchMap(() => {
        return this.reviewsServise.getReviews();
      }),
      map((reviews: Review[]) => {
        return getReviewsSuccess({ reviews: reviews });
      }),
      catchError((err) => {
        return of(getReviewsFail({ errors: err }));
      })
    )
  );
}
