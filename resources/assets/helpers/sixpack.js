/* global services */

import client from 'sixpack-client';
import experiments from '../experiments_v2.json';

export const session = new client.Session({
  base_url: services.SIXPACK_BASE_URL,
  cookie_name: services.SIXPACK_COOKIE_PREFIX,
});

export function sixpack() {
  return session;
}

/**
 * Participate current client to specified experiment.
 *
 * @param  {String} name
 * @return {Promise}
 */
export function participate(name) {
  return new Promise(function (resolve, reject) {
    const alternatives = Object.values(experiments[name].alternatives);

    session.participate(name, alternatives, (error, response) => {
      if (error) {
        reject(error);
      }

      resolve(response.alternative.name);
    });
  });
};

/**
 * Convert current client on specified experiment.
 *
 * @param  {String} name
 * @return {Promise}
 */
export function convert(name) {
  return new Promise(function (resolve, reject) {
    session.convert(name, (error, response) => {
      if (error) {
        reject(error);
      }

      resolve(response);
    });
  });
}
