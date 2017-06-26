/* @flow */

import React from 'react';
import classnames from 'classnames';
import Button from '../Button/Button';
import './cta.scss';

type CallToActionProps = {
  clickedSignUp: (campaignId: string, metadata: ?{}) => mixed,
  legacyCampaignId: string,
  classNames?: string,
};

const CallToAction = ({ clickedSignUp, legacyCampaignId, classNames = '' }: CallToActionProps) => (
  <div className={classnames('call-to-action', classNames)}>
    <Button onClick={() => clickedSignUp(legacyCampaignId, { source: 'small screen sticky cta|text: Join us' })} />
  </div>
);

export default CallToAction;

// @TODO: ESLint kept yelling at me that I needed to define this somewhere and does not
// recognize the above default.
CallToAction.defaultProps = {
  classNames: '',
};
