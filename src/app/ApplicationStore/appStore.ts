import { ActionReducerMap } from '@ngrx/store';
import {
  HeaderStateInterface,
  headerReducer,
} from './header/reducer/header.reducer';
import {
  PopularCarsStateInterface,
  popularCarsReducer,
} from './most-popular-cars/reducer/popular-cars-reducer';

export interface State {
  headerState: HeaderStateInterface;
  popularCarsState: PopularCarsStateInterface;
}

export const reducers: ActionReducerMap<State> = {
  headerState: headerReducer,
  popularCarsState: popularCarsReducer,
};
