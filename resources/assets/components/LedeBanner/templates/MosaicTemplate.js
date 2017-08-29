import React from 'react';
import PropTypes from 'prop-types';

import Markdown from '../../Markdown';

const MosaicTemplate = (props) => {
  const {
    title,
    subtitle,
    blurb,
    backgroundImageUrl,
    isAffiliated,
    legacyCampaignId,
    clickedSignUp,
  } = props;

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  return (
    <header role="banner" className="lede-banner">
      <div className="lede-banner__image" style={backgroundImageStyle} />
      <div className="lede-banner__content">
        <div className="wrapper">
          <div className="lede-banner__headline">
            <h1 className="lede-banner__headline-title">{title}</h1>
            <h2 className="lede-banner__headline-subtitle">{subtitle}</h2>
          </div>

          <Markdown className="lede-banner__blurb">{blurb}</Markdown>

          { isAffiliated ? null : <button className="button" onClick={() => clickedSignUp(legacyCampaignId, { source: 'mosaic lede banner|text: Join us' })}>Join us</button> }
        </div>
      </div>
    </header>
  );
};

MosaicTemplate.propTypes = {
  backgroundImageUrl: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  clickedSignUp: PropTypes.func.isRequired,
  isAffiliated: PropTypes.bool.isRequired,
  legacyCampaignId: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MosaicTemplate;
