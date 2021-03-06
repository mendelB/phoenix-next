import React from 'react';
import PropTypes from 'prop-types';

import ActionStep from './ActionStep';
import Revealer from '../Revealer';
import { Flex, FlexCell } from '../Flex';
import { makeHash } from '../../helpers';
import CompetitionContainer from '../../containers/CompetitionContainer';
import { ReportbackUploaderContainer } from '../ReportbackUploader';
import { SubmissionGalleryContainer } from '../Gallery';

const ActionStepsWrapper = (props) => {
  const { actionSteps, callToAction, campaignId, clickedSignUp,
    hasPendingSignup, isAuthenticated, isSignedUp, template } = props;

  const renderPhotoUploader = photoUploaderProps => (
    <FlexCell key="reportback_uploader" width="full">
      <ReportbackUploaderContainer {...photoUploaderProps} />
    </FlexCell>
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

    switch (type) {
      case 'competition':
        return (
          <CompetitionContainer
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
            content={content}
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
