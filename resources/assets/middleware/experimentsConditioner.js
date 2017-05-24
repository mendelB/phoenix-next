const experimentsConditionerMiddleware = ({ getState }) => next => action => {
  const state = getState();

  if (action.condition === 'unaffiliated') {
    if (! state.signups.thisCampaign) {
      action.conditionPassed = true;
    } else {
      // Suppress action if user is affiliated.
      return;
    }
  }

  next(action);
};

export default experimentsConditionerMiddleware;
