import { FrequentlyAskQuestionsComponent } from './components/frequently-ask-questions/frequently-ask-questions.component';
import { WhyChoseUsComponent } from './components/why-chose-us/why-chose-us.component';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../Shared/components/header/header.component';
import { MainImagePanelComponent } from './components/main-image-panel/main-image-panel.component';
import { SearchFormComponent } from '../../Shared/components/search-form/search-form.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { MostPopularCarsComponent } from './components/most-popular-cars/most-popular-cars.component';
import { PopularCarTypesComponent } from './components/popular-car-types/popular-car-types.component';
import { FactsByNumbersComponent } from './components/facts-by-numbers/facts-by-numbers.component';
import { RecommendedCarRentalsComponent } from './components/recommended-car-rentals/recommended-car-rentals.component';
import { ReviewsSliderComponent } from './components/reviews-slider/reviews-slider.component';
import { PricingPackageComponent } from './components/pricing-package/pricing-package.component';
import { BottomBannerComponent } from './components/bottom-banner/bottom-banner.component';
import { FooterComponent } from '../../Shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MainImagePanelComponent,
    SearchFormComponent,
    HowItWorksComponent,
    MostPopularCarsComponent,
    PopularCarTypesComponent,
    FactsByNumbersComponent,
    RecommendedCarRentalsComponent,
    WhyChoseUsComponent,
    ReviewsSliderComponent,
    FrequentlyAskQuestionsComponent,
    PricingPackageComponent,
    BottomBannerComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
