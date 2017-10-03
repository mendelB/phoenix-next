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

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    });
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

    console.log(this.state.isLoading);

    return this.state.isLoading ?
      <div className="spinner -centered" />
      :
      <div>
        <Gallery type="triad" className="expand-horizontal-md">
          {Object.keys(entities).map(this.renderItem)}
        </Gallery>

        <LoadMore className="padding-lg" text="view more" onClick={this.props.fetchReportbacks} />
      </div>;
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
