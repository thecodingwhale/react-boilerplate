import expect from 'expect';
import themeReducer from '../reducer';
import { fromJS } from 'immutable';

describe('themeReducer', () => {
  it('returns the initial state', () => {
    expect(themeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
