import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { markdown } from '../../helpers';

import './markdown.scss';

const Markdown = ({ classNames = null, children }) => (
  <div className={classnames('markdown', 'with-lists', classNames)} dangerouslySetInnerHTML={markdown(children)} /> // eslint-disable-line react/no-danger
);

Markdown.propTypes = {
  children: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};

Markdown.defaultProps = {
  classNames: null,
};

export default Markdown;
