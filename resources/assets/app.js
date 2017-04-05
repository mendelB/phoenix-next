/*
 |--------------------------------------------------------------------------
 | Phoenix Next
 |--------------------------------------------------------------------------
 |
 | This is the main entry point for the client-side experience on Phoenix
 | Next. It's compiled using Webpack, and then loaded in the site chrome.
 |
 */

import React from 'react';
import ReactDom from 'react-dom';
import { ready } from './helpers';
import { configureStore } from './store';
import * as reducers from './reducers'
import { useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import observe from './middleware/analytics';

// WHATWG Fetch Polyfill
import 'whatwg-fetch';

// Style Components
import './scss/chrome.scss';
import './scss/construction.scss';
import './scss/container.scss';
import './scss/header.scss';

// Containers
import App from './components/App';
import BannerSignup from './components/BannerSignup';

// Navigation
import { init as navigationInit } from './helpers/navigation';

// Make action available to demonstrate loading more reportbacks.
// @TODO: Expose this in the UI!
import { fetchReportbacks } from './actions';

// Set the application "base name" to /campaigns/:slug so all pages are relative to that.
const basename = window.location.pathname.split('/').slice(0, 3).join('/');

const store = configureStore({...reducers, routing: routerReducer}, window.STATE);
const routerHistory = useRouterHistory(createBrowserHistory);
const history = syncHistoryWithStore(routerHistory({basename}), store);

observe(history, store);

ready(() => {
  const appContainer = document.getElementById('app');
  const signupContainer = document.getElementById('banner-signup');

  if (appContainer) {
    ReactDom.render(<App store={store} history={history} />, appContainer);
  }

  if (signupContainer) {
    ReactDom.render(<BannerSignup store={store} />, signupContainer);
  }

  navigationInit();
});
