import { Observable } from 'rxjs';
import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { DragScrollComponent, DragScrollItemDirective } from 'ngx-drag-scroll';
import { State } from '../../../../ApplicationStore/appStore';
import { CarType } from '../../../../models/CarType';
import { selectCarTypes } from '../../../../ApplicationStore/popular-car-types/selectors/carTypesSelector';
import { AsyncPipe } from '@angular/common';
import { getCarTypesData } from '../../../../ApplicationStore/popular-car-types/actions/carTypesActions';

@Component({
  selector: 'app-popular-car-types',
  standalone: true,
  imports: [DragScrollComponent, DragScrollItemDirective, AsyncPipe],
  templateUrl: './popular-car-types.component.html',
  styleUrl: './popular-car-types.component.scss',
})
export class PopularCarTypesComponent implements OnInit {
  carTypes: Observable<CarType[]> = this.store.select(selectCarTypes);
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(getCarTypesData());
    this.store.select(selectCarTypes).subscribe((data) => {
      console.log(data);
    });
  }
}
