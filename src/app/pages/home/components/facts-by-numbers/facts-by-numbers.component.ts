import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../../ApplicationStore/appStore';
import { Observable } from 'rxjs';
import { FactStatus } from '../../../../models/FactStatus';
import { selectFacts } from '../../../../ApplicationStore/factsByNumbers/selectors/facts.selector';
import { AsyncPipe } from '@angular/common';
import { getFactsStat } from '../../../../ApplicationStore/factsByNumbers/actions/facts.actions';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-facts-by-numbers',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './facts-by-numbers.component.html',
  styleUrl: './facts-by-numbers.component.scss',
})
export class FactsByNumbersComponent implements OnInit {
  private store = inject(Store<State>);
  anState: string = 'closed';

  facts: Observable<FactStatus[]> = this.store.select(selectFacts);

  ngOnInit(): void {
    this.store.dispatch(getFactsStat());
  }
}
