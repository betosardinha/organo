import React from 'react';
import PropTypes from 'prop-types';
import './Collaborator.css';

function Collaborator({
  backgroundColor, name, role, image,
}) {
  return (
    <div className="collaborator">
      <div className="collaborator-header" style={{ backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="collaborator-info">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
}

Collaborator.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Collaborator;
