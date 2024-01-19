import { FrequentQuestion } from './../../../models/FrequentQuestion';
import { createAction, props } from '@ngrx/store';
import { frequentQuestionsActionTypes } from '../actionTypes/actionTypes';
import { ErrorResponse } from '../../../models/Error/ErrorResponse';

export const getFrequentQuestions = createAction(
  frequentQuestionsActionTypes.GET_FREQUENT_QUESTIONS
);
export const getFrequentQuestionsSuccess = createAction(
  frequentQuestionsActionTypes.GET_FREQUENT_QUESTIONS_SUCCESS,
  props<{ questions: FrequentQuestion[] }>()
);
export const getFrequentQuestionsFail = createAction(
  frequentQuestionsActionTypes.GET_FREQUENT_QUESTIONS_FAIL,
  props<{ error: ErrorResponse }>()
);
