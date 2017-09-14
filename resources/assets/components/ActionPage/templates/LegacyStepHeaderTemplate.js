import React from 'react';
import PropTypes from 'prop-types';
import { FlexCell } from '../../Flex';

const LegacyStepHeaderTemplate = ({ title, step, hideStepNumber }) => (
  <FlexCell width="full">
    <h2 className="heading -banner legacy-step-header">
      <span>
        { hideStepNumber ? null : `Step ${step}: ` }
        {title}
      </span>
    </h2>
  </FlexCell>
);

LegacyStepHeaderTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  step: PropTypes.number,
  hideStepNumber: PropTypes.bool,
};

LegacyStepHeaderTemplate.defaultProps = {
  step: null,
  hideStepNumber: false,
};

export default LegacyStepHeaderTemplate;
