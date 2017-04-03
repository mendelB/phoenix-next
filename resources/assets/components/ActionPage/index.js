/**
 * Render a single feed item.
 *
 * @param block
 * @param index
 * @returns {XML}
 */
import React from 'react';
import { ensureAuth } from '../../helpers';

import Revealer from '../Revealer';
import { Flex, FlexCell } from '../Flex';
import Block from '../Block';
import Markdown from '../Markdown';

/**
 * Render the feed.
 *
 * @returns {XML}
 */
const ActionPage = ({ steps, callToAction, signedUp, hasPendingSignup, isAuthenticated, clickedSignUp }) => {
  if (! signedUp) {
    steps = steps.slice(0, 2);
  }

  const revealer = <Revealer title="sign up" callToAction={callToAction}
                             isLoading={hasPendingSignup}
                             onReveal={() => clickedSignUp()} />;

  return (
    <Flex>
      {steps.map((step, key) => (
        <FlexCell width="full" key={key}>
          <Block>
            <h2>{step.title}</h2>
            <Markdown>{step.content}</Markdown>
          </Block>
        </FlexCell>
      ))}
      {isAuthenticated && signedUp ? null : revealer}
    </Flex>
  );
};

export default ActionPage;
