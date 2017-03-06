import { STORED_REPORTBACK_SUBMISSION } from '../actions';

/**
 * Submissions reducer:
 */
const submissions = (state = {}, action) => {
  switch (action.type) {
    case STORED_REPORTBACK_SUBMISSION:
      return state;

    default:
      return state;
  }
}

export default submissions;
