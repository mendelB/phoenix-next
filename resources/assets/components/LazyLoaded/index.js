import React from 'react';

const LazyLoaded = ({isFetching = true, data, placeholder, children}) => {
  if (isFetching) {
    return placeholder ? React.createElement(placeholder): <div className="spinner" />;
  }

  return <div>{React.cloneElement(children, data)}</div>;
};

export default LazyLoaded;
