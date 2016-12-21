/*
 *
 * Modal actions
 *
 */

import {
  DEFAULT_ACTION,
  SHOW_MODAL,
  HIDE_MODAL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function showModal() {
  return {
    type: SHOW_MODAL
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  }
}