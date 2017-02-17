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
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import ActionFeed from './containers/ActionFeed';

ready(() => {
  const appContainer = document.getElementById('app');
  const loggerMiddleware = createLogger();
  const preloadedState = window.STATE || {};

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(loggerMiddleware)
    )
  );

  if (appContainer) {
    ReactDom.render(<Provider store={store}><ActionFeed /></Provider>, appContainer);
  }
});

