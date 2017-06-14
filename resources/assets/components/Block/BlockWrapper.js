import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './block-wrapper.scss';

const BlockTitle = (props) => {
  return <h4 className="block-wrapper__title">{props.title}</h4>;
};

BlockTitle.propTypes = {
  title: PropTypes.string,
};

BlockTitle.defaultProps = {
  title: null,
};

const BlockWrapper = props => (
  <div className={classNames('block-wrapper', props.className)}>
    { props.title ? <BlockTitle title={props.title} /> : null }
    {props.children}
  </div>
);

BlockWrapper.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

BlockWrapper.defaultProps = {
  className: null,
  title: null,
  id: null,
};

export default BlockWrapper;
