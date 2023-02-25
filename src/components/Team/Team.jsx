import React from 'react';
import PropTypes from 'prop-types';
import Collaborator from '../Collaborator';
import './Team.css';

function Team({
  team, collaborators, onDelete,
}) {
  return (
    collaborators.length > 0 && (
    <section className="team" style={{ backgroundColor: team.secondaryColor }}>
      <h3 style={{ borderColor: team.primaryColor }}>{team.name}</h3>
      <div className="collaborators">
        {collaborators.map((collaborator) => (
          <Collaborator
            key={collaborator.name}
            collaborator={collaborator}
            backgroundColor={team.primaryColor}
            onDelete={() => onDelete}
          />
        ))}
      </div>
    </section>
    )
  );
}

Team.propTypes = {
  team: PropTypes.shape({
    name: PropTypes.string,
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
  }).isRequired,
  collaborators: PropTypes.arrayOf(Collaborator).isRequired,
  onDelete: PropTypes.func,
};

Team.defaultProps = {
  onDelete: () => {},
};

export default Team;
