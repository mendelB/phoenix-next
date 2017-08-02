import PropTypes from 'prop-types';
import React from 'react';

import './card.scss';

const renderHeader = (header) => (
  <header className="card__header">
    <h1>{header}</h1>
  </header>
);

const Card = ({ header = null, children = 'hallo there' }) => (
  <article className="card">
    { header ? renderHeader(header) : null }

    { children }
  </article>
);

export default Card;
