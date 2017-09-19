import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { CampaignContainer } from './Campaign';
import { initializeStore } from '../store';

const App = ({ store, history }) => {
  initializeStore(store);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/us/campaigns/:slug" component={CampaignContainer} />
      </ConnectedRouter>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
