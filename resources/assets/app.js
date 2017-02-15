/*
 |--------------------------------------------------------------------------
 | Phoenix Next
 |--------------------------------------------------------------------------
 |
 | This is the main entry point for the client-side experience on Phoenix
 | Next. It's compiled using Webpack, and then loaded in the site chrome.
 |
 */

// Components
import './components/block.scss';
import './components/construction.scss';
import './components/container.scss';
import './components/cta.scss';
import './components/flex.scss';
import './components/header.scss';
import './components/placeholder.scss';


import { RestApiClient } from '@dosomething/gateway';

const Phoenix = new RestApiClient;

// Phoenix.get('api/v1/reportbacks', {status: 'promoted'})
//   .then((response) => {
//     console.log(response);
//     // response.data.forEach((data) => {
//     //   console.log(data);
//     // });
//   });

// Phoenix.get('api/v1/reportbacks/10')
//   .then((response) => {
//     console.log(response);
//   });

// Phoenix.get('api/v1/signups', {campaigns: '362'})
//   .then((response) => {
//     console.log(response);
//   });

// Phoenix.get('api/v1/signups/4269')
//   .then((response) => {
//     console.log(response);
//   });

Phoenix.post('api/v1/signups', {
  user_id: '1705389',
  campaign_id: '1436',
  source: 'phoenix-next'
})
  .then((response) => {
    console.log(response);
  });
