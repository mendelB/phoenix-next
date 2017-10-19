import React from 'react';
import PropTypes from 'prop-types';

import AffiliateOptionContainer from '../../AffiliateOption';
import SponsorPromotion from '../../SponsorPromotion';
import SignupButtonFactory from '../../SignupButton';
import { contentfulImageUrl } from '../../../helpers';
import CampaignSignupArrow from '../../CampaignSignupArrow';

const MosaicTemplate = (props) => {
  const {
    title,
    subtitle,
    coverImage,
    isAffiliated,
    legacyCampaignId,
    showPartnerMsgOptIn,
    affiliateSponsors,
  } = props;


  const sponsor = affiliateSponsors[0];

  const backgroundImageStyle = {
    backgroundImage: `url(${contentfulImageUrl(coverImage.url, '800', '600', 'fill')})`,
  };

  const scholarship = <CampaignSignupArrow content="win a $5,000 dollar scholarship" className="-right" />

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

          { isAffiliated ? null : (
            <div className="button-div">
              <SignupButton />
              {scholarship}
            </div>
          )}

          {
          sponsor ?
            <SponsorPromotion
              imgUrl={sponsor.fields.logo.url}
              title={sponsor.fields.logo.title}
              className="mosaic"
            />
            : null
          }
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
  affiliateSponsors: PropTypes.arrayOf(PropTypes.object).isRequired,
  legacyCampaignId: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  showPartnerMsgOptIn: PropTypes.bool.isRequired,
};

MosaicTemplate.defaultProps = {
  showPartnerMsgOptIn: false,
};

export default MosaicTemplate;
