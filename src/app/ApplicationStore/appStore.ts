import {
  CarDealsStateInterface,
  carDealsReducer,
} from './recommended-car-deals/reducer/carDealsReducer';
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
import {
  FactsStateInterface,
  factsReducer,
} from './factsByNumbers/reducer/factsReducer';

export interface State {
  headerState: HeaderStateInterface;
  popularCarsState: PopularCarsStateInterface;
  carTypesState: PopularCarTypesInterface;
  factNumbersState: FactsStateInterface;
  carDealsState: CarDealsStateInterface;
}

export const reducers: ActionReducerMap<State> = {
  headerState: headerReducer,
  popularCarsState: popularCarsReducer,
  carTypesState: carTypesReducer,
  factNumbersState: factsReducer,
  carDealsState: carDealsReducer,
};
