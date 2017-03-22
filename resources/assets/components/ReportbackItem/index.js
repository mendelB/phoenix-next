import React from 'react';
import { Figure, BaseFigure } from '../Figure';
import Reaction from '../Reaction';
import { ensureAuth } from '../../helpers';
import './reportback-item.scss';

const ReportbackItem = ({data = {}, isFetching = false, toggleReactionOn, toggleReactionOff}) => {
  const image = isFetching ? 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' : data.url;
  const firstName = isFetching ? '…' : data.firstName;
  const impact = isFetching ? '…' : `${data.quantity} jeans`;

  const reaction = isFetching ? null : (
      <Reaction active={data.reaction.reacted} total={data.reaction.total}
                onToggleOn={() => ensureAuth(data.isAuthenticated) && toggleReactionOn(data.id, data.reaction.termId)}
                onToggleOff={() => toggleReactionOff(data.id, data.reaction.id)} />
    );

  return (
    <Figure className="reportback-item" image={image} imageClassName={isFetching ? 'is-fetching' : null}>
      <BaseFigure media={reaction} alignment="right" className="padded">
        <h4>{firstName}</h4>
        <p className="footnote">{impact}</p>
      </BaseFigure>
    </Figure>
  );
};

export default ReportbackItem;
