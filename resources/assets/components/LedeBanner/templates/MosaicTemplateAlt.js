import React from 'react';
import PropTypes from 'prop-types';

import AffiliateOptionContainer from '../../AffiliateOption';
import SponsorPromotion from '../../SponsorPromotion';
import SignupButtonFactory from '../../SignupButton';
import { contentfulImageUrl } from '../../../helpers';
import CampaignSignupArrow from '../../CampaignSignupArrow';

const MosaicTemplateAlt = (props) => {
  const {
    title,
    subtitle,
    coverImage,
    isAffiliated,
    legacyCampaignId,
    showPartnerMsgOptIn,
    affiliateSponsors,
    signupArrowContent,
  } = props;


  const sponsor = affiliateSponsors[0];

  const backgroundImageStyle = {
    backgroundImage: `url(${contentfulImageUrl(coverImage.url, '800', '600', 'fill')})`,
  };

  const signupArrowComponent = signupArrowContent ? (
    <CampaignSignupArrow content={signupArrowContent} className="-right" />
  ) : null;

  const SignupButton = SignupButtonFactory(({ clickedSignUp }) => (
    <div className="button-div">
      { signupArrowComponent }
      <button className="button" onClick={() => clickedSignUp(legacyCampaignId)}>Join Us</button>
      { showPartnerMsgOptIn ? <AffiliateOptionContainer /> : null }
    </div>
  ), 'lede banner', { text: 'join us' });

  return (
    <header role="banner" className="lede-banner lede-banner-alt">
      <div className="lede-banner__image" style={backgroundImageStyle} />
      <div className="lede-banner__content">
        <div className="wrapper">
          <div className="lede-banner__headline">
            <h1 className="lede-banner__headline-title">{title}</h1>
            <h2 className="lede-banner__headline-subtitle">{subtitle}</h2>
          </div>

          { isAffiliated ? null : <SignupButton /> }

          { sponsor ?
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

MosaicTemplateAlt.propTypes = {
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
  signupArrowContent: PropTypes.string,
};

MosaicTemplateAlt.defaultProps = {
  showPartnerMsgOptIn: false,
  signupArrowContent: 'sign up to win $5,000 scholarship',
};

export default MosaicTemplateAlt;
