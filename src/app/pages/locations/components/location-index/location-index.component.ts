import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../../ApplicationStore/appStore';
import { getAllLocations } from '../../../../ApplicationStore/locationIndex/actions/actions';
import { AsyncPipe } from '@angular/common';
import { selectLocations } from '../../../../ApplicationStore/locationIndex/selectors/selectors';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ILocation } from '../../../../models/Location';

@Component({
  selector: 'app-location-index',
  standalone: true,
  imports: [AsyncPipe, RouterModule, NgxPaginationModule],
  templateUrl: './location-index.component.html',
  styleUrl: './location-index.component.scss',
})
export class LocationIndexComponent implements OnInit {
  private store = inject(Store<State>);
  locations: ILocation[] = [];
  p: number = 1;

  ngOnInit(): void {
    this.store.dispatch(getAllLocations());
    this.store.select(selectLocations).subscribe((data) => {
      this.locations = data;
    });
  }
}
