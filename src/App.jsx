import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import FormToggle from './components/FormToggle';
import LanguageSelector from './components/LanguageSelector';
import Team from './components/Team';

function App() {
  const [teams, setTeams] = useState([
    {
      uuid: uuidv4(),
      name: 'Programming',
      color: '#57C278',
    },
    {
      uuid: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA',
    },
    {
      uuid: uuidv4(),
      name: 'Data Science',
      color: '#A6D157',
    },
    {
      uuid: uuidv4(),
      name: 'Devops',
      color: '#E06B69',
    },
    {
      uuid: uuidv4(),
      name: 'Design/UX',
      color: '#DB6EBF',
    },
    {
      uuid: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05',
    },
    {
      uuid: uuidv4(),
      name: 'Management',
      color: '#FF8A29',
    },
  ]);

  const [showForm, setShowForm] = useState(true);

  const onToggleForm = () => {
    setShowForm(!showForm);
  };

  const [collaborators, setCollaborators] = useState([]);

  const onNewCollaborator = (collaborator) => {
    setCollaborators([...collaborators, { ...collaborator, uuid: uuidv4() }]);
  };

  const onDeleteCollaborator = (uuid) => {
    setCollaborators(collaborators.filter((collaborator) => collaborator.uuid !== uuid));
  };

  const onFavoriteCollaborator = (uuid) => {
    setCollaborators(collaborators.map((collaborator) => {
      const changedCollaborator = collaborator;

      if (changedCollaborator.uuid === uuid) {
        changedCollaborator.favorite = !changedCollaborator.favorite;
      }

      return changedCollaborator;
    }));
  };

  const onChangeTeamColor = (color, uuid) => {
    setTeams(teams.map((team) => {
      const changedTeam = team;

      if (changedTeam.uuid === uuid) {
        changedTeam.color = color;
      }

      return changedTeam;
    }));
  };

  const registerTeam = (newTeam) => {
    setTeams([...teams, { ...newTeam, id: uuidv4() }]);
  };

  return (
    <div className="App">
      <Banner />
      <LanguageSelector />
      <FormToggle
        isSelected={showForm}
        onClick={() => onToggleForm()}
      />
      <Form
        registerTeam={registerTeam}
        teams={teams.map((team) => team.name)}
        onRegisteredCollaborator={onNewCollaborator}
        showForm={showForm}
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          team={team}
          collaborators={collaborators.filter((collaborator) => collaborator.team === team.name)}
          onChangeColor={onChangeTeamColor}
          onDelete={onDeleteCollaborator}
          onFavorite={onFavoriteCollaborator}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
