import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FrequentQuestion } from '../../../models/FrequentQuestion';

@Injectable({
  providedIn: 'root',
})
export class FrequentQuestionsService {
  private http = inject(HttpClient);

  getFrequentQuestions(): Observable<FrequentQuestion[]> {
    return this.http.get<FrequentQuestion[]>(
      'http://localhost:4200/assets/fakeBackend/frequentQuestions/frequentQuestions.json'
    );
  }
}
