import React from 'react';
import { FlexCell } from '../Flex';
import classnames from 'classnames';

import './revealer.scss';

const Revealer = (props) => {
  return (
    <FlexCell width="full">
      <div className="revealer">
        <h1>{props.callToAction}</h1>
        <a className={classnames('button', {'is-loading': props.isLoading})} onClick={props.onReveal}>{props.title}</a>
      </div>
    </FlexCell>
  );
};

Revealer.defaultProps = {
  callToAction: '',
  title: 'view more',
  onReveal: () => {},
};

export default Revealer;
