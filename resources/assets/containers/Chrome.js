import React from 'react';
import FeedContainer from '../components/FeedContainer';
import Navigation from '../components/Navigation';
import { Link } from 'react-router';

const Chrome = (props) => (
  <div>
    <Navigation>
      <Link to="/" className="nav-link" activeClassName="is-active">Feed</Link>
      <Link to="/faq" className="nav-link" activeClassName="is-active">FAQ</Link>
    </Navigation>
    <FeedContainer>
      {props.children}
    </FeedContainer>
  </div>
);

export default Chrome;
