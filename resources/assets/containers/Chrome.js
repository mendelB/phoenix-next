import React from 'react';
import FeedContainer from '../components/FeedContainer';
import Navigation from '../components/Navigation';
import { Link } from 'react-router';

const Chrome = (props) => (
  <div>
    <FeedContainer>
      {props.children}
    </FeedContainer>
  </div>
);

export default Chrome;
