import { Component } from '@angular/core';
import { HeaderComponent } from '../../Shared/components/header/header.component';
import { MainImagePanelComponent } from './components/main-image-panel/main-image-panel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MainImagePanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
