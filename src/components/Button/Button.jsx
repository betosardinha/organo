import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ children }) {
  return (
    <button className="button" type="submit">{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
