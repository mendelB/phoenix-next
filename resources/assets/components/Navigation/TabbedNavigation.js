/* global window, document */

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { MEDIA_MEDIUM_SIZE_MIN } from '../../constants/media-sizes';
import './tabbed-navigation.scss';

class TabbedNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.tabbedNav = null;
    this.ticking = false;

    this.updateClassList = this.updateClassList.bind(this);
    this.requestTick = this.requestTick.bind(this);
    this.onScroll = this.onScroll.bind(this);

    this.state = {
      isStuck: false,
    };
  }

  componentDidMount() {
    this.tabbedNav = document.getElementById('tabbed-navigation');

    window.addEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if (window.innerWidth <= MEDIA_MEDIUM_SIZE_MIN) {
      return;
    }

    this.requestTick();
  }

  requestTick() {
    if (! this.ticking) {
      window.requestAnimationFrame(this.updateClassList);
    }

    this.ticking = true;
  }

  updateClassList() {
    this.ticking = false;

    const tabbedNavRect = this.tabbedNav.getBoundingClientRect();

    this.setState({ isStuck: tabbedNavRect.top <= 0 });
  }

  render() {
    return (
      <div id="tabbed-navigation" className={classnames('tabbed-navigation', { 'is-stuck': this.state.isStuck })}>
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
