/* global document */

import React from 'react';
import PropTypes from 'prop-types';
import './affiliateOption.scss';


const AffiliateOption = (props) => {
  const {
    optedOut,
    clickedOptOut,
    affiliateOptionLabel,
    moreInformationLabel,
    moreInformationMessage,
  } = props;

  const handleClick = (event) => {
    event.preventDefault();

    const details = document.querySelector('.footnote-details');

    details.classList.toggle('js-footnote-hidden');
  };

  return (
    <div className="form-wrapper affiliate-option">
      <label className="option -checkbox" htmlFor="affiliate_opt_in">
        <input type="checkbox" id="opt_in" name="affiliate_opt_in" value={optedOut} checked={! optedOut} className="form-checkbox" onClick={clickedOptOut} />
        <span className="option__indicator" />
        {affiliateOptionLabel}
      </label>
      <div className="footnote">
        <button onClick={handleClick}>{moreInformationLabel}</button>
        <div className="footnote-details js-footnote-hidden">{moreInformationMessage}</div>
      </div>
    </div>
  );
};

AffiliateOption.propTypes = {
  clickedOptOut: PropTypes.func.isRequired,
  optedOut: PropTypes.bool.isRequired,
  affiliateOptionLabel: PropTypes.string.isRequired,
  moreInformationLabel: PropTypes.string.isRequired,
  moreInformationMessage: PropTypes.string.isRequired,
};

export default AffiliateOption;
