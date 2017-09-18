import React from 'react';
import PropTypes from 'prop-types';

import AffiliateCredit from '../AffiliateCredit';

const CampaignFooter = ({ affiliateSponsors, affiliatePartners }) => {
  const sponser = affiliateSponsors[0];
  const partner = affiliatePartners[0];

  const renderedAffiliateLink = sponser || partner;

  return (
    <footer className="info-bar">
      <div className="wrapper">
        {
          renderedAffiliateLink ?
            <AffiliateCredit
              link={renderedAffiliateLink.fields.link}
              title={renderedAffiliateLink.fields.title}
            /> : null
        }
        <div className="info-bar__secondary">
          Questions? <a href="mailto:campaignlead@dosomething.org">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

CampaignFooter.propTypes = {
  affiliateSponsors: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  affiliatePartners: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};


export default CampaignFooter;
