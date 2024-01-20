import { Store } from '@ngrx/store';
import { SwitchButtonComponent } from './../../../../utils/switch-button/switch-button.component';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { State } from '../../../../ApplicationStore/appStore';
import {
  getMonthlyPricingPlan,
  getYearlyPricingPlan,
} from '../../../../ApplicationStore/pricing-package/actions/actions';
import { Subscription } from 'rxjs';
import { PricingPlan } from '../../../../models/PricingPlan';
import { selectPricingPlan } from '../../../../ApplicationStore/pricing-package/selectors/selector';

@Component({
  selector: 'app-pricing-package',
  standalone: true,
  imports: [SwitchButtonComponent],
  templateUrl: './pricing-package.component.html',
  styleUrl: './pricing-package.component.scss',
})
export class PricingPackageComponent implements OnInit, OnDestroy {
  private store = inject(Store<State>);
  pricingPlan!: PricingPlan;
  planSub!: Subscription;
  @ViewChildren('planType') planTypes!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.planSub = this.store
      .select(selectPricingPlan)
      .subscribe((plan: PricingPlan) => {
        this.pricingPlan = plan;
      });
  }

  changePlanText(planText: string) {
    if (this.planTypes)
      this.planTypes.forEach((child: ElementRef) => {
        const plan = child.nativeElement as HTMLElement;
        plan.innerText = planText;
      });
  }

  changePricingPlan(event: boolean) {
    //based on switch value chose plan
    if (event) {
      this.store.dispatch(getYearlyPricingPlan());
      this.changePlanText('yearly');
    } else {
      this.store.dispatch(getMonthlyPricingPlan());
      this.changePlanText('monthly');
    }
  }

  ngOnDestroy(): void {
    if (this.planSub) {
      this.planSub.unsubscribe();
    }
  }
}
