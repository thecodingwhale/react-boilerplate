import { createSelector } from 'reselect';

/**
 * Direct selector to the landingPage state domain
 */
const selectLandingPageDomain = () => (state) => state.get('landingPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LandingPage
 */

const selectLandingPage = () => createSelector(
  selectLandingPageDomain(),
  (substate) => substate.toJS()
);

export default selectLandingPage;
export {
  selectLandingPageDomain,
};
