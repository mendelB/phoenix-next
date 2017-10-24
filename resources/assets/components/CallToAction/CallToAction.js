/* @flow */

import React from 'react';
import classnames from 'classnames';

import Card from '../Card';
import Button from '../Button/Button';
import SignupButtonFactory from '../SignupButton';

// import './cta.scss';

const renderImpactContent = (prefix, value, suffix) => {
  const valueElem = <span>{value}</span>;

  return (
    <div className="cta__impact">
      { prefix ? `${prefix} ` : null } {valueElem} { suffix ? ` ${suffix}` : null }
    </div>
  );
}

type CallToActionProps = {
  legacyCampaignId: string,
  className: ?string,
  impactPrefix: ?string,
  impactSuffix: ?string,
  impactValue: ?string,
};

const CallToAction = ({
  legacyCampaignId, className, content, impactPrefix, impactSuffix, impactValue
}: CallToActionProps) => {
  return (
    <Card className="call-to-action rounded padded text-centered">
      { impactValue ? renderImpactContent(impactPrefix, impactValue, impactSuffix) : null }

      { content ? <div>{content}</div> : null }
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

// { prefix ? <span>{prefix}</span> : null }
//       <span>{value}</span>
//       { suffix ? <span>{suffix}</span> : null }
