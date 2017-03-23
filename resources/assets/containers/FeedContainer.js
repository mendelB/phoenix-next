import { connect } from 'react-redux';
import Feed from '../components/Feed';
import {
  clickedViewMore,
  clickedSignUp,
  checkForSignup,
  setCurrentlySignedUp,
} from '../actions';

const BLOCKS_PER_ROW = 3;
const ROWS_PER_PAGE = 3;

/**
 * Map the given display option to a numeric point value.
 *
 * @param {Array} displayOption
 * @return int
 */
const mapDisplayToPoints = (displayOption) => {
  switch (displayOption[0]) {
    case 'one-third': return 1;
    case 'two-thirds': return 2;
    case 'full': return 3;
    default: return 0;
  }
};

/**
 * Filter the blocks based on the page offset.
 *
 * @param blocks
 * @param offset
 */
const filterVisibleBlocks = (blocks, offset) => {
  let totalPoints = 0;

  return blocks.filter(block => {
    totalPoints += mapDisplayToPoints(block.fields.displayOptions);
    const totalRows = totalPoints / BLOCKS_PER_ROW;
    const rowTarget = offset * ROWS_PER_PAGE;

    return totalRows < rowTarget;
  });
};

/**
 * Append reportback IDs to the reportback blocks.
 * @param reportbacks
 * @param blocks
 */
const appendReportbacks = (reportbacks, blocks) => {
  let reportbackIndex = 0;
  return blocks.map(block => {
    // Set block type for custom blocks.
    block.type = block.type === 'customBlock' ? block.fields.type : block.type;

    if (block.type !== 'reportbacks') return block;

    block.reportbacks = [];

    const count = block.fields.additionalContent.count || 3;
    for (let i = 0; i < count; i++) {
      const reportback = reportbacks.data[reportbackIndex];

      if (reportback) {
        block.reportbacks.push(reportback.id);
      }

      reportbackIndex++;
    }

    return block;
  });
};

/**
 * Provide state from the Redux store as props for this component.
 */
const mapStateToProps = (state) => {
  return {
    blocks: appendReportbacks(state.reportbacks, filterVisibleBlocks(state.campaign.activityFeed, state.blocks.offset)),
    legacyCampaignId: state.campaign.legacyCampaignId,
    callToAction: state.campaign.callToAction,
    submissions: state.submissions,
    signedUp: state.signups.data.includes(state.campaign.legacyCampaignId),
    hasNewSignup: state.signups.thisSession,
    isAuthenticated: state.user.id !== null,
  };
};

/**
 * Provide pre-bound functions that allow the component to dispatch
 * actions to the Redux store as props for this component.
 */
const actionCreators = {
  clickedViewMore,
  clickedSignUp,
  checkForSignup,
};

// Export the container component.
export default connect(mapStateToProps, actionCreators)(Feed);
