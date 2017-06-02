import PropTypes from 'prop-types';
import React from 'react';
import './tabbed-navigation.scss';

const TabbedNavigation = ({ children }) => (
  <div className="tabbed-navigation">
    { children }
  </div>
);

TabbedNavigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabbedNavigation;
