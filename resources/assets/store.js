import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import merge from 'lodash/merge';
import { observerMiddleware } from './analytics';

  const initialReactionState = {};
  //TODO: When we do infinite scrolling we're going to need a way of updating this
  preloadedState.reportbacks.data.forEach((reportback) => {
    reportback.reportback_items.data.forEach((item) => {
      const currentUser = item.kudos.data[0] ? item.kudos.data[0].current_user : false;
      const userReaction = currentUser ? currentUser.reacted : false;
      const reacted = preloadedState.user.id !== null ? userReaction : false;

      initialReactionState[item.id] = {
        reacted,
        total: item.kudos.data[0] ? item.kudos.data[0].term.total : 0,
        id: currentUser ? currentUser.kudos_id : null,
        termId: item.kudos.data[0] ? item.kudos.data[0].term.id : '1274', // This is a hardcoded default because phoenix-ashes is bugged.
      };
    });
  });
const initialState = {
  blocks: {
    offset: 1,
  },
  campaign: {
    activityFeed: [],
  },
  reactions: {
    data: {},
  },
  reportbacks: {
    isFetching: false,
    page: 1,
    data: [],
  },
  submissions: {
    isFetching: false,
    isStoring: false,
    data: [],
  },
  signups: {
    data: (localStorage.getItem('signups') || '').split(','),
    thisCampaign: false,
    thisSession: false,
    pending: false,
  },
  user: {
    id: null,
  },
};

export default function(reducers, preloadedState = {}) {
  const middleware = [thunk, observerMiddleware];

  // Log actions to the console in development & track state changes.
  if (process.env.NODE_ENV !== 'production') {
    const createLogger = require(`redux-logger`);
    middleware.push(createLogger({collapsed: true}));
  }

  // If React DevTools are available, use instrumented compose function.
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    combineReducers(reducers),
    merge(initialState, preloadedState),
    composeEnhancers(applyMiddleware(...middleware))
  );
};
