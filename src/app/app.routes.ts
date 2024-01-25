import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { PopularCarsListComponent } from './pages/home/components/popular-cars-list/popular-cars-list.component';
import { SignUpComponent } from './pages/account/components/sign-up/sign-up.component';
import { SignInComponent } from './pages/account/components/sign-in/sign-in.component';

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
  { component: SignUpComponent, path: 'account/signUp' },
  { component: SignInComponent, path: 'account/signIn' },
];
