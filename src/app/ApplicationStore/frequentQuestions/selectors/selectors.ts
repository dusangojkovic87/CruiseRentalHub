import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FrequentQuestionsStateInterface } from '../reducer/reducer';

export const selectFrequentQuestionsState =
  createFeatureSelector<FrequentQuestionsStateInterface>(
    'frequentQuestionsState'
  );

export const selectFrequentQuestions = createSelector(
  selectFrequentQuestionsState,
  (state) => state.questions
);
