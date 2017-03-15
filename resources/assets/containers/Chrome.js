import React from 'react';
import FeedEnclosure from '../components/FeedEnclosure';
import NavigationContainer from './NavigationContainer';

const Chrome = (props) => (
  <div>
    <NavigationContainer />
    <FeedEnclosure>
      {props.children}
    </FeedEnclosure>
  </div>
);

export default Chrome;
