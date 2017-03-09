import React from 'react';
import FeedContainer from '../components/FeedContainer';
import NavigationContainer from './NavigationContainer';

const Chrome = (props) => (
  <div>
    <NavigationContainer />
    <FeedContainer>
      {props.children}
    </FeedContainer>
  </div>
);

export default Chrome;
