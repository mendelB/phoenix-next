/*
 |--------------------------------------------------------------------------
 | Phoenix Next
 |--------------------------------------------------------------------------
 |
 | This is the main entry point for the client-side experience on Phoenix
 | Next. It's compiled using Webpack, and then loaded in the site chrome.
 |
 */

import { ready } from './helpers';

// Components
import './components/construction.scss';
import './components/container.scss';
import './components/header.scss';

import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import ActionFeed from './containers/ActionFeed';

ready(() => {
  const appContainer = document.getElementById('app');
  const preloadedState = window.STATE || {};

  // Log actions to the console in development.
  const middleware = [thunk];
  if (process.env.NODE_ENV === `development`) {
    const createLogger = require(`redux-logger`);
    middleware.push(createLogger());
  }

  // If React DevTools are available, use instrumented compose function.
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );

  if (appContainer) {
    ReactDom.render(<Provider store={store}><ActionFeed /></Provider>, appContainer);
  }
});

