import {
  SIGNUP_CREATED,
  SIGNUP_EXISTS,
  SIGNUP_PENDING,
  SIGNUP_FINISHED,
} from '../actions';

/**
 * Signup reducer:
 */
const signupReducer = (state = {}, action) => {
  const signups = state.data;

  switch (action.type) {
    case SIGNUP_CREATED:
      signups.push(action.campaignId);
      localStorage.setItem('signups', signups);

      return {
        ...state,
        data: signups,
        isPending: false,
        thisSession: true,
      };

    case SIGNUP_EXISTS:
      signups.push(action.campaignId);
      localStorage.setItem('signups', signups);

      return {
        ...state,
        data: signups,
        isPending: false
      };

    case SIGNUP_PENDING:
      return { ...state, isPending: true };

    case SIGNUP_FINISHED:
      return { ...state, isPending: false };

    default:
      return state;
  }
};

export default signupReducer;
