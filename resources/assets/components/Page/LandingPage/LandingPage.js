import React from 'react';
import PropTypes from 'prop-types';

import LedeBanner from '../../LedeBanner/LedeBanner';

const LandingPage = (props) => {
  const {
    blurb, clickedSignUp, coverImage, endDate, isAffiliated,
    legacyCampaignId, subtitle, template, title,
  } = props;

  return (
    <div>
      <LedeBanner
        isAffiliated={isAffiliated}
        title={title}
        subtitle={subtitle}
        blurb={blurb}
        coverImage={coverImage}
        legacyCampaignId={legacyCampaignId}
        clickedSignUp={clickedSignUp}
        endDate={endDate}
        template={template}
      />
      <div>Landing page template output!</div>
    </div>
  );
};

LandingPage.propTypes = {
  blurb: PropTypes.string.isRequired,
  clickedSignUp: PropTypes.func.isRequired,
  coverImage: PropTypes.shape({
    description: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  endDate: PropTypes.shape({
    date: PropTypes.string,
    timezone: PropTypes.string,
    timezone_type: PropTypes.number,
  }),
  isAffiliated: PropTypes.bool,
  legacyCampaignId: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  template: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

LandingPage.defaultProps = {
  endDate: null,
  isAffiliated: false,
};

export default LandingPage;
