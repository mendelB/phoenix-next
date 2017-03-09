import React from 'react';
import Block from '../Block';
import Markdown from '../Markdown';

const PageBlock = ({ pages, route }) => {
  const page = pages.find(page => page.fields.slug === route.page);

  return (
    <Block>
      <h2>{page.fields.title}</h2>
      <Markdown>{page.fields.content}</Markdown>
    </Block>
  );
};

export default PageBlock;
