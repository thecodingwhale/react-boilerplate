/*
 *
 * Theme actions
 *
 */

import {
  DEFAULT_ACTION,
  DARK_THEME,
  LIGHT_THEME,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function darkTheme() {
  return {
    type: DARK_THEME,
    theme: 'dark',
  };
}

export function lightTheme() {
  return {
    type: LIGHT_THEME,
    theme: 'light',
  };
}
