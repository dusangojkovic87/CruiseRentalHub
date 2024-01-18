import { Component, OnInit, inject } from '@angular/core';
import { DragScrollComponent, DragScrollItemDirective } from 'ngx-drag-scroll';
import { ReviewItemComponent } from '../../../../Shared/components/review-item/review-item.component';
import { Store } from '@ngrx/store';
import { State } from '../../../../ApplicationStore/appStore';
import { getReviews } from '../../../../ApplicationStore/reviewsSlider/actions/actions';
import { Observable } from 'rxjs';
import { Review } from '../../../../models/Review';
import { selectReviews } from '../../../../ApplicationStore/reviewsSlider/selectors/selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-reviews-slider',
  standalone: true,
  imports: [
    DragScrollComponent,
    DragScrollItemDirective,
    ReviewItemComponent,
    AsyncPipe,
  ],
  templateUrl: './reviews-slider.component.html',
  styleUrl: './reviews-slider.component.scss',
})
export class ReviewsSliderComponent implements OnInit {
  private store = inject(Store<State>);
  reviews: Observable<Review[]> = this.store.select(selectReviews);

  ngOnInit(): void {
    this.store.dispatch(getReviews());
  }
}
