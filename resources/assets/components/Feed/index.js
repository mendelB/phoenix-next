import React from 'react';
import { get } from 'lodash';

import CallToActionBlock from '../CallToActionBlock';
import CampaignUpdateBlock from '../CampaignUpdateBlock';
import PlaceholderBlock from '../PlaceholderBlock';
import { Flex, FlexCell } from '../Flex';
import './feed.scss';

class Feed extends React.Component {
  /**
   * Render a single feed item.
   *
   * @param block
   * @returns {XML}
   */
  renderFeedItem(block) {
    const type = block.type === 'customBlock' ? block.fields.type : block.type;

    const BlockComponent = get({
      'campaign_update': CampaignUpdateBlock,
      'join_cta': CallToActionBlock,
    }, type, PlaceholderBlock);

    return <FlexCell key={block.id} modifiers={block.fields.displayOptions}><BlockComponent {...block} /></FlexCell>;
  }

  /**
   * Render the feed.
   *
   * @returns {XML}
   */
  render() {
    const feed = this.props.state.campaign.activityFeed;

    return (
      <div className="feed-container">
        <div className="wrapper">
          <Flex>
            {feed.map((block) => this.renderFeedItem(block))}
          </Flex>
        </div>
      </div>
    );
  }
};

export default Feed;
