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
import {
  ReviewStateInterface,
  reviewsReducer,
} from './reviewsSlider/reducer/reducer';
import {
  FrequentQuestionsStateInterface,
  frequentQuestionsReducer,
} from './frequentQuestions/reducer/reducer';
import {
  IPricingPlanState,
  pricingPlanReducer,
} from './pricing-package/reducer/reducer';
import {
  ILocationIndexState,
  locationIndexReducer,
} from './locationIndex/reducer/reducer';
import { IVehiclesState, vehicleReducer } from './vehicles/reducer/reducer';

export interface State {
  headerState: HeaderStateInterface;
  popularCarsState: PopularCarsStateInterface;
  carTypesState: PopularCarTypesInterface;
  factNumbersState: FactsStateInterface;
  carDealsState: CarDealsStateInterface;
  reviewState: ReviewStateInterface;
  frequentQuestionsState: FrequentQuestionsStateInterface;
  pricingPlanState: IPricingPlanState;
  locationIndexState: ILocationIndexState;
  vehiclesState: IVehiclesState;
}

export const reducers: ActionReducerMap<State> = {
  headerState: headerReducer,
  popularCarsState: popularCarsReducer,
  carTypesState: carTypesReducer,
  factNumbersState: factsReducer,
  carDealsState: carDealsReducer,
  reviewState: reviewsReducer,
  frequentQuestionsState: frequentQuestionsReducer,
  pricingPlanState: pricingPlanReducer,
  locationIndexState: locationIndexReducer,
  vehiclesState: vehicleReducer,
};
