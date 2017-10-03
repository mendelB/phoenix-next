import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '../Button/Button';

const LoadMore = ({
  onClick,
  buttonClassName = null,
  className = null,
  text = 'Load More',
}) => (
  <div className={classnames('loader', className)}>
    <Button className={classnames(buttonClassName)} onClick={onClick} text={text} />
  </div>
);

LoadMore.propTypes = {
  buttonClassName: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
};

LoadMore.defaultProps = {
  buttonClassName: '-secondary',
  className: null,
  text: 'Load More',
};

export default LoadMore;
