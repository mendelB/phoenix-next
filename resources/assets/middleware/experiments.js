import { get } from 'lodash';
import {
  PARTICIPATE_IN_EXPERIMENT,
  addToStore,
} from '../actions';
import experiments from '../experiments_v2.json';

/**
 * Confirm whether a specified condition passes for executing an experiment.
 *
 * @param  {String} condition
 * @param  {Object} state
 * @return {Boolean}
 */
function assertConditionPasses(condition, state) {
  if (condition === 'unaffiliated') {
    return ! state.signups.thisCampaign;
  }

  // @TODO: Add additional conditions. Maybe break this function out into other file.
  return false;
}

const experimentsMiddleware = ({ getState, dispatch }) => next => (action) => {
  const state = getState();

  if (action.type === PARTICIPATE_IN_EXPERIMENT) {
    // Are there any conditions that need to pass for current experiment to execute?
    const condition = get(experiments[action.name], 'meta.condition', null);

    if (condition && ! assertConditionPasses(condition, state)) {
      return;
    }

    if (! Object.prototype.hasOwnProperty.call(state.experiments, action.name)) {
      dispatch(addToStore(action.name));
    }
  }

  return next(action); // eslint-disable-line consistent-return
};

export default experimentsMiddleware;
