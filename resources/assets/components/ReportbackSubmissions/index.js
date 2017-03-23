import React from 'react';

class ReportbackSubmissions extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSubmission(reportback, index) {
    // let uri = reportback.media.filePreviewUrl || reportback.media.uri;
    // @TODO: should be the above line, but currently, images submitted (and thus returned) from Thor are broken.
    let uri = reportback.media.filePreviewUrl || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    // @TODO: need to flesh out the markup.
    return (
      <li key={index}>
        <img src={uri} alt={reportback.caption} />
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
