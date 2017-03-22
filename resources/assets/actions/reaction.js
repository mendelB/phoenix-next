import { Phoenix } from '@dosomething/gateway';
import {
  REACTION_CHANGED,
  REACTION_COMPLETE
} from '../actions';

/**
 * Action Creators: these functions create actions, which describe changes
 * to the state tree (either as a result of application logic or user input).
 */

// Action: toggled a reaction
export function reactionChanged(reportbackItemId, value) {
  return { type: REACTION_CHANGED, reportbackItemId, value };
}

// Action: component got a reaction response back.
export function reactionComplete(reportbackItemId, reactionId) {
  return {
    type: REACTION_COMPLETE,
    reportbackItemId,
    reactionId,
  }
}

// Async Action: user reacted to a photo.
export function toggleReactionOn(reportbackItemId, termId) {
  return dispatch => {
    dispatch(reactionChanged(reportbackItemId, true));

    (new Phoenix).post('reactions', {
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

// Async Action: user un-reacted to a photo.
export function toggleReactionOff(reportbackItemId, reactionId) {
  return dispatch => {
    dispatch(reactionChanged(reportbackItemId, false));

    (new Phoenix).delete(`reactions/${reactionId}`);
  }
}
