import PropTypes from 'prop-types';
import React from 'react';
import BlockWrapper from '../Block/BlockWrapper';
import Markdown from '../Markdown';
import './static-block.scss';

const StaticBlock = (props) => {
  const { source } = props.fields.additionalContent;

  return (
    <BlockWrapper title={props.fields.title}>
      <Markdown>{props.fields.content}</Markdown>
      { source ? <div className="static-block__citation"><p className="footnote">{source}</p></div> : null }
    </BlockWrapper>
  );
};

StaticBlock.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    additionalContent: PropTypes.object,
  }).isRequired,
};

export default StaticBlock;
