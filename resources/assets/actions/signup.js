import { Phoenix } from '@dosomething/gateway';
import {
  SET_CURRENTLY_SIGNED_UP,
  SIGNUP_PENDING,
  SIGNUP_COMPLETE
} from '../actions';

/**
 * Action Creators: these functions create actions, which describe changes
 * to the state tree (either as a result of application logic or user input).
 */

// Action: set whether the user is signed up for this campaign
export function setCurrentlySignedUp(status) {
  return { type: SET_CURRENTLY_SIGNED_UP, status };
}

export function signupPending() {
  return { type: SIGNUP_PENDING };
}

// Action: set whether the signup completed
export function signupComplete(campaignId) {
  return { type: SIGNUP_COMPLETE, campaignId };
}

// Async Action: check if user already signed up for the campaign
export function checkForSignup(campaignId) {
  return dispatch => (new Phoenix).get(`activity/${campaignId}`)
    .then(response => {
      if (!response || !response.sid) return;

      dispatch(signupComplete(campaignId));
      dispatch(setCurrentlySignedUp(true));
    });
}

// Async Action: send signup to phoenix.
export function clickedSignUp(campaignId) {
  return dispatch => {
    dispatch(signupPending());

    return (new Phoenix).post('signups', {
      campaignId,
    })
    .then(response => {
      if (!response || !response[0]) return;

      dispatch(signupComplete(campaignId));
      dispatch(setCurrentlySignedUp(true));
    });
  }
}
