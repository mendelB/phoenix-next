import React from 'react';
import classNames from 'classnames';
import './flex.scss';

export const Flex = ({children}) => {
  return (
    <div className="flex">
      {children}
    </div>
  );
};

export const FlexCell = ({modifiers = [], children}) => {
  modifiers = modifiers.map(className => `-${className}`);

  return (
    <div className={classNames('flex__cell', modifiers)}>
      {children}
    </div>
  );
};

FlexCell.propTypes = {
  modifiers: React.PropTypes.arrayOf(React.PropTypes.oneOf(['full', 'one-third', 'two-thirds']))
};

