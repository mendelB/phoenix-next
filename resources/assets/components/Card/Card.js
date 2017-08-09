import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './card.scss';

const renderHeader = title => (
  <header className="card__title">
    <h1>{title}</h1>
  </header>
);

const Card = ({ children, classNames = '', title = null }) => (
  <article className={classnames('card', classNames)}>
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
  classNames: PropTypes.string,
  title: PropTypes.string,
};

Card.defaultProps = {
  classNames: null,
};

export default Card;
