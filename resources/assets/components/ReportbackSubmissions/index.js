import React from 'react';

class ReportbackSubmissions extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSubmission(reportback, index) {
    // @TODO: need to flesh out the markup.
    return <li key={index}>{reportback.caption}</li>;
  }

  render() {
    let submissions = this.props.submissions.data || null;

    return submissions ? <ul>{submissions.map(this.renderSubmission)}</ul> : null;
  }
}

export default ReportbackSubmissions;
