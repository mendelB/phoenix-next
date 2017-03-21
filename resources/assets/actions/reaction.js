import { Phoenix } from '@dosomething/gateway';
import {
  USER_TOGGLED_REACTION,
  REACTION_COMPLETE
} from '../actions';

/**
 * Action Creators: these functions create actions, which describe changes
 * to the state tree (either as a result of application logic or user input).
 */

// Action: toggled a reaction
export function userToggledReaction(reportbackItemId, value) {
  return { type: USER_TOGGLED_REACTION, reportbackItemId, value };
}

// Action: component got a reaction response back.
export function reactionComplete(reportbackItemId, reactionId) {
  return {
    type: REACTION_COMPLETE,
    reportbackItemId,
    reactionId,
  }
}

// Async Action: user liked a reportback
export function userToggledReactionOn(reportbackItemId, termId) {
  return dispatch => {
    dispatch(userToggledReaction(reportbackItemId, true));

    return (new Phoenix).post('reactions', {
      reportback_item_id: reportbackItemId,
      term_id: termId,
    })
    .then(json => {
      if (json && json[0] && json[0].created) {
        dispatch(reactionComplete(reportbackItemId, json[0].kid));
      }
    });
  }
}

// Async Action: user unliked a reportback
export function userToggledReactionOff(reportbackItemId, reactionId) {
  return dispatch => {
    dispatch(userToggledReaction(reportbackItemId, false));

    return (new Phoenix).delete(`reactions/${reactionId}`);
  }
}
