import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Shared/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PopularCarsService } from './pages/home/services/popular-cars.service';
import { PopularCarsEffect } from './ApplicationStore/most-popular-cars/effects/popular-cars-effect';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [],
})
export class AppComponent {
  title = 'CruiseRentalHub';
}
