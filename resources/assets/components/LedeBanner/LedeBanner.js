import React from 'react';
import PropTypes from 'prop-types';

import LegacyTemplate from './templates/LegacyTemplate';
import MosaicTemplate from './templates/MosaicTemplate';
import { contentfulImageUrl } from '../../helpers';

import './lede-banner.scss';

const LedeBanner = (props) => {
  const { coverImage, template } = props;

  const backgroundImageUrl = contentfulImageUrl(coverImage.url, '800', '600', 'fill');

  switch (template) {
    case 'legacy':
      return <LegacyTemplate backgroundImageUrl={backgroundImageUrl} {...props} />;

    default:
      return <MosaicTemplate backgroundImageUrl={backgroundImageUrl} {...props} />;
  }
};

LedeBanner.propTypes = {
  coverImage: PropTypes.shape({
    description: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  template: PropTypes.string.isRequired,
};


export default LedeBanner;
