import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { CampaignPageContainer, LandingPageContainer } from './Page';

import { initializeStore } from '../store';

const App = ({ store, history }) => {
  initializeStore(store);

  const isAffiliated = store.getState().signups.thisCampaign;
  const useLandingPage = store.getState().campaign.landingPage !== null;

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          { (! isAffiliated && useLandingPage) ?
            <Route path="/us/campaigns/:slug" component={LandingPageContainer} />
            :
            <Route path="/us/campaigns/:slug" component={CampaignPageContainer} />
          }
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
