import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { PopularCarsListComponent } from './pages/home/components/popular-cars-list/popular-cars-list.component';
import { PopularCarsEffect } from './ApplicationStore/most-popular-cars/effects/popular-cars-effect';
import { provideEffects } from '@ngrx/effects';

export const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'popular/bmw',
        pathMatch: 'full',
      },
      { component: PopularCarsListComponent, path: 'popular/:model' },
    ],
  },
  { component: HomeComponent, path: 'home' },
  { component: AccountComponent, path: 'account' },
];
