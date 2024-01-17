import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { reducers } from './ApplicationStore/appStore';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { StarRatingModule } from 'angular-star-rating';
import { PopularCarsEffect } from './ApplicationStore/most-popular-cars/effects/popular-cars-effect';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { CarTypesEffect } from './ApplicationStore/popular-car-types/effects/carTypes.effect';
import { FactsStatusEffect } from './ApplicationStore/factsByNumbers/effects/facts.effect';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommonModule } from '@angular/common';
import { CarDealsEffect } from './ApplicationStore/recommended-car-deals/effects/carDealsEffect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(reducers),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideEffects([
      PopularCarsEffect,
      CarTypesEffect,
      FactsStatusEffect,
      CarDealsEffect,
    ]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    importProvidersFrom([StarRatingModule.forRoot()]),
  ],
};
