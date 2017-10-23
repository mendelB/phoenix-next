/* @flow */

import React from 'react';
import classnames from 'classnames';

import Card from '../Card';
import Button from '../Button/Button';
import SignupButtonFactory from '../SignupButton';

// import './cta.scss';

type CallToActionProps = {
  legacyCampaignId: string,
  className: ?string,
};

const CallToAction = ({ legacyCampaignId, className }: CallToActionProps) => {
  return (
    <Card className="call-to-action rounded padded">
      jellooo
    </Card>
  );
};

CallToAction.defaultProps = {
  className: null,
};

export default CallToAction;

// const SignupButton = SignupButtonFactory(({ clickedSignUp }) => (
//   <Button onClick={() => clickedSignUp(legacyCampaignId)} />
// ), 'call to action', { text: 'join us' });

// return (
//   <div className={classnames('call-to-action', className)}>
//     <SignupButton />
//   </div>
// );
