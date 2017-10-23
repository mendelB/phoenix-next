import { connect } from 'react-redux';
import CallToAction from './CallToAction';

/**
 * Provide state from the Redux store as props for this component.
 */
const mapStateToProps = state => ({
  campaignId: state.campaign.id,
  legacyCampaignId: state.campaign.legacyCampaignId,
  coverImageUrl: state.campaign.coverImage.url,
  isSignedUp: state.signups.thisCampaign,
  // noun: '',
  // verb: '',
});

/**
 * Export the container component.
 */
export default connect(mapStateToProps)(CallToAction);
