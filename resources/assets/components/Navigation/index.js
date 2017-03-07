import React from 'react';
import './navigation.scss';

const Navigation = ({children}) => (
  <div className="feed-container">
    <div className="wrapper">
      { children }
    </div>
  </div>
);

export default Navigation;
