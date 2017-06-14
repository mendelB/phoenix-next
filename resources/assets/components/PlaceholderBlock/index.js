import PropTypes from 'prop-types';
import React from 'react';
import { BlockWrapper } from '../Block';
import './placeholder.scss';

const PlaceholderBlock = props => (
  <BlockWrapper className="placeholder">
    {props.fields.title}
  </BlockWrapper>
);

PlaceholderBlock.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

PlaceholderBlock.defaultProps = {
  fields: {
    title: 'Not found :(',
  },
};

export default PlaceholderBlock;
