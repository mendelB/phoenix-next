import { get } from 'lodash';
import {
  PARTICIPATE_IN_EXPERIMENT,
  addToStore,
  updateStore,
} from '../actions';
import experiments from '../experiments_v2.json';

const experimentsMiddleware = ({ getState, dispatch }) => next => action => {
  const state = getState();

  if (action.type === PARTICIPATE_IN_EXPERIMENT) {
    // Are there any conditions to pass for current experiment?
    const condition = get(experiments[action.name], 'meta.condition', null);
    const conditionPassed = get(action, 'conditionPassed', false);

    if (condition && ! conditionPassed) {
      dispatch({ ...action, condition });
    }

    if (! state.experiments.hasOwnProperty(action.name)) {
      dispatch(addToStore(action.name));
    }
  }

  next(action);
};

export default experimentsMiddleware;
