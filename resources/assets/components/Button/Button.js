import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './button.scss';

const Button = ({ onClick, classNames, text }) => {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <button className={classnames('button', classNames)} onClick={handleOnClick}>{text}</button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  classNames: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  classNames: null,
  text: 'Join Us',
};

export default Button;
