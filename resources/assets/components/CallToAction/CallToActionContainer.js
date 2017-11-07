import { connect } from 'react-redux';
import { get } from 'lodash';

import CallToAction from './CallToAction';

/**
 * Provide state from the Redux store as props for this component.
 */
const mapStateToProps = state => ({
  campaignId: state.campaign.id,
  coverImageUrl: state.campaign.coverImage.url,
  isSignedUp: state.signups.thisCampaign,
  legacyCampaignId: get(state.campaign, 'legacyCampaignId', null),
  tagline: state.campaign.callToAction,
});

/**
 * Export the container component.
 */
export default connect(mapStateToProps)(CallToAction);
