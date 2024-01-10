import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';

export const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: HomeComponent, path: 'home' },
  { component: AccountComponent, path: 'account' },
];
