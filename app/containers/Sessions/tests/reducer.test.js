import { fromJS } from 'immutable';
import sessionsReducer from '../reducer';

describe('sessionsReducer', () => {
  it('returns the initial state', () => {
    expect(sessionsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
