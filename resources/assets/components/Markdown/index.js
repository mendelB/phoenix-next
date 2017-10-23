import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { markdown, contentfulImageUrl } from '../../helpers';

import './markdown.scss';

const formatImageUrl = url => (contentfulImageUrl(url, '1000', '700', 'fill'));
const formatImageUrls = string => (string.replace(/\/\/images\.contentful\.com.+\.jpg/g, formatImageUrl));

const Markdown = ({ className = null, children }) => (
  <div className={classnames('markdown', 'with-lists', className)} dangerouslySetInnerHTML={markdown(formatImageUrls(children))} /> // eslint-disable-line react/no-danger
);

Markdown.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Markdown.defaultProps = {
  className: null,
};

export default Markdown;
