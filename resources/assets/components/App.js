import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { initializeStore } from '../store';

import { paths } from '../helpers/navigation';
import ChromeContainer from '../containers/ChromeContainer';
import Experience from '../components/Experience';
import FeedContainer from '../containers/FeedContainer';
import ActionPageContainer from '../containers/ActionPageContainer';
import { BlockContainer } from './Block';
import ContentPageContainer from '../containers/ContentPageContainer';
import PitchContainer from '../containers/PitchContainer';
import ExperimentContainer from '../containers/ExperimentContainer';
import NotFound from './NotFound';

const wrap = (Container, Component) => props => (
  <Container><Component {...props} /></Container>
);

const experience = component => wrap(Experience, component);
const chrome = component => wrap(ChromeContainer, component);

const App = ({ store, history }) => {
  initializeStore(store);

  const PitchTest = (props) => {
    const Control = () => (
      <ChromeContainer>
        <FeedContainer {...props} />
      </ChromeContainer>
    );

    const Test = () => (
      <div>
        <Experience>
          <PitchContainer />
        </Experience>
        <ChromeContainer>
          <FeedContainer {...props} />
        </ChromeContainer>
      </div>
    );


    return (
      <ExperimentContainer name="pitch_page_connected">
        <Control alternative="default" experiment="pitch_page_connected" />
        <Test alternative="pitch" experiment="pitch_page_connected" />
      </ExperimentContainer>
    );
  };

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          {/* Base user experience */}
          <Route path={paths.community} exact component={PitchTest} />
          <Route path={paths.action} component={chrome(ActionPageContainer)} />
          <Route path={`${paths.pages}:page`} component={chrome(ContentPageContainer)} />
          <Route path={`${paths.blocks}:id`} component={chrome(BlockContainer)} />
          {/* * */}

          {/* Custom user experiences */}
          <Route path={paths.background} component={experience(PitchContainer)} />
          {/* * */}

          <Route component={chrome(NotFound)} />
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
