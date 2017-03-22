import React from 'react';
import Block from '../Block';
import { FlexCell } from '../Flex';
import ReportbackPhoto from '../ReportbackPhoto';
import './reportback-block.scss';

const ReportbackBlock = props => {
  const items = props.reportbacks.map(reportback => {
    const reportbackItem = reportback.reportback_items.data[0];
    const data = {
      isAuthenticated: props.user.id !== null,
      id: reportbackItem.id,
      url: reportbackItem.media.uri,
      quantity: reportback.quantity,
      firstName: reportback.user.first_name,
      reaction: props.reactions.data[reportbackItem.id],
    };

    return (
      <FlexCell key={reportback.id}>
        <Block className="reportback-block">
          <ReportbackPhoto isFetching={false} data={data}
                           toggleReactionOn={props.toggleReactionOn}
                           toggleReactionOff={props.toggleReactionOff} />
        </Block>
      </FlexCell>
    );
  });

  return <FlexCell>{items}</FlexCell>;
};

export default ReportbackBlock;
