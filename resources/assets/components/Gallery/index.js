import React from 'react';
import { get } from 'lodash';

const renderGalleryItem = (child, index) => {
  return <li key={`submission-${index}`}>{child}</li>;
};

const Gallery = ({isFetching, className = null, children}) => {
  if (isFetching) {
    return <div>loading…</div>;
  }
  else {
    return children.length ? <ul>{children.map(renderGalleryItem)}</ul> : null;
  }
}

Gallery.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element),
};

export default Gallery;
