import React from 'react';
import PropTypes from 'prop-types';

import Markdown from '../../Markdown';
import AffiliateOptionContainer from '../../AffiliateOption';
import SignupButtonFactory from '../../SignupButton';
import { contentfulImageUrl } from '../../../helpers';

const MosaicTemplate = (props) => {
  const {
    title,
    subtitle,
    blurb,
    coverImage,
    isAffiliated,
    legacyCampaignId,
    showPartnerMsgOptIn,
  } = props;

  const backgroundImageStyle = {
    backgroundImage: `url(${contentfulImageUrl(coverImage.url, '800', '600', 'fill')})`,
  };

  const SignupButton = SignupButtonFactory(({ clickedSignUp }) => (
    <div>
      <button className="button" onClick={() => clickedSignUp(legacyCampaignId)}>Join Us</button>
      { showPartnerMsgOptIn ? <AffiliateOptionContainer /> : null }
    </div>
  ), 'lede banner', { text: 'join us' });

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

          { isAffiliated ? null : <SignupButton /> }
        </div>
      </div>
    </header>
  );
};

MosaicTemplate.propTypes = {
  blurb: PropTypes.string.isRequired,
  coverImage: PropTypes.shape({
    description: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  isAffiliated: PropTypes.bool.isRequired,
  legacyCampaignId: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  showPartnerMsgOptIn: PropTypes.bool.isRequired,
};

export default MosaicTemplate;
