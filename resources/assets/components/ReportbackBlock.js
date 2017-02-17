import React from 'react';
import Block from './Block';
import { FlexCell } from './Flex';

const ReportbackItem = (props) => {
  const image = props.image;
  const name = props.name;
  const impact = props.impact;

  return (
    <Block className="reportback-block">
      <img src={image} />
      <div className="padded">
        <h4>{name}</h4>
        <p className="footnote">{impact}</p>
      </div>
    </Block>
  );
};

const ReportbackBlock = (props) => {
  const items = props.reportbacks.map(reportback => {
    const image = reportback.reportback_items.data[0].media.uri;
    const name = reportback.user.first_name;

    return <FlexCell key={reportback.id}><ReportbackItem image={image} name={name} impact={reportback.quantity + ' jeans'} /></FlexCell>;
  });

  return <FlexCell>{items}</FlexCell>;
};

export default ReportbackBlock;
