import React from 'react';
import PropTypes from 'prop-types';
import { FlexCell } from '../../Flex';

const LegacyStepHeaderTemplate = ({ title, step }) => (
  <FlexCell width="full">
    <h2 className="heading -banner legacy-step-header">
      <span>
        Step { String(step) }: {title}
      </span>
    </h2>
  </FlexCell>
);

LegacyStepHeaderTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};

export default LegacyStepHeaderTemplate;
