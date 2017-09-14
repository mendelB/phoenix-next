import React from 'react';
import PropTypes from 'prop-types';

const LegacyStepHeaderTemplate = ({ title, step }) => (
  <h2 className="heading -banner">
    <span style={{ fontFamily: 'Proxima Nova', padding: '24px 0px 0px', marginLeft: '0px', width: '100%' }}>
      Step { String(step) }: {title}
    </span>
  </h2>
);

LegacyStepHeaderTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};

export default LegacyStepHeaderTemplate;
