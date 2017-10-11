import React from 'react';
import PropTypes from 'prop-types';

import ActionStep from './ActionStep';
import Revealer from '../Revealer';
import { makeHash } from '../../helpers';
import { Flex, FlexCell } from '../Flex';
import { PostGalleryContainer } from '../Gallery/PostGallery';
import { ReportbackUploaderContainer } from '../ReportbackUploader';
import { CompetitionBlockContainer } from '../CompetitionBlock';
import { SubmissionGalleryContainer } from '../Gallery/SubmissionGallery';

const thirdPartyAction = (content, additionalContent, link) => {
  const fullLink = additionalContent.dynamicParam + link;
  console.log(fullLink);
}

const ActionStepsWrapper = (props) => {
  const { actionSteps, callToAction, campaignId, clickedSignUp,
    hasPendingSignup, isAuthenticated, isSignedUp, template } = props;

  const renderPhotoUploader = photoUploaderProps => (
    <FlexCell key="reportback_uploader" width="full">
      <ReportbackUploaderContainer {...photoUploaderProps} />
    </FlexCell>
  );

  const postGallery = (
    <PostGalleryContainer key="post_gallery" type="reportback" />
  );

  const submissionGallery = (
    <FlexCell key="submission_gallery" width="full">
      <SubmissionGalleryContainer />
    </FlexCell>
  );

  const actionRevealer = (
    <Revealer
      key="revealer"
      title="Join Us"
      callToAction={callToAction}
      isLoading={hasPendingSignup}
      onReveal={() => clickedSignUp(campaignId, { source: 'action page revealer' })}
      isAuthenticated={isAuthenticated}
    />
  );

  let stepIndex = 0;

  const stepComponents = actionSteps.map((step) => {
    const type = step.customType || 'default';
    const title = step.title;
    const content = step.content || null;
    const additionalContent = step.additionalContent || {};
    const key = makeHash(title);
    const contentLink = type === 'third_party_action' ?
      `[${additionalContent.urlTitle}](${additionalContent.url}&${additionalContent.dynamicParam}=12345) ${step.content}`
    : null

    switch (type) {
      case 'competition':
        return (
          <CompetitionBlockContainer
            key={key}
            content={content}
            photo={step.photos[0]}
            byline={additionalContent}
          />
        );

      case 'photo-uploader':
        return isSignedUp ? renderPhotoUploader({
          quantityOverride: additionalContent.quantityOverride || null,
        }) : null;

      case 'submission-gallery':
        return isSignedUp ? submissionGallery : null;

      default:
        stepIndex += 1;

        return (
          <ActionStep
            key={key}
            title={title}
            content={contentLink ? contentLink : content}
            stepIndex={stepIndex}
            background={step.background}
            photos={step.photos}
            photoWidth={step.displayOptions === 'full' ? 'full' : 'one-third'}
            hideStepNumber={additionalContent.hideStepNumber || false}
            shouldTruncate={step.truncate}
            template={template}
          />
        );
    }
  });

  if (! isSignedUp) {
    stepComponents.push(actionRevealer);
  }

  if (template === 'legacy') {
    stepComponents.push(
      <div key="user_gallery" className="action-step margin-top-xlg margin-bottom-xlg margin-horizontal-md">
        <h2 className="heading -emphasized legacy-step-header margin-top-md margin-bottom-md">
          <span>User Gallery</span>
        </h2>
        {postGallery}
      </div>,
    );
  }

  return (
    <Flex>
      { stepComponents }
    </Flex>
  );
};

ActionStepsWrapper.propTypes = {
  actionSteps: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  callToAction: PropTypes.string.isRequired,
  campaignId: PropTypes.string.isRequired,
  clickedSignUp: PropTypes.func.isRequired,
  hasPendingSignup: PropTypes.bool.isRequired,
  isSignedUp: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  template: PropTypes.string.isRequired,
};

export default ActionStepsWrapper;
