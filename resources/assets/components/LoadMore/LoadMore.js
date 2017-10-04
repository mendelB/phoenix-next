import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '../Button/Button';

const LoadMore = ({
  onClick,
  buttonClassName = null,
  className = null,
  isLoading = false,
  text = 'Load More',
}) => (
  <div className={classnames('loader', className)}>
    <Button
      className={classnames(buttonClassName, { 'is-loading': isLoading })}
      onClick={onClick}
      text={text}
    />
  </div>
);

LoadMore.propTypes = {
  buttonClassName: PropTypes.string,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

LoadMore.defaultProps = {
  buttonClassName: '-secondary',
  className: null,
  isLoading: false,
  text: 'Load More',
};

export default LoadMore;