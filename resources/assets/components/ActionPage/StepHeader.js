import React from 'react';
import PropTypes from 'prop-types';

import LegacyStepHeaderTemplate from './templates/LegacyStepHeaderTemplate';
import MosaicStepHeaderTemplate from './templates/MosaicStepHeaderTemplate';

const StepHeader = ({ title, step, background, hideStepNumber, template }) => {
  switch (template) {
    case 'legacy':
      return <LegacyStepHeaderTemplate
              title={title}
              step={step}
            />;
    default:
      return <MosaicStepHeaderTemplate
              title={title}
              step={step}
              background={background}
              hideStepNumber={hideStepNumber}
            />;
  }
};

StepHeader.propTypes = {
  title: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  hideStepNumber: PropTypes.bool.isRequired,
  background: PropTypes.string,
  template: PropTypes.string.isRequired,
};

StepHeader.defaultProps = {
  background: null,
};

export default StepHeader;
