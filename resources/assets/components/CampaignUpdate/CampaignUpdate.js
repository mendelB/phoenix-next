import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import Byline from '../Byline';
import Markdown from '../Markdown';

const CampaignUpdate = ({ id, author, content }) => {
  const { avatar, jobTitle, name } = author.fields;

  return (
    <Card id={id} className="rounded bordered" title="Campaign Update">
      <Markdown className="padded">
        {content}
      </Markdown>

      <footer className="padded">
        <Byline
          author={name}
          avatar={avatar || undefined}
          jobTitle={jobTitle || undefined}
        />
      </footer>
    </Card>
  );
};

CampaignUpdate.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    fields: PropTypes.object,
  }).isRequired,
  content: PropTypes.string.isRequired,
};

export default CampaignUpdate;
