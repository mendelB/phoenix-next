import PropTypes from 'prop-types';
import React from 'react';

import './campaignSignupArrow.scss';

const CampaignSignupArrow = ({ content }) => (
  <div className="message-callout -above -white -dynamic-right">
    <div className="message-callout__copy">
      <p>{content}</p>
    </div>
  </div>
);

CampaignSignupArrow.propTypes = {
  content: PropTypes.string.isRequired,
};

export default CampaignSignupArrow;
