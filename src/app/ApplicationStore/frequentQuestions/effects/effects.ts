import {
  getFrequentQuestions,
  getFrequentQuestionsFail,
  getFrequentQuestionsSuccess,
} from './../actions/actions';
import { inject } from '@angular/core';
import { FrequentQuestionsService } from '../../../pages/home/services/frequent-questions.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

export class FrequentQuestionsEffect {
  private frequentQuestionService = inject(FrequentQuestionsService);
  private actions$ = inject(Actions);

  getFrequentQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFrequentQuestions),
      switchMap(() => {
        return this.frequentQuestionService.getFrequentQuestions();
      }),
      map((questions) => {
        return getFrequentQuestionsSuccess({ questions: questions });
      }),
      catchError((err) => {
        return of(getFrequentQuestionsFail({ error: err }));
      })
    )
  );
}
