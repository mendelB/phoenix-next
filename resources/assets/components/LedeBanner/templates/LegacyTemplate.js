import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const LegacyTemplate = (props) => {
  const {
    title,
    subtitle,
    backgroundImageStyle,
    isAffiliated,
    legacyCampaignId,
    clickedSignUp,
    endDate,
  } = props;

  return (
    <header role="banner" className="header -hero header--action has-promotions" style={backgroundImageStyle}>
      <div className="wrapper">
        <h1 className="header__title">{title}</h1>
        <p className="header__subtitle">{subtitle}</p>
        { endDate ? <p className="header__date"> Ends {moment(endDate.date).format('MMMM Do')}</p> : null }
      </div>
    </header>
  );
};

LegacyTemplate.propTypes = {
  // backgroundImageStyle: PropTypes.string.isRequired,
  clickedSignUp: PropTypes.func.isRequired,
  // endDate: PropTypes.string.
  isAffiliated: PropTypes.bool.isRequired,
  legacyCampaignId: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default LegacyTemplate;
