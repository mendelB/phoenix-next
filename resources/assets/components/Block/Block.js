import React from 'react';
import PropTypes from 'prop-types';
import CampaignUpdateBlock from '../CampaignUpdateBlock';
import PlaceholderBlock from '../PlaceholderBlock';
import ReportbackBlock from '../ReportbackBlock';
import StaticBlock from '../StaticBlock';
import CallToActionContainer from '../../containers/CallToActionContainer';

const Block = ({ json }) => {
  switch (json.fields.type) {
    case 'campaign_update':
      return <CampaignUpdateBlock fields={json.fields} />;

    case 'join_cta':
      return <CallToActionContainer />;

    case 'reportbacks':
      return <ReportbackBlock fields={json.fields} reportbacks={json.reportbacks} />;

    case 'static':
      return <StaticBlock fields={json.fields} />;

    default:
      return <PlaceholderBlock />;
  }
};

Block.propTypes = {
  // @TODO: Validate the shape of this JSON object with prop types.
  json: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Block.defaultProps = {
  json: { fields: { type: null } },
};

export default Block;
