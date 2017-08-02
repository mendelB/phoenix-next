import React from 'react';
import Card from '../Card';
import Markdown from '../Markdown';

const CampaignUpdate = (props) => {
  const { author, content, id } = props;

  return (
    <div>
      <Card header="Campaign Update">
        <Markdown>
          {content}
        </Markdown>
      </Card>
    </div>
  );
};

export default CampaignUpdate;
