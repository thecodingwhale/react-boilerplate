import expect from 'expect';
import landingPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('landingPageReducer', () => {
  it('returns the initial state', () => {
    expect(landingPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
