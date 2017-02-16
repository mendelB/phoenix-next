import React from 'react';
import Block from '../Block/index';
import './placeholder.scss';

const PlaceholderBlock = (props) => {
  return (
    <Block className="placeholder">
      {props.fields.title}
    </Block>
  );
};

export default PlaceholderBlock;
