import React from 'react';
import { find } from 'lodash';
import PropTypes from 'prop-types';

import NotFound from '../../NotFound';
import Markdown from '../../Markdown';
import ScrollConcierge from '../../ScrollConcierge';
// import CallToActionContainer from '../CallToAction'; // doesn't find the container??
import CallToActionContainer from '../../CallToAction/CallToActionContainer';
import CallToActionBlockContainer from '../../CallToActionBlock';
import { isCampaignClosed } from '../../../helpers';

import './campaign-subpage.scss';

const CampaignSubPage = (props) => {
  const { campaignEndDate, match, noun, pages, tagline, verb } = props;

  const subPage = find(pages, page => page.fields.slug === match.params.slug);

  if (! subPage) {
    return <NotFound />;
  }

  const isClosed = isCampaignClosed(campaignEndDate);

  const ctaContent = `${tagline} Join hundreds of members and ${verb.plural} ${noun.plural}!`;

  return (
    <div className="clearfix padded campaign-subpage" id={subPage.id}>
      <div className="primary">
        <ScrollConcierge />
        <article className="padded bordered rounded bg-white">
          <h2 className="visually-hidden">{ subPage.fields.title }</h2>

          <Markdown>{ subPage.fields.content }</Markdown>
        </article>
      </div>

      { isClosed ? null : (
        <div className="secondary">
          <CallToActionContainer
            content={ctaContent}
            useCampaignTagline={true}
            style="dark"
          />
        </div>
      )}

      { isClosed ? null : (
        <CallToActionContainer
          useCampaignTagline={true}
          style="transparent"
        />
      )}
    </div>
  );
};

CampaignSubPage.propTypes = {
  campaignEndDate: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  noun: PropTypes.shape({
    singular: PropTypes.string,
    plural: PropTypes.string,
  }),
  pages: PropTypes.arrayOf(PropTypes.shape({
    fields: PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  })),
  tagline: PropTypes.string,
  verb: PropTypes.shape({
    singular: PropTypes.string,
    plural: PropTypes.string,
  }),
};

CampaignSubPage.defaultProps = {
  pages: [],
  noun: {
    singular: 'action',
    plural: 'action',
  },
  tagline: 'Ready to start?',
  verb: {
    singular: 'take',
    plural: 'take',
  },
};

export default CampaignSubPage;


// <CallToActionBlockContainer
//   fields={{ content: ctaContent }}
//   modifierClasses="dark-bg"
// />

// <CallToActionBlockContainer
//   fields={{ title: tagline }}
//   modifierClasses="transparent border-none"
//   className="last-cta"
// />
