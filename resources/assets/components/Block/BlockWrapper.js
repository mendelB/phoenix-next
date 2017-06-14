import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './block-wrapper.scss';

const BlockTitle = (props) => {
  const title = props.id ? <Link to={`/blocks/${props.id}`}>{props.title}</Link> : props.title;

  return <h4 className="block-wrapper__title">{title}</h4>;
};

BlockTitle.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};

BlockTitle.defaultProps = {
  title: null,
  id: null,
};

const BlockWrapper = props => (
  <div className={classNames('block-wrapper', props.className)}>
    { props.title ? <BlockTitle title={props.title} id={props.id} /> : null }
    {props.children}
  </div>
);

BlockWrapper.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

BlockWrapper.defaultProps = {
  className: null,
  title: null,
  id: null,
};

export default BlockWrapper;
