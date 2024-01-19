import { Component, OnInit, inject } from '@angular/core';
import { QuestionAccordionComponent } from '../../../../Shared/components/question-accordion/question-accordion.component';
import { Store } from '@ngrx/store';
import { State } from '../../../../ApplicationStore/appStore';
import { getFrequentQuestions } from '../../../../ApplicationStore/frequentQuestions/actions/actions';
import { Observable } from 'rxjs';
import { FrequentQuestion } from '../../../../models/FrequentQuestion';
import { selectFrequentQuestions } from '../../../../ApplicationStore/frequentQuestions/selectors/selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-frequently-ask-questions',
  standalone: true,
  imports: [QuestionAccordionComponent, AsyncPipe],
  templateUrl: './frequently-ask-questions.component.html',
  styleUrl: './frequently-ask-questions.component.scss',
})
export class FrequentlyAskQuestionsComponent implements OnInit {
  private store = inject(Store<State>);
  questions$: Observable<FrequentQuestion[]> = this.store.select(
    selectFrequentQuestions
  );

  ngOnInit(): void {
    this.store.dispatch(getFrequentQuestions());
  }
}
