import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMenu } from 'react-icons/ai';

import './FormToggle.css';

function FormToggle({ isSelected, onClick }, handleKeyDown) {
  return (
    <section className={isSelected ? 'toogle-button button-selected' : 'toogle-button'}>
      <button type="button" onClick={onClick} onKeyDown={() => handleKeyDown}>
        <AiOutlineMenu size={36} />
      </button>
    </section>
  );
}

FormToggle.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FormToggle;
