import { createAction } from '@ngrx/store';
import { HeaderActionTypes } from '../actionTypes/header.actionTypes';

export const openNavbar = createAction(HeaderActionTypes.OPEN_NAVBAR);
export const closeNavbar = createAction(HeaderActionTypes.CLOSE_NAVBAR);
export const toggleNavbar = createAction(HeaderActionTypes.TOGGLE_NAVBAR);
