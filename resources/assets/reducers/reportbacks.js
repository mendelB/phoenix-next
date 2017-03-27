import { REQUESTED_REPORTBACKS, RECEIVED_REPORTBACKS } from '../actions';
import merge from 'lodash/merge';

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
        page: action.page + 1,
        ids: state.ids.concat(Object.keys(action.reportbacks)),
        entities: merge(state.entities, action.reportbacks),
        itemEntities: merge(state.itemEntities, action.reportbackItems),
      });

    default:
      return state;
  }
}

export default reportbacks;
