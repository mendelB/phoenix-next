import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../Card';
import Gallery from '../Gallery';
import LoadMore from '../../LoadMore';
import ReportbackItemContainer from '../../ReportbackItem';

class PostGallery extends React.Component {
  constructor() {
    super();

    this.renderItem = this.renderItem.bind(this);
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

    return ! this.props.reportbacks.total ?
      <div className="spinner -centered" />
      :
      <div>
        <Gallery type="triad" className="expand-horizontal-md">
          {Object.keys(entities).map(this.renderItem)}
        </Gallery>

        <LoadMore className="padding-lg text-centered" text="view more" onClick={this.props.fetchReportbacks} isLoading={isFetching} />
      </div>;
  }
}

PostGallery.propTypes = {
  fetchReportbacks: PropTypes.func.isRequired,
  reportbacks: PropTypes.shape({
    entities: PropTypes.objectOf(PropTypes.object),
    isFetching: PropTypes.bool,
    itemEntities: PropTypes.objectOf(PropTypes.object),
    total: PropTypes.number,
  }).isRequired,
};

export default PostGallery;
