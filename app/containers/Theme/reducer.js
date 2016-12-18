/*
 *
 * Theme reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  DARK_THEME,
  LIGHT_THEME,
} from './constants';

const initialState = fromJS({
  theme: {
    type: 'dark',
  },
});

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case DARK_THEME:
      return state
        .setIn(['theme', 'type'], action.theme);
    case LIGHT_THEME:
      return state
        .setIn(['theme', 'type'], action.theme);
    default:
      return state;
  }
}

export default themeReducer;
