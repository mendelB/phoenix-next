import { REQUESTED_REPORTBACKS, RECEIVED_REPORTBACKS } from '../actions/reportbackActions';

/**
 * Reportback reducer:
 */
const reportbacks = (state = {}, action) => {
  switch (action.type) {
    case REQUESTED_REPORTBACKS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVED_REPORTBACKS:
      return Object.assign({}, state, {
        isFetching: false,
        data: state.data.concat(action.data),
      });

    default:
      return state;
  }
}

export default reportbacks;
