import { Component } from '@angular/core';
import { HeaderComponent } from '../../Shared/components/header/header.component';
import { MainImagePanelComponent } from './components/main-image-panel/main-image-panel.component';
import { BookingFormComponent } from '../../Shared/components/booking-form/booking-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MainImagePanelComponent, BookingFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}