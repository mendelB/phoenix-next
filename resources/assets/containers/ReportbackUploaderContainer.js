import { connect } from 'react-redux';
import ReportbackUploader from '../components/ReportbackUploader';
import { submitReportback, addToSubmissionsList } from '../actions';

const mapStateToProps = (state) => {
  return {
    submissions: state.submissions
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitReportback: (reportback) => {
      dispatch(submitReportback(reportback));
    },

    addToSubmissionsList: (reportback) => {
      dispatch(addToSubmissionsList(reportback));
    }
  }
}

const ReportbackUploaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportbackUploader);

export default ReportbackUploaderContainer;
