import React, { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import LanguageSelector from './components/LanguageSelector';
import Team from './components/Team';

function App() {
  const [teams, setTeams] = useState([
    {
      name: 'Programming',
      color: '#57C278',
    },
    {
      name: 'Front-End',
      color: '#82CFFA',
    },
    {
      name: 'Data Science',
      color: '#A6D157',
    },
    {
      name: 'Devops',
      color: '#E06B69',
    },
    {
      name: 'Design/UX',
      color: '#DB6EBF',
    },
    {
      name: 'Mobile',
      color: '#FFBA05',
    },
    {
      name: 'Management',
      color: '#FF8A29',
    },
  ]);
  const [collaborators, setCollaborators] = useState([]);

  const onNewCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  const onChangeTeamColor = (color, name) => {
    setTeams(teams.map((team) => {
      const changedTeam = team;

      if (team.name === name) {
        changedTeam.color = color;
      }

      return changedTeam;
    }));
  };

  return (
    <div className="App">
      <Banner />
      <LanguageSelector />
      <Form
        teams={teams.map((team) => team.name)}
        onRegisteredCollaborator={(collaborator) => onNewCollaborator(collaborator)}
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          team={team}
          collaborators={collaborators.filter((collaborator) => collaborator.team === team.name)}
          onChangeColor={onChangeTeamColor}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
