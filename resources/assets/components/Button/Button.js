import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './button.scss';

const Button = ({
  callback,
  callbackArgument,
  callbackMetadata,
  classNames,
  text,
}) => {
  const handleOnClick = () => {
    callback(callbackArgument, callbackMetadata);
  };

  return (
    <button className={classnames('button', classNames)} onClick={handleOnClick}>{text}</button>
  );
};

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  callbackArgument: PropTypes.string,
  callbackMetadata: PropTypes.oneOfType([
    PropTypes.object,
  ]),
  classNames: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  callbackArgument: null,
  callbackMetadata: null,
  classNames: null,
  text: 'Join Us',
};

export default Button;
