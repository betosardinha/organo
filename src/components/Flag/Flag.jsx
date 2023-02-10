import React from 'react';
import PropTypes from 'prop-types';
import './Flag.css';

function Flag({ image, isSelected, onClick }, handleKeyDown) {
  return (
    <button type="button" onClick={onClick} onKeyDown={() => handleKeyDown} tabIndex={0} className="flag-button">
      <img alt="flag" src={image} className={isSelected ? 'flag flag-selected' : 'flag'} />
    </button>
  );
}

Flag.propTypes = {
  image: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Flag;
