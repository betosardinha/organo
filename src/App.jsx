import React, { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import LanguageSelector from './components/LanguageSelector';
import Team from './components/Team';

function App() {
  const teams = [
    {
      name: 'Programming',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      name: 'Design/UX',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      name: 'Management',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    },
  ];
  const [collaborators, setCollaborators] = useState([]);

  const onNewCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
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
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
