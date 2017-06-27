
import { fromJS } from 'immutable';
import breakoutReducer from '../reducer';

describe('breakoutReducer', () => {
  it('returns the initial state', () => {
    expect(breakoutReducer(undefined, {})).toEqual(fromJS({}));
  });
});
