/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';

import Enclosure from '../../Enclosure';
import LedeBanner from '../../LedeBanner/LedeBanner';
import ColumnizedContent from '../../ColumnizedContent';

import './landing-page.scss';

const formatToMarkup = data => (
  data.map(item => (
    <div>
      <h3>{item.title}</h3>
      { item.content.map((paragraph, index) => (<p key={index}>{paragraph}</p>)) }
    </div>
  ))
);

const LandingPage = (props) => {
  const {
    affiliateSponsors, blurb, clickedSignUp, coverImage, endDate, isAffiliated,
    legacyCampaignId, pitchContent, subtitle, template, title,
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
        affiliateSponsors={affiliateSponsors}
      />

      <Enclosure className="default-container margin-top-lg margin-bottom-lg pitch-landing-page">
        <ColumnizedContent className="container__block -half" content={formatToMarkup(pitchContent)} />
      </Enclosure>

      <div className="info-bar -dark">
        <div className="wrapper">A DoSomething.org campaign. Join over 5.5 million members taking action. Any cause, anytime, anywhere.</div>
      </div>
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
  affiliateSponsors: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  legacyCampaignId: PropTypes.string.isRequired,
  pitchContent: PropTypes.arrayOf(PropTypes.object).isRequired,
  subtitle: PropTypes.string.isRequired,
  template: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

LandingPage.defaultProps = {
  endDate: null,
  isAffiliated: false,
};

export default LandingPage;
