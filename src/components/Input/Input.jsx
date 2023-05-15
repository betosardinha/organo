import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

function Input({
  type, label, placeholder, value, required, onChange,
}) {
  return (
    <div className={`input input-${type}`}>
      <label htmlFor={label}>
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
