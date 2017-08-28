import React from 'react';

import Markdown from '../../Markdown';

const MosaicTemplate = (props) => {
  const {
    title,
    subtitle,
    blurb,
    backgroundImageStyle,
    isAffiliated,
    legacyCampaignId,
    clickedSignUp
  } = props;

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

          { isAffiliated ? null : <button className="button" onClick={() => clickedSignUp(legacyCampaignId, { source: 'lede banner|text: Join us' })}>Join us</button> }
        </div>
      </div>
    </header>
  );
};

export default MosaicTemplate;
