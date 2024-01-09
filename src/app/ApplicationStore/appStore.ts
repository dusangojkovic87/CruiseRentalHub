import { ActionReducerMap } from '@ngrx/store';
import {
  HeaderStateInterface,
  headerReducer,
} from './header/reducer/header.reducer';

export interface State {
  headerState: HeaderStateInterface;
}

export const reducers: ActionReducerMap<State> = {
  headerState: headerReducer,
};
