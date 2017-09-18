import React from 'react';
import PropTypes from 'prop-types';

const AffiliateLink = props => (
  <span>
    In partnership with&nbsp;
    <a href={props.link}>
      {props.title}
    </a>
  </span>
);

AffiliateLink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AffiliateLink;
