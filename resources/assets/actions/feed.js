import { CLICKED_VIEW_MORE } from '../actions';

/**
 * Action Creators: these functions create actions, which describe changes
 * to the state tree (either as a result of application logic or user input).
 */

// Action: user asked for more blocks.
export function clickedViewMore() {
  return { type: CLICKED_VIEW_MORE };
}
