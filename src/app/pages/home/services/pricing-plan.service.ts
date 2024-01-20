import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PricingPlan } from '../../../models/PricingPlan';

@Injectable({
  providedIn: 'root',
})
export class PricingPlanService {
  private http = inject(HttpClient);

  getMonthlyPricingPlan(): Observable<PricingPlan> {
    return this.http.get<PricingPlan>(
      'http://localhost:4200/assets/fakeBackend/pricing-package/monthly.json'
    );
  }

  getYearlyPricingPlan(): Observable<PricingPlan> {
    return this.http.get<PricingPlan>(
      'http://localhost:4200/assets/fakeBackend/pricing-package/yearly.json'
    );
  }
}
