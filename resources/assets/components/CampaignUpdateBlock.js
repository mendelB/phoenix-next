import React from 'react';
import { markdown } from '../helpers';

import Block from './Block/index';
import Figure from './Figure';

const CampaignUpdateBlock = (props) => {
  const { title, content } = props.fields;

  const author = 'Lizzy Divine';
  const jobTitle = 'Campaign Lead';
  const avatar = 'http://images.contentful.com/e5mq1t8pfsum/6bZ26cuCC4YmAgYA6YasQs/2ce7b11d25384edc35fcfe7c24002bce/Pic_1_PP_DITL_EDivine.jpeg';

  return (
    <Block>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={markdown(content)} />
      <Figure image={avatar}>
        <h3>{author}</h3>
        <p className="footnote">{jobTitle}</p>
      </Figure>
    </Block>
  );
};

export default CampaignUpdateBlock;
