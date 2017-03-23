import { Phoenix } from '@dosomething/gateway';
import {
  SIGNUP_CREATED,
  SIGNUP_EXISTS,
  SIGNUP_FINISHED,
  SIGNUP_PENDING,
} from '../actions';

/**
 * Action Creators: these functions create actions, which describe changes
 * to the state tree (either as a result of application logic or user input).
 */

// Action: a new signup was created for a campaign.
export function signupCreated(campaignId) {
  return { type: SIGNUP_CREATED, campaignId };
}

// Action: an existing signup was found for a campaign.
export function signupExists(campaignId) {
  return { type: SIGNUP_EXISTS, campaignId };
}

// Action: a signup response was received.
export function signupFinished() {
  return { type: SIGNUP_FINISHED };
}

// Action: waiting on a signup response.
export function signupPending() {
  return { type: SIGNUP_PENDING };
}

// Async Action: check if user already signed up for the campaign
export function checkForSignup(campaignId) {
  return dispatch => {
    dispatch(signupPending());

    (new Phoenix).get(`activity/${campaignId}`).then(response => {
      if (!response || !response.sid) {
        return dispatch(signupFinished());
      }

      dispatch(signupExists(campaignId));
    });
  }
}

// Async Action: send signup to phoenix.
export function clickedSignUp(campaignId) {
  return dispatch => {
    dispatch(signupPending());

    return (new Phoenix).post('signups', { campaignId }).then(response => {
      if (!response || !response[0]) return;

      dispatch(signupCreated(campaignId));
    });
  }
}
