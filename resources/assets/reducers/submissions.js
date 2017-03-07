import {
  STORE_REPORTBACK_PENDING,
  STORE_REPORTBACK_SUCESSFUL,
  ADD_TO_SUBMISSIONS_LIST
} from '../actions';

/**
 * Submissions reducer:
 */
const submissions = (state = {}, action) => {
  switch (action.type) {
    case STORE_REPORTBACK_PENDING:
      return Object.assign({}, state, {
        isStoring: true
      });

    case STORE_REPORTBACK_SUCESSFUL:
      return Object.assign({}, state, {
        isStoring: false
      });

    case ADD_TO_SUBMISSIONS_LIST:
      return Object.assign({}, state, {
        data: [
          ...state,
          action.reportback
        ]
      })

    default:
      return state;
  }
}

export default submissions;
