import React from 'react';
import PropTypes from 'prop-types';

const AffiliateCredit = ({ title, link }) => {
  const affiliate = link ? <a href={link} target="_blank">{title}</a> : title;

  return <span>{affiliate}</span>;
};

AffiliateCredit.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
};

AffiliateCredit.defaultProps = {
  link: null,
};


const AffiliateCredits = ({ affiliatePartners, affiliateSponsors }) => {
  const sponsor = affiliateSponsors[0];
  const partner = affiliatePartners[0];

  const sponsorCredit = sponsor ?
    <AffiliateCredit link={sponsor.fields.link} title={sponsor.fields.title} />
    : null;
  const partnerCredit = partner ?
    <AffiliateCredit link={partner.fields.link} title={partner.fields.title} />
    : null;

  const multipleCredits = sponsor && partner ? ' and ' : null;

  return (
    (sponsorCredit || partnerCredit) ?
      <span>In partnership with {sponsorCredit} {multipleCredits} {partnerCredit}</span>
      : null
  );
};

AffiliateCredits.propTypes = {
  affiliateSponsors: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  affiliatePartners: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default AffiliateCredits;
