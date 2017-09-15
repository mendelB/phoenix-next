import React from 'react';
import PropTypes from 'prop-types';

import AffiliateLink from './AffiliateLink';

const Footer = ({ affiliateSponsors, affiliatePartners }) => {
  const sponser = affiliateSponsors[0];
  const partner = affiliatePartners[0];

  const renderedAffiliateLink = sponser || partner;

  return (
    <footer className="info-bar">
      <div className="wrapper">
        {
          renderedAffiliateLink ?
            <AffiliateLink
              link={renderedAffiliateLink.fields.link}
              title={renderedAffiliateLink.fields.title}
            /> : null
        }
        <div className="info-bar__secondary">
          Questions? Contact&nbsp;
          <a href="mailto:campaignlead@dosomething.org">
            campaignlead@dosomething.org
          </a>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  affiliateSponsors: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  affiliatePartners: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};


export default Footer;
