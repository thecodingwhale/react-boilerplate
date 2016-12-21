/*
 *
 * Modal reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SHOW_MODAL,
  HIDE_MODAL,
} from './constants';

const initialState = fromJS({
  modal: {
    show: false
  }
});

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SHOW_MODAL:
      return state
        .setIn(['modal', 'show'], true);
    case HIDE_MODAL:
      return state
        .setIn(['modal', 'show'], false);
    default:
      return state;
  }
}

export default modalReducer;
