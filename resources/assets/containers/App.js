import React from 'react';
import { Provider } from 'react-redux';
import * as reducers from '../reducers/index'
import configureStore from '../store';

import { Router, Route, useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Chrome from './Chrome';
import Activity from './Activity';
import ExamplePage from './ExamplePage';
import NotFound from './NotFound';

const store = configureStore({...reducers, routing: routerReducer}, window.STATE);
const history = syncHistoryWithStore(useRouterHistory(createBrowserHistory)({
  basename: '/campaigns/teens-for-jeans', // @TODO: Hardcoded.
}), store);

const App = (props) => (
  <Provider store={store}>
    <Router history={history}>
      <Route component={Chrome}>
        <Route path="/" component={Activity}/>
        <Route path="faq" component={ExamplePage}/>
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>
);


export default App;
