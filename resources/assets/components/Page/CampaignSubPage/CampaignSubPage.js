import React from 'react';
import { find, get } from 'lodash';
import PropTypes from 'prop-types';

import NotFound from '../../NotFound';
import Markdown from '../../Markdown';
import ScrollConcierge from '../../ScrollConcierge';
import CallToActionBlockContainer from '../../../containers/CallToActionBlockContainer';
import { isCampaignClosed } from '../../../helpers';

import './campaign-subpage.scss';

const CampaignSubPage = (props) => {
  const { match, noun, pages, tagline, verb, endDate } = props;

  const subPage = find(pages, page => page.fields.slug === match.params.slug);

  if (! subPage) {
    return <NotFound />;
  }

  const isClosed = isCampaignClosed(get(endDate, 'date', null));

  const ctaContent = `${tagline}\n\n__Join hundreds of members and ${verb.plural} ${noun.plural}!__`;

  return (
    <div className="clearfix padded campaign-subpage" id={subPage.id}>
      <div className="primary">
        <ScrollConcierge />
        <article>
          <h2 className="visually-hidden">{ subPage.fields.title }</h2>

          <Markdown>{ subPage.fields.content }</Markdown>
        </article>
      </div>

      { ! isClosed ? (
        <span>
          <div className="secondary">
            <CallToActionBlockContainer
              fields={{ content: ctaContent }}
              modifierClasses="dark-bg"
            />
          </div>

          <CallToActionBlockContainer
            fields={{ title: tagline }}
            modifierClasses="transparent border-none"
          />
        </span>
      ) : null }
    </div>
  );
};

CampaignSubPage.propTypes = {
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
  endDate: PropTypes.shape({
    date: PropTypes.string,
    timezone: PropTypes.string,
    timezone_type: PropTypes.number,
  }),
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
  endDate: null,
  tagline: 'Ready to start?',
  verb: {
    singular: 'take',
    plural: 'take',
  },
};

export default CampaignSubPage;
