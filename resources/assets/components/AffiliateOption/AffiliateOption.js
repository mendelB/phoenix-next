/* global document */

import React from 'react';
import PropTypes from 'prop-types';
import './affiliateOption.scss';


const AffiliateOption = (props) => {
  const { optedOut, clickedOptOut } = props;

  const handleClick = (event) => {
    event.preventDefault();
    console.log('clicking');
    const details = document.querySelector('.footnote-details');

    details.classList.toggle('js-footnote-hidden');
  };

  return (
    <div className="form-wrapper affiliate-option">
      <label className="option -checkbox" htmlFor="affiliate_opt_in">
        <input type="checkbox" id="opt_in" name="affiliate_opt_in" value={optedOut} className="form-checkbox" onClick={clickedOptOut} />
        <span className="option__indicator" />
        Also sign me up for messages from our partner
      </label>
      <div className="footnote">
        <button onClick={handleClick}>Affiliate Opt-in More Information Label</button>
        <div className="footnote-details js-footnote-hidden">
          Affiliate Opt-in More Information Message
        </div>
      </div>
    </div>
  );
};

AffiliateOption.propTypes = {
  clickedOptOut: PropTypes.func.isRequired,
  optedOut: PropTypes.bool.isRequired,
};

export default AffiliateOption;
