import React from 'react';
import PropTypes from 'prop-types';
import { FlexCell } from '../../Flex';

import { convertNumberToWord } from '../../../helpers';
import PhotoHeader from '../../PhotoHeader';

const MosaicStepHeaderTemplate = ({ title, step, background, hideStepNumber }) => (
  <FlexCell width="full">
    <PhotoHeader className="action-step__header" backgroundImage={background}>
      { hideStepNumber ? null : <span>step { convertNumberToWord(step) }</span> }
      <h1>{ title }</h1>
    </PhotoHeader>
  </FlexCell>
);

MosaicStepHeaderTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  step: PropTypes.number,
  hideStepNumber: PropTypes.bool,
  background: PropTypes.string,
};

MosaicStepHeaderTemplate.defaultProps = {
  background: null,
  step: null,
  hideStepNumber: false,
};

export default MosaicStepHeaderTemplate;
