import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import { CampaignPageContainer, LandingPageContainer } from '../Page';
import NotificationContainer from '../../containers/NotificationContainer';

const Campaign = (props) => {
  const { isAffiliated, useLandingPage } = props;

  return (
    <div>
      <NotificationContainer />
      <Modal />

      {(! isAffiliated && useLandingPage) ?
        <LandingPageContainer {...props} />
        :
        <CampaignPageContainer {...props} />}
    </div>
  );
};

Campaign.propTypes = {
  isAffiliated: PropTypes.bool,
  useLandingPage: PropTypes.bool,
};

Campaign.defaultProps = {
  isAffiliated: false,
  useLandingPage: false,
};

export default Campaign;
