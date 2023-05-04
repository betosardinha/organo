import React from 'react';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import './Collaborator.css';

function Collaborator({
  collaborator, backgroundColor, onDelete,
}) {
  return (
    <div className="collaborator">
      <AiFillCloseCircle
        className="delete"
        size={25}
        onClick={() => onDelete(collaborator.uuid)}
      />
      <div className="collaborator-header" style={{ backgroundColor }}>
        <img src={collaborator.image} alt={collaborator.name} />
      </div>
      <div className="collaborator-info">
        <h4>{collaborator.name}</h4>
        <h5>{collaborator.role}</h5>
      </div>
    </div>
  );
}

Collaborator.propTypes = {
  collaborator: PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Collaborator;
