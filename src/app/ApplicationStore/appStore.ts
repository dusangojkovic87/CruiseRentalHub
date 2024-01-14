import { ActionReducerMap } from '@ngrx/store';
import {
  HeaderStateInterface,
  headerReducer,
} from './header/reducer/header.reducer';
import {
  PopularCarsStateInterface,
  popularCarsReducer,
} from './most-popular-cars/reducer/popular-cars-reducer';
import {
  PopularCarTypesInterface,
  carTypesReducer,
} from './popular-car-types/reducer/carTypesReducer';

export interface State {
  headerState: HeaderStateInterface;
  popularCarsState: PopularCarsStateInterface;
  carTypesState: PopularCarTypesInterface;
}

export const reducers: ActionReducerMap<State> = {
  headerState: headerReducer,
  popularCarsState: popularCarsReducer,
  carTypesState: carTypesReducer,
};
