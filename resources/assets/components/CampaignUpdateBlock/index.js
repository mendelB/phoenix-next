import React from 'react';
import classnames from 'classnames';
import { markdown } from '../../helpers';
import Block from '../Block';
import Figure from '../Figure';
import DEFAULT_AVATAR from './default-avatar.png';
import './campaign-update.scss';

const Byline = ({author, jobTitle = 'DoSomething.org Staff', avatar = DEFAULT_AVATAR}) => (
  <Figure size="small" alignment="left" verticalAlignment="center" image={avatar} imageClassName="avatar">
    <strong>{author}</strong><br/>
    <p className="footnote">{jobTitle}</p>
  </Figure>
);

const CampaignUpdateBlock = (props) => {
  const { title, content, additionalContent } = props.fields;
  let { author, jobTitle, avatar } = additionalContent;

  const contentHtml = markdown(content);
  const isTweet = content.length < 144;

  return (
    <Block>
      { isTweet ? null : <h2>{title}</h2> }
      <div className={classnames('campaign-update__content', {'-tweet': isTweet})}
           dangerouslySetInnerHTML={contentHtml} />
      { author ? <Byline author={author} jobTitle={jobTitle} avatar={avatar} />: null}
    </Block>
  );
};

export default CampaignUpdateBlock;
