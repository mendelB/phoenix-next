import React from 'react';
import PropTypes from 'prop-types';

const AffiliateCredit = ({ title, link }) => (
  <span>
    In partnership with&nbsp;
    { link ? <a href={link}>{title}</a> : title }
  </span>
);

AffiliateCredit.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
};

AffiliateCredit.defaultProps = {
  link: null,
};

export default AffiliateCredit;
