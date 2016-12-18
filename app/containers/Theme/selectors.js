import { createSelector } from 'reselect';

/**
 * Direct selector to the theme state domain
 */
const selectThemeDomain = () => (state) => state.get('theme');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Theme
 */

const selectTheme = () => createSelector(
  selectThemeDomain(),
  (substate) => substate.toJS('theme')
);

export default selectTheme;
export {
  selectThemeDomain,
};
