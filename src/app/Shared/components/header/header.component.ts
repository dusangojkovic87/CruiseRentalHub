import { Observable } from 'rxjs';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../../ApplicationStore/appStore';
import {
  closeNavbar,
  openNavbar,
} from '../../../ApplicationStore/header/actions/header.action';
import { selectOpenNavbar } from '../../../ApplicationStore/header/selectors/header.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private store: Store<State> = inject(Store);
  readonly isNavbarOpen$: Observable<boolean> =
    this.store.select(selectOpenNavbar);
  constructor() {}

  openNavbar() {
    this.store.dispatch(openNavbar());
  }

  closeNavbar() {
    this.store.dispatch(closeNavbar());
  }
}
