/* global window */

import { connect } from 'react-redux';
import { find } from 'lodash';
import CampaignUpdateBlock from './CampaignUpdateBlock';
import { makeShareLink } from '../../helpers';

const mapStateToProps = (state, props) => {
  const campaignUpdateFields = props.fields ||
    find(state.campaign.activityFeed, { id: props.id }).fields;

  return {
    fields: campaignUpdateFields,
    shareLink: makeShareLink('campaigns', {
      domain: window.location.origin,
      slug: state.campaign.slug,
      key: props.id,
    }),
  };
};

export default connect(mapStateToProps)(CampaignUpdateBlock);
