import {
  getFactsStat,
  getFactsStatFail,
  getFactsStatSuccess,
} from './../actions/facts.actions';
import { createReducer, on } from '@ngrx/store';
import { FactStatus } from '../../../models/FactStatus';

export interface FactsStateInterface {
  facts: FactStatus[];
  errorMessage: string;
}

const factsInitialState: FactsStateInterface = {
  facts: [],
  errorMessage: '',
};

export const factsReducer = createReducer(
  factsInitialState,
  on(getFactsStatSuccess, (state: FactsStateInterface, action) => ({
    ...state,
    facts: action.facts,
    errorMessage: '',
  })),
  on(getFactsStatFail, (state: FactsStateInterface, action) => ({
    ...state,
    errorMessage: action.err.message,
  }))
);
