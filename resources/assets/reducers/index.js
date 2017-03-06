import { combineReducers } from 'redux';
import campaign from './campaign';
import reportbacks from './reportbacks';
import submissions from './submissions';

const rootReducer = combineReducers({
  campaign,
  reportbacks,
  submissions
});

export default rootReducer;
