import { Component, Input } from '@angular/core';
import { StarRatingModule } from 'angular-star-rating';
import { Review } from '../../../models/Review';

@Component({
  selector: 'app-review-item',
  standalone: true,
  imports: [StarRatingModule],
  templateUrl: './review-item.component.html',
  styleUrl: './review-item.component.scss',
})
export class ReviewItemComponent {
  @Input() review!: Review;
}
