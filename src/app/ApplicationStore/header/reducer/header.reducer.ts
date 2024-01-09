import {
  closeNavbar,
  openNavbar,
  toggleNavbar,
} from './../actions/header.action';
import { createReducer, on } from '@ngrx/store';

export interface HeaderStateInterface {
  opennavbar: boolean;
}

const HeaderInitialState: HeaderStateInterface = {
  opennavbar: false,
};

export const headerReducer = createReducer(
  HeaderInitialState,
  on(openNavbar, (state: HeaderStateInterface, action) => ({
    ...state,
    opennavbar: true,
  })),
  on(closeNavbar, (state: HeaderStateInterface, action) => ({
    ...state,
    opennavbar: false,
  })),
  on(toggleNavbar, (state: HeaderStateInterface, action) => ({
    ...state,
    opennavbar: !openNavbar,
  }))
);
