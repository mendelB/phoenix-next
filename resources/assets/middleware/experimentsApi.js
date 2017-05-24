import {
  PARTICIPATE_IN_EXPERIMENT,
  CONVERT_EXPERIMENT,
  updateStore,
} from '../actions';
import { participate, convert } from '../helpers/sixpack';

const experimentsApiMiddleware = ({ dispatch }) => next => action => {
  if (action.type === PARTICIPATE_IN_EXPERIMENT) {
    // @TODO: this is getting called twice?
    // Need to look into the control flow with calling dispatch in middleware...
    participate(action.name).then((alternative) => {
      dispatch(updateStore(action.name, alternative));
    });
  }

  if (action.type === CONVERT_EXPERIMENT) {
    convert(action.name).then((response) => {
      // @TODO: maybe call an action to signify conversion on experiment?
    });
  }

  next(action);
};

export default experimentsApiMiddleware;
