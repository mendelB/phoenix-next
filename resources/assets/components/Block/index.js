import React from 'react';
import classNames from 'classnames';
import './block.scss';

export const BlockTitle = ({ children }) => (
  <h4 className="block__title">{children}</h4>
);

BlockTitle.PropTypes = {
  children: React.PropTypes.string,
};

export default Block = (props) => (
  <div className={classNames('block', props.className)}>
    {props.children}
  </div>
);
