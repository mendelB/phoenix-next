/* global services */

import client from 'sixpack-client';
import experiments from '../experiments_v2.json';

// export session new sixpack.Session({
//   base_url: services.SIXPACK_BASE_URL,
//   cookie_name: services.SIXPACK_COOKIE_PREFIX,
// });

export const session = new client.Session({
  base_url: services.SIXPACK_BASE_URL,
  cookie_name: services.SIXPACK_COOKIE_PREFIX,
});

export function sixpack() {
  return session;
}

export function participate(name) {
  // console.log(session);

  // const alternatives = Object.values(experiments[name].alternatives);

  // console.log(name);
  // console.log(alternatives);

  // session.participate('test-exp', ['alt-one', 'alt-two'], (error, response) => {
  //   if (error) {
  //     throw error;
  //   }

  //   console.log(response);
  // });

  return name;
}
