import { FrequentQuestion } from '../../../models/FrequentQuestion';
import { createReducer, on } from '@ngrx/store';
import {
  getFrequentQuestions,
  getFrequentQuestionsFail,
  getFrequentQuestionsSuccess,
} from '../actions/actions';

export interface FrequentQuestionsStateInterface {
  questions: FrequentQuestion[];
  errorMessage: string;
}

const frequentQuestionsInitialState: FrequentQuestionsStateInterface = {
  questions: [],
  errorMessage: '',
};

export const frequentQuestionsReducer = createReducer(
  frequentQuestionsInitialState,
  on(getFrequentQuestionsSuccess, (state, action) => ({
    ...state,
    questions: action.questions,
  })),
  on(getFrequentQuestionsFail, (state, action) => ({
    ...state,
    errorMessage: action.error.message,
  }))
);
