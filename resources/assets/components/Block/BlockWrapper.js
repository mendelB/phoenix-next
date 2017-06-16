/* @flow */

import React, { Element } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './block-wrapper.scss';

type BlockTitleProps = {
  id: ?string,
  title: ?string,
};

const BlockTitle = ({ id, title }: BlockTitleProps) => {
  const titleElement = id ? <Link to={`/blocks/${id}`}>{title}</Link> : title;

  return <h4 className="block-wrapper__title">{titleElement}</h4>;
};

type BlockWrapperProps = {
  className: ?string,
  title: ?string,
  id: ?string,
  children: ?Element<any>
}

const BlockWrapper = ({ id, title, className, children }: BlockWrapperProps) => (
  <article className={classnames('block-wrapper', className)}>
    { title ? <BlockTitle title={title} id={id} /> : null }
    { children }
  </article>
);

export default BlockWrapper;
