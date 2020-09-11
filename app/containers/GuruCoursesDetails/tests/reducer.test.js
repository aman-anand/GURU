import { fromJS } from 'immutable';
import guruCoursesDetailsReducer from '../reducer';

describe('guruCoursesDetailsReducer', () => {
  it('returns the initial state', () => {
    expect(guruCoursesDetailsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
