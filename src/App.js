import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const onNewCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form onRegisteredCollaborator={collaborator => onNewCollaborator(collaborator)} />
    </div>
  );
}

export default App;
