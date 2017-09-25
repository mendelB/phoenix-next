import React from 'react';
import PropTypes from 'prop-types';

const AffiliateCredit = ({ title, link }) => {
  const affiliate = link ? <a href={link} target="blank">{title}</a> : title;

  return <span>{affiliate}</span>;
};

AffiliateCredit.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
};

AffiliateCredit.defaultProps = {
  link: null,
};

export default AffiliateCredit;
