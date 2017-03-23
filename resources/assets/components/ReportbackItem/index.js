import React from 'react';
import { Figure, BaseFigure } from '../Figure';
import Reaction from '../Reaction';
import { ensureAuth } from '../../helpers';
import './reportback-item.scss';

const ReportbackItem = ({id, url, quantity, firstName, reaction, isFetching = false, toggleReactionOn, toggleReactionOff}) => {
  firstName = isFetching ? '…' : firstName;
  url = isFetching ? 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' : url;
  const impact = isFetching ? '…' : `${quantity} jeans`;

  const reactionElement = isFetching ? null : (
    <Reaction active={reaction.reacted} total={reaction.total}
              onToggleOn={() => ensureAuth(isAuthenticated) && toggleReactionOn(id, reaction.termId)}
              onToggleOff={() => toggleReactionOff(id, reaction.id)} />
  );

  return (
    <Figure className="reportback-item" image={url} imageClassName={isFetching ? 'is-fetching' : null}>
      <BaseFigure media={reactionElement} alignment="right" className="padded">
        <h4>{firstName}</h4>
        <p className="footnote">{impact}</p>
      </BaseFigure>
    </Figure>
  );
};

export default ReportbackItem;
