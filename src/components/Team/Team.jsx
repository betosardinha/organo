import React from 'react';
import PropTypes from 'prop-types';
import Collaborator from '../Collaborator';
import './Team.css';

function Team({
  collaborators, primaryColor, secondaryColor, name,
}) {
  return (
    collaborators.length > 0 && (
    <section className="team" style={{ backgroundColor: secondaryColor }}>
      <h3 style={{ borderColor: primaryColor }}>{name}</h3>
      <div className="collaborators">
        {collaborators.map((collaborator) => (
          <Collaborator
            key={collaborator.name}
            name={collaborator.name}
            role={collaborator.role}
            image={collaborator.image}
            backgroundColor={primaryColor}
          />
        ))}
      </div>
    </section>
    )
  );
}

Team.propTypes = {
  collaborators: PropTypes.arrayOf(Collaborator).isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Team;
