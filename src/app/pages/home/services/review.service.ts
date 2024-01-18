import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../../../models/Review';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private http = inject(HttpClient);

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(
      'http://localhost:4200/assets/fakeBackend/reviewSlider/reviews.json'
    );
  }
}
