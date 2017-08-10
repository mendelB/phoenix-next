import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './card.scss';

const renderHeader = title => (
  <header className="card__title">
    <h1>{title}</h1>
  </header>
);

const Card = ({ children, className = '', title = null }) => (
  <article className={classnames('card', className)}>
    { title ? renderHeader(title) : null }

    { children }
  </article>
);

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

Card.defaultProps = {
  className: null,
};

export default Card;
