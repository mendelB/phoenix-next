import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './SponsorPromotion.scss';

const SponsorPromotion = ({ imgUrl, title, className }) => (
  <div className={classnames('promotions', className)}>
    <div className="promotion promotion--sponsor">
      <div className="wrapper">
        <p className="__copy">Powered by</p>
        <div className="__image">
          <img src={imgUrl} alt={title} />
        </div>
      </div>
    </div>
  </div>
);

SponsorPromotion.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SponsorPromotion.defaultProps = {
  title: 'Campaign Sponsor Logo',
  className: '',
};

export default SponsorPromotion;
