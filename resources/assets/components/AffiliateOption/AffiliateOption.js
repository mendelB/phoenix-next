import React from 'react';
import PropTypes from 'prop-types';

const AffiliateOption = (props) => {
  const { optedOut, clickedOptOut } = props;

  const handleClick = (event) => {
    event.preventDefault();
    console.log('clicking');
  };

  return (
    <div className="form-wrapper">
      <label className="option -checkbox" htmlFor="opt_in">
        <input type="checkbox" id="opt_in" name="affiliate_messaging_opt_in" value={optedOut} className="form-checkbox" onClick={clickedOptOut} />
        <span className="option__indicator" />
        Also sign me up for messages from our partner
      </label>
      <div className="footnote">
        <button className="button -tertiary" onClick={handleClick}>Affiliate Opt-in More Information Label</button>
        <div className="js-footnote-hidden">
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
