import React from 'react';
import PropTypes from 'prop-types';

const AffiliateOption = (props) => {
  const { optedOut, clickedOptOut } = props;

  return (<div className="messaging-opt-in form-wrapper" id="messaging-opt-in">
    <label className="option -checkbox" htmlFor="edit-affiliate-messaging-opt-in">
      <input type="checkbox" id="edit-affiliate-messaging-opt-in" name="affiliate_messaging_opt_in" value={optedOut} className="form-checkbox" onClick={clickedOptOut} />
      <span className="option__indicator" />
      Also sign me up for messages from our partner
    </label>
    <div className="opt-in-info footnote">
      <p className="info-toggle js-footnote-toggle">
        <a href="/">Affiliate Opt-in More Information Label</a>
      </p>
      <div className="info-message js-footnote-hidden" style={{ display: 'block' }}>
        Affiliate Opt-in More Information Message
      </div>
    </div>
  </div>);
};

AffiliateOption.propTypes = {
  clickedOptOut: PropTypes.func.isRequired,
  optedOut: PropTypes.bool.isRequired,
};

export default AffiliateOption;
