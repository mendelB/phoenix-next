import { combineReducers } from 'redux';
import { LOAD_MORE_REPORTBACKS, loadMoreReportbacks } from './actions';

const campaign = (state = {}, action) => {
  return state;
};

const reportbacks = (state = {}, action) => {
  switch (action.type) {
    case LOAD_MORE_REPORTBACKS:
      return state;

    default:
      return state;
  }
};

const rootReducer = combineReducers({campaign, reportbacks});

export default rootReducer;
