import React from 'react';
import classNames from 'classnames';
import './flex.scss';

export const Flex = (props) => {
  return (
    <div className="flex">
      {props.children}
    </div>
  );
};

export const FlexCell = (props) => {
  const modifiers = props.modifiers.map(className => `-${className}`);
  return (
    <div className={classNames('flex__cell', modifiers)}>
      {props.children}
    </div>
  );
};

FlexCell.propTypes = {
  modifiers: React.PropTypes.arrayOf(React.PropTypes.oneOf(['full', 'one-third', 'two-thirds']))
};

