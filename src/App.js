import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const onNewCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form onRegisteredCollaborator={collaborator => onNewCollaborator(collaborator)} />
      <Team name="Front-End" />
    </div>
  );
}

export default App;
