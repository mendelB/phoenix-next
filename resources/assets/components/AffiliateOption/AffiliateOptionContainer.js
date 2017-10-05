import { connect } from 'react-redux';
import AffiliateOption from './AffiliateOption';
import { clickedOptOut } from '../../actions/signup';

const mapStateToProps = state => ({
  optedOut: state.signups.optedOut,
  affiliateOptionLabel: state.campaign.displayAffilitateOptOut.label,
  moreInformationLabel: state.campaign.displayAffilitateOptOut.moreInformationLabel,
  moreInformationMessage: state.campaign.displayAffilitateOptOut.moreInformationMessage,
});

const actionCreators = {
  clickedOptOut,
};

export default connect(mapStateToProps, actionCreators)(AffiliateOption);

