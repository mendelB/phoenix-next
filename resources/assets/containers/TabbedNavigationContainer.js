import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../components/Button/Button';
import NavigationLink from '../components/Navigation/NavigationLink';
import TabbedNavigation from '../components/Navigation/TabbedNavigation';
import { clickedSignUp } from '../actions';
import { paths } from '../helpers/navigation';

const mapStateToProps = state => ({
  isAffiliated: state.signups.thisCampaign,
  legacyCampaignId: state.campaign.legacyCampaignId,
  pages: state.campaign.pages,
  pathname: state.routing.location.pathname,
});

const mapDispatchToProps = {
  clickedSignUp,
};

const TabbedNavigationContainer = ({ isAffiliated, legacyCampaignId, pages }) => {
  // Create links for additional "content" pages on this campaign in Contentful.
  const additionalPages = pages.map((page) => {
    const path = `${paths.pages}${page.fields.slug}`;
    return (
      <NavigationLink key={page.id} to={path}>{page.fields.title}</NavigationLink>
    );
  });

  return (
    <TabbedNavigation>
      <div className="nav-items">
        <NavigationLink to={paths.community} exact>Community</NavigationLink>
        <NavigationLink to={paths.action}>Action</NavigationLink>
        { additionalPages }
      </div>

      { isAffiliated ? null : <Button classNames="-inline -align-right nav-button" callback={clickedSignUp} callbackArgument={legacyCampaignId} callbackMetadata={{ source: 'tabbed navigation|text: Join us' }} /> }
    </TabbedNavigation>
  );
};

TabbedNavigationContainer.propTypes = {
  isAffiliated: PropTypes.bool.isRequired,
  legacyCampaignId: PropTypes.string.isRequired,
  pages: PropTypes.oneOfType([
    PropTypes.array,
  ]),
};

TabbedNavigationContainer.defaultProps = {
  pages: [],
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TabbedNavigationContainer));
