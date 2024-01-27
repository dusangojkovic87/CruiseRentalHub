import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { PopularCarsListComponent } from './pages/home/components/popular-cars-list/popular-cars-list.component';
import { SignUpComponent } from './pages/account/components/sign-up/sign-up.component';
import { SignInComponent } from './pages/account/components/sign-in/sign-in.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocationDetailsComponent } from './pages/locations/components/location-details/location-details.component';
import { DestinationDetailsComponent } from './pages/locations/components/destination-details/destination-details.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';

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
  { component: VehiclesComponent, path: 'vehicles' },
  { component: SignUpComponent, path: 'account/signUp' },
  { component: SignInComponent, path: 'account/signIn' },
  { component: LocationsComponent, path: 'locations' },
  { component: LocationDetailsComponent, path: 'location/details/:id' },
  { component: DestinationDetailsComponent, path: 'location/destinations/:id' },
];
