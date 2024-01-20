import { SwitchButtonComponent } from './../../../../utils/switch-button/switch-button.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-package',
  standalone: true,
  imports: [SwitchButtonComponent],
  templateUrl: './pricing-package.component.html',
  styleUrl: './pricing-package.component.scss',
})
export class PricingPackageComponent {
  changePricingPlan(event: boolean) {
    console.log('plan', event);
  }
}
