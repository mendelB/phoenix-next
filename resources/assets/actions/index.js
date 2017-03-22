/*
 * Action names: import these constants to dispatch an event
 * without having hardcoded strings all about.
 *
 * Action Creators: these functions, exported from their respective action files,
 * create actions, which describe changes to the state tree (either as a result
 * of application logic or user input).
 */

// Reportback Action Names & Creators
export const REQUESTED_REPORTBACKS = 'REQUESTED_REPORTBACKS';
export const RECEIVED_REPORTBACKS = 'RECEIVED_REPORTBACKS';
export const STORE_REPORTBACK_PENDING = 'STORE_REPORTBACK_PENDING';
export const STORE_REPORTBACK_FAILED = 'STORE_REPORTBACK_FAILED';
export const STORE_REPORTBACK_SUCCESSFUL = 'STORE_REPORTBACK_SUCCESSFUL';
export const ADD_TO_SUBMISSIONS_LIST = 'ADD_TO_SUBMISSIONS_LIST';
export * from './reportback';

// Feed Action Names & Creators
export const CLICKED_VIEW_MORE = 'CLICKED_VIEW_MORE';
export * from './feed';

// Reaction Action Names & Creators
export const REACTION_CHANGED = 'REACTION_CHANGED';
export const REACTION_COMPLETE = 'REACTION_COMPLETE';
export * from './reaction';

// Signup Action Names & Creators
export const SIGNUP_COMPLETE = 'SIGNUP_COMPLETE';
export const SIGNUP_PENDING = 'SIGNUP_PENDING';
export const SET_CURRENTLY_SIGNED_UP = 'SET_CURRENTLY_SIGNED_UP';
export * from './signup';
