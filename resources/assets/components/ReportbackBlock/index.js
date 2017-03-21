import React from 'react';
import Block from '../Block';
import { FlexCell } from '../Flex';
import { Figure, BaseFigure } from '../Figure';
import Reaction from '../Reaction';
import LazyLoaded from '../LazyLoaded';

const ReportbackItemPlaceholder = () => {
  const placeholderImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  const reactionButton = <Reaction active={false} total={0}/>;

  return (
    <Figure image={placeholderImage}>
      <BaseFigure media={reactionButton} alignment="right" className="padded">
        <h4>Loading...</h4>
        <p className="footnote">...</p>
      </BaseFigure>
    </Figure>
  );
};

const ReportbackItemContents = props => (
  <Figure image={props.data.image}>
    <BaseFigure media={props.reaction} alignment="right" className="padded">
      <h4>{props.data.firstName}</h4>
      <p className="footnote">{`${props.data.quantity} jeans`}</p>
    </BaseFigure>
  </Figure>
);

const ReportbackItem = props => (
  <Block className="reportback-block placeholder">
    <LazyLoaded isFetching={false} data={props.data} placeholder={ReportbackItemPlaceholder}>
      <ReportbackItemContents data={props.data} reaction={props.reaction} />
    </LazyLoaded>
  </Block>
);

const ReportbackBlock = props => {
  const items = props.reportbacks.map(reportback => {
    const item = reportback.reportback_items.data[0];
    const data = {
      image: item.media.uri,
      firstName: reportback.user.first_name,
      quantity: reportback.quantity,
    };

    const reactionData = props.reactions.data[item.id];

    const toggleOn = () => {
      if (props.user.id === null) {
        window.location.href = '/login';
        return;
      }

      props.userToggledReactionOn(item.id, reactionData.termId);
    };

    const toggleOff = () => {
      props.userToggledReactionOff(item.id, reactionData.id);
    };

    const reaction = (
      <Reaction
        active={reactionData.reacted}
        total={reactionData.total}
        onToggleOn={toggleOn}
        onToggleOff={toggleOff} />
    );

    return (
      <FlexCell key={reportback.id}>
        <ReportbackItem data={data} reaction={reaction} />
      </FlexCell>
    );
  });

  return <FlexCell>{items}</FlexCell>;
};

export default ReportbackBlock;
