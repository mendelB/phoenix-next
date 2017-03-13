import React from 'react';

class ReportbackSubmissions extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSubmission(reportback, index) {
    // @TODO: need to flesh out the markup.
    return (
      <li key={index}>
        <img src={reportback.photo.filePreviewUrl} alt={reportback.caption} />
        <p>{reportback.caption}</p>
      </li>
    );
  }

  render() {
    let submissions = this.props.submissions.data || null;

    return submissions ? <ul>{submissions.map(this.renderSubmission)}</ul> : null;
  }
}

export default ReportbackSubmissions;
