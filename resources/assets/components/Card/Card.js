import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './card.scss';

const renderHeader = title => (
  <header className="card__title">
    <h1>{title}</h1>
  </header>
);

const Card = ({ classNames = '', title = null, children }) => (
  <article className={classnames('card', classNames)}>
    { title ? renderHeader(title) : null }

    { children }
  </article>
);

Card.propTypes = {
  children: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  title: PropTypes.string,
};

Card.defaultProps = {
  classNames: null,
};

export default Card;
