import React from 'react';
import Block from '../Block';
import { Flex } from '../Flex';
import MediaUploader from '../MediaUploader';
import './reportback-uploader.scss';

class ReportbackUploader extends React.Component {
  constructor() {
    super();

    this.storeReportback = this.storeReportback.bind(this);

    this.state = {
      media: {
        file: null,
        filePreviewUrl: null
      },
      caption: null,
      impact: null,
      why_participated: null
    };
  }

  setMediaState(data) {
    console.log('setMediaState');
    console.log(data.filePreviewUrl);

    // this.setState({
    //   media: {
    //     file: data.file,
    //     filePreviewUrl: data.filePreviewUrl
    //   }
    // });
  }

  storeReportback(event) {
    event.preventDefault();

    console.log('storeReportback');

    // const reportback = {
    //   photo: this.mediaUploader.state.file,
    //   caption: this.caption.value,
    //   impact: this.impact.value,
    //   why_participated: this.why_participated.value
    // };

    // console.log(reportback);
    // console.log(this.mediaUploader);

    // @TODO: only reset form AFTER successful RB submission.
    // this.form.reset();
    // this.mediaUploader.setDefaultState();
  }

  render() {
    return (
      <Block>
        <div className="reportback-uploader">
          <h2 className="heading">Upload your photos</h2>
          <form className="reportback-form" onSubmit={this.storeReportback} ref={(form) => this.form = form}>
            <MediaUploader label="Send us your photo" media={this.state.media} setMediaState={this.setMediaState} />

            <div className="wrapper">
              <div className="form-item">
                <label className="field-label" htmlFor="caption">Add a caption to your photo.</label>
                <input className="text-field" id="caption" name="caption" type="text" placeholder="Give it your best shot" ref={(input) => this.caption = input} />
              </div>

              <div>
                <label className="field-label" htmlFor="impact">How many jeans are in this photo?</label>
                <input className="text-field" id="impact" name="impact" type="text" placeholder="Enter # here -- like '300' or '5'" ref={(input) => this.impact = input} />
              </div>
            </div>

            <div className="form-item">
              <label className="field-label" htmlFor="why_participated">Why is this campaign important to you?</label>
              <textarea className="text-field" id="why_participated" name="why_participated" placeholder="No need to write an essay, but we'd love to see why this matters to you!" ref={(input) => this.why_participated = input}></textarea>
            </div>

            <button className="button" type="submit">Submit a new photo</button>
          </form>
        </div>
      </Block>
    );
  }
}

export default ReportbackUploader;

// <MediaUploader label="Send us your photo" media={this.state.photo} onChange={} />
// <MediaUploader label="Send us your photo" ref={(component) => this.mediaUploader = component} />
