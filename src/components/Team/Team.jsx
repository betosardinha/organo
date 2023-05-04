import React from 'react';
import PropTypes from 'prop-types';
import hexToRgba from 'hex-to-rgba';
import Collaborator from '../Collaborator';
import './Team.css';

function Team({
  team, collaborators, onChangeColor, onDelete,
}) {
  return (
    collaborators.length > 0 && (
    <section className="team" style={{ backgroundColor: hexToRgba(team.color, '0.6') }}>
      <input value={team.color} type="color" className="input-color" onChange={(event) => onChangeColor(event.target.value, team.uuid)} />
      <h3 style={{ borderColor: team.color }}>{team.name}</h3>
      <div className="collaborators">
        {collaborators.map((collaborator) => (
          <Collaborator
            key={collaborator.name}
            collaborator={collaborator}
            backgroundColor={team.color}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
    )
  );
}

Team.propTypes = {
  team: PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
  collaborators: PropTypes.arrayOf(Collaborator).isRequired,
  onChangeColor: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Team;
