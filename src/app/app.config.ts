import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { reducers } from './ApplicationStore/appStore';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { StarRatingModule } from 'angular-star-rating';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(reducers),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    importProvidersFrom(StarRatingModule.forRoot()),
  ],
};
