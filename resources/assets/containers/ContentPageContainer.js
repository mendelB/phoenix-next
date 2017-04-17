import { connect } from 'react-redux';
import ContentPage from '../components/ContentPage';

/**
 * Provide state from the Redux store as props for this component.
 */
const mapStateToProps = (state, ownProps) => ({
  pages: state.campaign.pages,
  route: ownProps.params,
});

// Export the container component.
export default connect(mapStateToProps)(ContentPage);
