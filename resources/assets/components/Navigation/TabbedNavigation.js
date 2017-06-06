/* global window, document */

import PropTypes from 'prop-types';
import React from 'react';
import './tabbed-navigation.scss';

let tabbedNav = null;
let ticking = false;

const onScroll = () => {
  if (window.innerWidth <= 759) {
    return;
  }

  requestTick();
};

const requestTick = () => {
  if (!ticking) {
    window.requestAnimationFrame(updateClassList);
  }

  ticking = true;
};

const updateClassList = () => {
  ticking = false;

  const tabbedNavRect = tabbedNav.getBoundingClientRect();

  if (tabbedNavRect.top > 0) {
    tabbedNav.classList.remove('is-stuck');
  } else {
    tabbedNav.classList.add('is-stuck');
  }
};

class TabbedNavigation extends React.Component {
  componentDidMount() {

    tabbedNav = document.getElementById('tabbed-navigation');

    window.addEventListener('scroll', onScroll, false);
  }

  render() {
    return (
      <div id="tabbed-navigation" className="tabbed-navigation">
        <div className="wrapper">
          { this.props.children }
        </div>
      </div>
    );
  }
}

TabbedNavigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabbedNavigation;
