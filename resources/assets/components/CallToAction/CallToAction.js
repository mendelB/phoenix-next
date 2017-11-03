/* @flow */

import React from 'react';
import classnames from 'classnames';

import Card from '../Card';
import Button from '../Button/Button';
import SignupButtonFactory from '../SignupButton';

import './cta.scss';

const renderImpactContent = (prefix, value, suffix) => {
  const valueElem = <span className="cta__impact_number">{value}</span>;

  return (
    <div className="cta__impact margin-bottom-lg">
      { prefix ? `${prefix} ` : null } {valueElem} { suffix ? ` ${suffix}` : null }
    </div>
  );
}

const SignupButton = SignupButtonFactory(({ clickedSignUp }) => (
  <Button onClick={() => clickedSignUp(legacyCampaignId)} />
), 'call to action', { text: 'join us' });

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
    <Card className={classnames('call-to-action rounded padded text-centered', className, {
      'bg-white bordered light': style === 'light',
      'bg-black dark': style === 'dark',
      'bg-transparent border-none transparent': style === 'transparent',
    })}>
      { useCampaignTagline ? <div className="cta__tagline margin-bottom-lg">{tagline}</div> : null }

      { impactValue ? renderImpactContent(impactPrefix, impactValue, impactSuffix) : null }

      { content ? <div className="cta__message margin-bottom-lg">{content}</div> : null }

      <SignupButton />
    </Card>
  );
};

CallToAction.defaultProps = {
  className: null,
};

export default CallToAction;
