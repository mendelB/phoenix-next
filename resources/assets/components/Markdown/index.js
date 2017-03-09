import React from 'react';
import { markdown } from "../../helpers";

const Markdown = ({className = null, children}) => (
  <div className={className} dangerouslySetInnerHTML={markdown(children)} />
);

Markdown.propTypes = {
  children: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
};

export default Markdown;
