import { fromJS } from 'immutable';
import guruCoursesReducer from '../reducer';

describe('guruCoursesReducer', () => {
  it('returns the initial state', () => {
    expect(guruCoursesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
