import React from 'react';
import PropTypes from 'prop-types';

const AffiliateCredit = props => (
  <span>
    In partnership with&nbsp;
    <a href={props.link}>
      {props.title}
    </a>
  </span>
);

AffiliateCredit.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AffiliateCredit;
