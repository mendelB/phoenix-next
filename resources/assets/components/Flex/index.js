import React from 'react';
import classnames from 'classnames';
import { modifiers } from '../../helpers';
import './flex.scss';

export const Flex = ({className = null, children}) => (
  <div className={classnames('flex', className)}>
    {children}
  </div>
);

export const FlexCell = ({width = [], children}) => {
  return (
    <div className={classnames('flex__cell', modifiers(width))}>
      {children}
    </div>
  );
};

FlexCell.propTypes = {
  width: React.PropTypes.oneOf(['full', 'one-third', 'two-thirds']),
};
