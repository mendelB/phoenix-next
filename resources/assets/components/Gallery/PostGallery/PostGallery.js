import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../Card';
import Gallery from '../Gallery';
import ReportbackItemContainer from '../../ReportbackItem';

class PostGallery extends React.Component {
  constructor() {
    super();

    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    //
  }

  renderItem(key) {
    const itemId = this.props.reportbacks.entities[key].reportback_items[0];
    const post = this.props.reportbacks.itemEntities[itemId];

    return (
      <Card className="rounded" key={post.id}>
        <ReportbackItemContainer id={post.reportback.id} />
      </Card>
    );
  }

  render() {
    const { entities, isFetching } = this.props.reportbacks;

    return isFetching ?
      <div className="spinner -centered" />
      :
      <Gallery type="triad" className="expand-horizontal-md">
        {Object.keys(entities).map(this.renderItem)}
      </Gallery>;
  }
}

PostGallery.propTypes = {
  reportbacks: PropTypes.shape({
    entities: PropTypes.objectOf(PropTypes.object),
    isFetching: PropTypes.bool,
    itemEntities: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

export default PostGallery;
