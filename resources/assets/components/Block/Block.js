/* @flow */

import React from 'react';
import { CampaignUpdateBlockContainer } from '../CampaignUpdateBlock';
import { CampaignUpdateContainer } from '../CampaignUpdate';
import PlaceholderBlock from '../PlaceholderBlock';
import ReportbackBlock from '../ReportbackBlock';
import StaticBlock from '../StaticBlock';
import Quiz from '../Quiz';
// import CallToActionContainer from '../CallToAction'; // doesn't find the container??
import CallToActionContainer from '../CallToAction/CallToActionContainer';
import CallToActionBlockContainer from '../CallToActionBlock';
import { BlockJson } from '../../types';

// If no block is passed, just render an empty "placeholder".
const DEFAULT_BLOCK: BlockJson = { fields: { type: null } };

const Block = ({ json = DEFAULT_BLOCK }: { json: BlockJson }) => {
  switch (json.type) {
    case 'callToAction':
      return (
        <CallToActionContainer
          content={json.fields.content}
          impactPrefix={json.fields.impactPrefix}
          impactSuffix={json.fields.impactSuffix}
          impactValue={json.fields.impactValue}
          style={json.fields.style}
          useCampaignTagline={json.fields.useCampaignTagline}
        />
      );

    case 'campaignUpdate':
      return (
        <CampaignUpdateContainer
          id={json.id}
          author={json.fields.author}
          content={json.fields.content}
          displayOptions={json.fields.displayOptions}
          link={json.fields.link}
        />
      );

    case 'quiz':
      return <Quiz />;

    case 'campaign_update':
      return <CampaignUpdateBlockContainer id={json.id} fields={json.fields} />;

    case 'reportbacks':
      return <ReportbackBlock fields={json.fields} reportbacks={json.reportbacks} />;

    case 'static':
      return <StaticBlock fields={json.fields} />;

    default:
      return <PlaceholderBlock />;
  }
};

export default Block;
