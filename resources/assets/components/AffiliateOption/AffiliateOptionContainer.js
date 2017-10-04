import { connect } from 'react-redux';
import AffiliateOption from './AffiliateOption';
import { clickedOptOut } from '../../actions/signup';

const mapStateToProps = state => ({
  optedOut: state.signups.optedOut,
});

const actionCreators = {
  clickedOptOut,
};

// Probably need a opt-out boolean, whether the user has already opted in/out
// Probably need a show boolean to let us know if we should or should not show.
export default connect(mapStateToProps, actionCreators)(AffiliateOption);

