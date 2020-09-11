import { fromJS } from 'immutable';
import shishyaHomeReducer from '../reducer';

describe('shishyaHomeReducer', () => {
  it('returns the initial state', () => {
    expect(shishyaHomeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
