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
};

type CallToActionProps = {
  campaignId: string,
  className: ?string,
  content: ?string,
  impactPrefix: ?string,
  impactSuffix: ?string,
  impactValue: ?string,
  legacyCampaignId: ?string,
  tagline: string,
  useCampaignTagline: bool,
  visualStyle: string,
};

const CallToAction = ({
  campaignId, className, content, impactPrefix, impactSuffix, impactValue,
  legacyCampaignId, tagline, useCampaignTagline, visualStyle,
}: CallToActionProps) => {
  const SignupButton = SignupButtonFactory(({ clickedSignUp }) => (
    <Button onClick={() => clickedSignUp(legacyCampaignId || campaignId)} />
  ), 'call to action', { text: 'join us' });

  return (
    <Card className={classnames('call-to-action rounded padded text-centered', className, {
      'bg-white bordered light': visualStyle === 'light',
      'bg-black dark': visualStyle === 'dark',
      'bg-transparent border-none transparent': visualStyle === 'transparent',
    })}
    >
      { useCampaignTagline ? <div className="cta__tagline margin-bottom-lg">{tagline}</div> : null }

      { impactValue ? renderImpactContent(impactPrefix, impactValue, impactSuffix) : null }

      { content ? <div className="cta__message margin-bottom-lg">{content}</div> : null }

      <SignupButton />
    </Card>
  );
};

CallToAction.defaultProps = {
  className: null,
  content: null,
  impactPrefix: null,
  impactSuffix: null,
  impactValue: null,
  legacyCampaignId: null,
};

export default CallToAction;
