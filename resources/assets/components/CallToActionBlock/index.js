import React from 'react';
import './cta.scss';

const CallToActionBlock = (props) => {
  return (
    <div className="cta">
      <div className="cta__block">
        <p className="cta__message">{ props.fields.title }</p>
      </div>
      <div className="cta__block">
        <a href="#" className="button">Get Involved</a>
      </div>
    </div>
  );
};

export default CallToActionBlock;
