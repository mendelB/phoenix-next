import createHistory from 'history/createBrowserHistory';

let history = null;

/**
 * Get the history object for this app
 * @return {History}
 */
export function get() {
  return history;
}

/**
 *  Initialize the history.
 *
 * @return {History}
 */
export function init() {
  history = createHistory();

  return history;
}
