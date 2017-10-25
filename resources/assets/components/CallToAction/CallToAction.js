/* @flow */

import React from 'react';
import classnames from 'classnames';

import Card from '../Card';
import Button from '../Button/Button';
import SignupButtonFactory from '../SignupButton';

import './cta.scss';

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
  tagline: string,
  useCampaignTagline: bool,
};

const CallToAction = ({
  legacyCampaignId, className, content, impactPrefix, impactSuffix, impactValue,
  tagline, useCampaignTagline, style,
}: CallToActionProps) => {

  let classes;

  return (
    <Card className={classnames('call-to-action rounded padded text-centered', {
      'bg-white bordered light': style === 'light',
      'bg-black dark': style === 'dark',
      'bg-transparent border-none transparent': style === 'transparent',
    })}>
      { useCampaignTagline ? <div className="cta__tagline">{tagline}</div> : null }

      { impactValue ? renderImpactContent(impactPrefix, impactValue, impactSuffix) : null }

      { content ? <div className="cta__message">{content}</div> : null }

       <button className="button" onClick={() => {}}>Join us</button>
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
