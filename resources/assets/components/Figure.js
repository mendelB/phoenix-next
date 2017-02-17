import React from 'react';

const Figure = (props) => {
  // @TODO: Remove style overrides & add props for modifier classes.
  return (
    <article className="figure -left -center" style={{marginTop: '12px'}}>
      <div className="figure__media">
        <img className="avatar" alt="kitten overlords" src={props.image} style={{width: '75px'}}/>
      </div>
      <div className="figure__body">
        {props.children}
      </div>
    </article>
  );
};

export default Figure;
