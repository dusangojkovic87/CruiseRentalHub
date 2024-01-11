import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { PopularCarsListComponent } from './pages/home/components/popular-cars-list/popular-cars-list.component';

export const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
    children: [{ component: PopularCarsListComponent, path: 'popular/:model' }],
  },
  { component: HomeComponent, path: 'home' },
  { component: AccountComponent, path: 'account' },
];
