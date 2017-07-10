import { connect } from 'react-redux';
import { get } from 'lodash';
import ReportbackUploader from './ReportbackUploader';
import { submitReportback, addSubmissionItemToList, fetchUserReportbacks } from '../../actions';

/**
 * Provide state from the Redux store as props for this component.
 */
const mapStateToProps = state => ({
  campaignId: state.campaign.id,
  legacyCampaignId: state.campaign.legacyCampaignId,
  submissions: state.submissions,
  noun: get(state.campaign.additionalContent, 'noun'),
  userId: state.user.id,
  uploads: state.uploads,
});

/**
 * Provide pre-bound functions that allow the component to dispatch
 * actions to the Redux store as props for this component.
 */
const actionCreators = {
  submitReportback,
  addSubmissionItemToList,
  fetchUserReportbacks,
};

// Export the container component.
export default connect(mapStateToProps, actionCreators)(ReportbackUploader);
