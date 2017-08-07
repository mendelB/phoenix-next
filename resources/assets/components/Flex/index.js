import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { modifiers } from '../../helpers';
import './flex.scss';

export const Flex = ({ className = null, children }) => (
  <div className={classnames('flex', className)}>
    {children}
  </div>
);

Flex.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

Flex.defaultProps = {
  className: null,
};

export const FlexCell = ({ classNames = null, width = [], children }) => (
  <div className={classnames('flex__cell', classNames, modifiers(width))}>
    {children}
  </div>
);

FlexCell.propTypes = {
  classNames: PropTypes.string,
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOf(['full', 'half', 'one-third', 'two-thirds']),
};

FlexCell.defaultProps = {
  classNames: null,
  width: null,
};
