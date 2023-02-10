import React from 'react';
import PropTypes from 'prop-types';
import './InputText.css';

function InputText({
  label, placeholder, value, required, onChange,
}) {
  return (
    <div className="input-text">
      <label htmlFor={label}>
        {label}
      </label>

      <input
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
