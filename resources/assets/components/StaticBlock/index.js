import React from 'react';
import Block from '../Block';
import Markdown from '../Markdown';
import './static-block.scss';

const StaticBlock = (props) => {
  const source = props.fields.additionalContent.source;

  return (
    <Block>
      <h4 className="static-block__title">{props.fields.title}</h4>
      <Markdown>{props.fields.content}</Markdown>
      { source ? <div className="static-block__citation"><p className="footnote">Source: {source}</p></div> : null }
    </Block>
  );
};

export default StaticBlock;
