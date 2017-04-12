import React from 'react';
import Block from '../Block';
import Markdown from '../Markdown';
import CallToActionContainer from '../../containers/CallToActionContainer';
import { Flex, FlexCell } from '../Flex';

import './content-page.scss';

const ContentPage = ({ pages, route }) => {
  const page = pages.find(page => page.fields.slug === route.page);

  const ctaContent = 'some content that needs to get output';

  return (
    <div className="content-page">
      <article>
        <h2>{page.fields.title}</h2>
        <Markdown>{page.fields.content}</Markdown>
      </article>
      <CallToActionContainer fields={ {title: 'something', content: ctaContent} } />
    </div>
  );
};

export default ContentPage;
