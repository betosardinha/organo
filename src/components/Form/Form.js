import { useState } from 'react';
import Button from '../Button';
import InputText from '../InputText';
import Select from '../Select';
import './Form.css';

const Form = (props) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  const onSave = (event) => {
    event.preventDefault();
    props.onRegisteredCollaborator({
      name,
      role,
      image,
      team
    });
  };

  return (
    <section className='form'>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText required={true} label="Name" placeholder="Digite seu nome" value={name} onChange={value => setName(value)} />
        <InputText required={true} label="Role" placeholder="Digite seu cargo" value={role} onChange={value => setRole(value)} />
        <InputText required={true} label="Image" placeholder="Digite o endereço da imagem" value={image} onChange={value => setImage(value)} />
        <Select  required={true} label="Team" items={props.teams} value={team} onChange={value => setTeam(value)} />
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
}

export default Form;