import React from 'react';
import PageBlock from '../components/PageBlock';
import { Flex, FlexCell } from '../components/Flex';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  pages: state.campaign.pages,
});

const ConnectedContentPage = connect(mapStateToProps)(PageBlock);

const ContentPageContainer = (props) => (
  <Flex>
    <FlexCell>
      <ConnectedContentPage route={props.params} />
    </FlexCell>
  </Flex>
);

export default ContentPageContainer;
