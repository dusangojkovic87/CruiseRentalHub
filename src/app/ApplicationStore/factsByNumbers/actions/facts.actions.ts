import { createAction, props } from '@ngrx/store';
import { factsActionTypes } from '../actionTypes/factsActionTypes';
import { ErrorResponse } from '../../../models/Error/ErrorResponse';
import { FactStatus } from '../../../models/FactStatus';

export const getFactsStat = createAction(factsActionTypes.GET_FACTS_STATS);

export const getFactsStatFail = createAction(
  factsActionTypes.GET_FACTS_STATS_FAIL,
  props<{ err: ErrorResponse }>()
);

export const getFactsStatSuccess = createAction(
  factsActionTypes.GET_FACTS_STATS_SUCCESS,
  props<{ facts: FactStatus[] }>()
);
